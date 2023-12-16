from app import app
import mysql.connector, os
from flask import jsonify, abort
from flask import request
from werkzeug.utils import secure_filename
import jwt
from datetime import datetime, timedelta
from functools import wraps
import secrets
# from google.cloud import storage
import string , pdb
from models.userdata import User
from flask_mail import Mail, Message
from app import mail
import random, boto3
# from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
import bcrypt
secret_key = ''.join(secrets.choice(string.ascii_letters + string.digits) for _ in range(32))
app.config['SECRET_KEY'] = secret_key

BUCKET_NAME = 'riseslabs'
S3_BUCKET_NAME = 'riseslabs'
AWS_ACCESS_KEY= 'AKIAVAND6V4DC36JGN47'
AWS_SECRET_ACCESS_KEY= '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'
AWS_DOMAIN= 'https://riseslabs.s3.ap-south-1.amazonaws.com/'
S3_REGION = 'ap-south-1'
UPLOAD_FOLDER = 'uploads'

# Initialize AWS S3 client
s3 = boto3.client('s3', aws_access_key_id=AWS_ACCESS_KEY, aws_secret_access_key=AWS_SECRET_ACCESS_KEY, region_name=S3_REGION)



ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'mp4', 'mp3'}
# storage_client = storage.Client()

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


db = mysql.connector.connect(
    host="localhost",        # Replace with your MySQL host
    user="root",    # Replace with your MySQL username
    password="",# Replace with your MySQL password
    database="registrationdb"
)
try:
 cur = db.cursor(dictionary=True)
 print("connection successful")
except:
 print("some error")

def send_email():
    msg = Message('password reset request', recipients=[])
    msg.body = ""
    mail.send(msg)

def generate_otp():
    digits = string.digits
    return ''.join(random.choice(digits) for _ in range(6))

def generate_token(email, password):
    return jwt.encode({'email': email, 'password': password}, app.config['SECRET_KEY'], algorithm='HS256')

@app.route("/getuser", methods=["GET"])
def getuserdetails():
  cur.execute("SELECT * FROM registration")
  result = cur.fetchall()
  if len(result)>0:
    return jsonify(result)
  else:
    return "No data found"
  
@app.route('/createuser', methods=['POST'])
def registeruser():
    # pdb.set_trace()
    try:
        _json = request.json
        _firstname = _json['Firstname']
        _lastname = _json['Lastname']
        _email = _json['Email']
        _password = _json['Password']
        print(_firstname,_password)
        if _firstname and _lastname and _email and _password and request.method == 'POST':
            hashed_password = bcrypt.hashpw(_password.encode('utf-8')  , bcrypt.gensalt())
            print(hashed_password)
            insert_query = "INSERT INTO registration (Firstname,Lastname,Email,Password) VALUES (%s, %s, %s, %s)"
            values = (_firstname, _lastname, _email, hashed_password)
            cur.execute(insert_query, values)
            db.commit()
            response = {'message': 'Registration successful!', 'firstname': _firstname,
                        'lastname': _lastname}
            return response, 201
        else:
            return "error while sending data"
    except Exception as e:
        print(e)
    
@app.route('/login' , methods =["POST"])
def loginUser():
    # pdb.set_trace()
    try:
        _json = request.json
        _email = _json.get('Email')
        _password = _json.get('Password')
        _token = _json.get('Token')
        print(_email)
        if _email and _password and request.method == 'POST':
            getpasswordquery = "SELECT Password FROM registration WHERE Email = %s"
            cur.execute(getpasswordquery, (_email,))
            password = cur.fetchone()
            hashedpassword = password['Password']
            # hashed_password = bcrypt.checkpw(_password.encode('utf-8'), hashedpassword)
            # Query the database to check if the user with provided email and password exists
            select_query = "SELECT * FROM registration WHERE Email = %s AND Password = %s"
            values = (_email, hashedpassword)
            cur.execute(select_query, values)
            user = cur.fetchone()
            print(user)
            if user:
                # token = generate_token(_email,_password)
                _token = generate_token(_email, _password)
                # Store the token in the usertoken table
                insert_token_query = "INSERT INTO usertoken (UserId, Email, Token) VALUES (%s, %s, %s)"
                insert_token_values = (user['UserID'], _email, _token)
                cur.execute("BEGIN")  # Start a transaction
                print(insert_token_values)
                cur.execute(insert_token_query, insert_token_values)
                db.commit()
                cur.execute("SELECT * FROM usertoken")
                userTokenData = cur.fetchall()
                print(userTokenData)
                return jsonify({'tokendata': userTokenData,
                                'message': 'Login successful',
                                }), 200
            else:
                return jsonify({'message': 'Invalid credentials'}), 401
        else:
            return "Error while sending data"
    except Exception as e:
        print(e)
        abort(500, description='Internal Server error')

@app.route('/logout', methods=['PUT'])
def logoutUser():
    try:
        # Retrieve the token from the request, e.g., in the request's JSON data
        _json = request.json
        _token = _json.get('Token')

        if _token:
            # Remove the token from the usertoken table to log the user out
            delete_token_query = "DELETE FROM usertoken WHERE Token = %s"
            cur.execute(delete_token_query, (_token,))
            db.commit()

            return jsonify({'message': 'Logout successful'}), 200
        else:
            return jsonify({'message': 'Invalid request. Token missing.'}), 400
    except Exception as e:
        print(e)
        abort(500, description='Internal server error')



@app.route('/forgotpasswords', methods =["POST"])
def checkEmailToForgotPassword():
    pdb.set_trace()
    try:
        _json = request.json
        _email = _json['Email']

        if _email and request.method == 'POST':
            # Query the database to check if the user with provided email  exists
            select_query = "SELECT * FROM registration WHERE Email = %s"
            values = (_email,)
            cur.execute(select_query, values)
            user = cur.fetchone()

            if user:
                reset_token = secrets.token_urlsafe(20)  # Generates a URL-safe token
                save_query = "INSERT INTO reset_password_tokens(Token, UserID ,Email) values(%s, %s, %s)"
                values = (reset_token, user['UserID'], _email)
                cur.execute(save_query,values)
                db.commit()
                reset_link = f"http://localhost:4200/updatepassword?token={reset_token}"

                msg = Message('password reset request', recipients=[user['Email']], sender='riseslabs@team.com')
                msg.body=f''' To reset your password. Please follow the below link.

                {reset_link}

                If you did not send a password reset request. please ignore this message.
                
                
                '''
 
                mail.send(msg)
                email_data = {
                    'Email': user['Email'],  # Replace 'Email' with the actual column name
                    # Add other columns as needed
                }
                return jsonify({'message': 'Email is Verified', 'email_data': email_data}), 200
            else:
                return jsonify({'message': 'Email not found'}), 401
        else:
            return "Error while sending data"
    except Exception as e:
        print(e)
        abort(500, description='Internal server error')

@app.route('/updatepassword', methods=['POST'])
def update_user_password():
    try:
        _json = request.json
        _email = _json['Email']
        _password = _json['Password']
        
        if _email and _password and request.method == 'POST':
            # Check if the email already exists in the database
            select_query = "SELECT Email FROM registration WHERE Email = %s"
            cur.execute(select_query, (_email,))
            existing_email = cur.fetchone()
            
            if existing_email:
                # If the email already exists, update the password
                update_query = "UPDATE registration SET Password = %s WHERE Email = %s"
                cur.execute(update_query, (_password, _email))
                db.commit()
                response = {'message': 'Password updated successfully!', 'email': _email}
                return jsonify(response), 200
            
            else:
                return "Error while sending data", 400  # Return a 400 Bad Request status for invalid data
    except Exception as e:
        print(e)
        return "Internal Server Error", 500

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/saveuserfriends', methods=["POST"])
def saveuserfriendsdetails():
    try:
        # _json = request.json
        _userid = request.form.get('UserID')
        _friendname = request.form.get('FriendName')
        _city = request.form.get('City')
        _contact = request.form.get('Contact')
        _profession = request.form.get('Profession')
        print(_city,_profession)
        if _friendname and _city and _contact and _profession and request.method == 'POST':
            print(request.files)
            if 'Filepath' in request.files:
                file = request.files['Filepath']
                print(file)
                if file and allowed_file(file.filename):
                    
                    print(file.filename)
                    s3.upload_fileobj(file, S3_BUCKET_NAME, file.filename)

                    # Get the public URL of the uploaded file
                    file_url = f'https://{S3_BUCKET_NAME}.s3.{S3_REGION}.amazonaws.com/{file.filename}'
                    print(file_url)

                    
                    insert_query = "INSERT INTO saveuserfriends (UserID, FriendName, City, Contact, Profession, Filepath) VALUES (%s, %s, %s, %s, %s, %s)"
                    values = (_userid, _friendname, _city, _contact, _profession, file_url)
                    cur.execute(insert_query, values)
                    db.commit()

                    response = {'message': 'User Friend Data Saved!', 'userid': _userid, 'friendname': _friendname,
                                'city': _city, 'contact': _contact, 'profession': _profession, 'filepath': file_url}
                    return jsonify(response), 200
                else:
                    return jsonify({'message': 'Invalid file type or no file provided'}), 400
            else:
                return jsonify({'message': 'File not provided'}), 400
        else:
            return jsonify({'message': 'Invalid credentials'}), 401

    except Exception as e:
        print(e)
        abort(500, description='Internal Server error')


@app.route('/userfriendslist', methods=['POST'])
def GetUserFriendsList():
    # pdb.set_trace()
    try:
        _json = request.json
        _userid = _json.get('UserID')
        print(_userid)
        if _userid and request.method == 'POST':
            get_query = "SELECT * FROM saveuserfriends WHERE UserID = %s"
            cur.execute(get_query, (_userid,))
            result = cur.fetchall()
            db.commit()
            print(result)
            return jsonify(result), 200
        else:
            return jsonify({'message': 'User friends lists not found'}), 401  
    except Exception as e:
        print(e)
        abort(500, description='Internal Server error')

@app.route('/updateuser/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    # pdb.set_trace()
    # print(user_id)
    try:
        _json = request.json

        if not _json:
            return "No data received", 400

        user_data = User.from_json(_json)

        if not all([user_data.firstname, user_data.lastname, user_data.email, user_data.password,user_data.age
                    ,user_data.phonenumber,user_data.address]):
            return "Required fields are missing", 400

        update_query = (
            "UPDATE registration SET Firstname = %s, Lastname = %s, Email = %s, "
            "Password = %s, Age = %s, Phonenumber = %s, Address = %s WHERE UserID = %s"
        )
        values = (
            user_data.firstname,
            user_data.lastname,
            user_data.email,
            user_data.password,
            user_data.age,
            user_data.phonenumber,
            user_data.address,
            user_id
        )
        cur.execute(update_query, values)
        db.commit()

        response = {
            'message': 'Profile updated successfully!',
            **user_data.to_dict()
        }
        return jsonify(response), 200  # 200 for successful update

    except KeyError as e:
        return f"Error: {e}. Please provide all required fields", 400  # 400 for bad request

    except Exception as e:
        print(e)
        return "An error occurred while updating the profile", 500

@app.route('/otpresetpassword', methods=['POST'])
def reset_password_with_token():
    try: 
      _json = request.json
      token = _json.get('token')
      new_password = _json.get('newPassword')

     # Query to check if the token exists in the database
      select_query = "SELECT * FROM reset_password_tokens WHERE token = %s"
      values = (token,)
      cur.execute(select_query, values)
      user_token = cur.fetchone()

      if user_token:
        hashed_password = bcrypt.hashpw(new_password.encode('utf-8'), bcrypt.gensalt())
        # Token exists, update the user's password in the 'registration' table
        update_query = "UPDATE registration SET Password = %s WHERE UserID = %s"
        # Assuming you've stored the user ID associated with the token
        values = (hashed_password, user_token['UserID'])
        cur.execute(update_query, values)
        db.commit()
        # token_data = {
        #             'Token': user_token['Email'], 
        #         }
        return jsonify({'message': 'Password updated successfully',
                         'token': user_token['Token']}), 200
      else:
        return jsonify({'message': 'Invalid or expired token'}), 401
    except Exception as e:
        print(e)
        return "An error occurred while updating the profile", 500
    
@app.route('/savemypictures', methods=['POST'])
def saveMyPicutures():
    try:
        _userid = request.form.get('UserID')
        if request.method == 'POST':
            print(request.files)
            if 'Picture' in request.files:
                picture = request.files['Picture']
                print(picture)
                if picture:
                    
                    print(picture.filename)
                    s3.upload_fileobj(picture, S3_BUCKET_NAME, picture.filename)

                    # Get the public URL of the uploaded file
                    file_url = f'https://{S3_BUCKET_NAME}.s3.{S3_REGION}.amazonaws.com/{picture.filename}'
                    print(file_url)

                    
                    insert_query = "INSERT INTO userpictures (UserID,Picture) VALUES (%s, %s)"
                    values = (_userid, file_url)
                    cur.execute(insert_query, values)
                    db.commit()

                    response = {'message': 'User Picture Data Saved!', 'userid': _userid, 'filepath': file_url}
                    return jsonify(response), 200
                else:
                    return jsonify({'message': 'Invalid file type or no file provided'}), 400
            else:
                return jsonify({'message': 'File not provided'}), 400
        else:
            return jsonify({'message': 'Invalid credentials'}), 401

    except Exception as e:
        print(e)
        abort(500, description='Internal Server error')

@app.route('/deleteuserpicture/<int:PictureId>', methods=['DELETE'])
def delete_photo(PictureId):
    try:
        # Your code for deleting the photo based on pictureId
        # Replace the following line with your actual deletion logic
        delete_query = "DELETE FROM userpictures WHERE PictureId = %s"
        values = (PictureId,)
        cur.execute(delete_query, values)
        db.commit()
        return jsonify({'message': f'Photo with PictureId {PictureId} deleted successfully'}), 200

    except Exception as e:
        print(e)
        return jsonify({'error': 'Internal Server Error'}), 500

@app.route('/getuserpictures', methods=['GET'])
def get_photos():
    try:
        cur.execute("SELECT * FROM userpictures")
        result = cur.fetchall()
        if len(result)>0:
           return jsonify(result)
        else:
           return "No data found"
    except Exception as e:
        print(e)
        return jsonify({'error': 'Internal Server Error'}), 500
    
@app.route('/edituserpicture/<int:PictureId>', methods=['PUT'])
def update_photo(PictureId):
    # pdb.set_trace()
    try:
        print(request.files)
        if 'Picture' in request.files:
            new_photo = request.files['Picture']
            print(new_photo)
            if new_photo:
                    
                    print(new_photo.filename)
                    s3.upload_fileobj(new_photo, S3_BUCKET_NAME, new_photo.filename)

                    # Get the public URL of the uploaded file
                    file_url = f'https://{S3_BUCKET_NAME}.s3.{S3_REGION}.amazonaws.com/{new_photo.filename}'
                    print(file_url)
                    # Your code for updating the photo based on pictureId and new_photo
                    # Replace the following line with your actual update logic
                    update_query = "UPDATE userpictures SET Picture = %s WHERE PictureId = %s"
                    values = (file_url, PictureId)
                    cur.execute(update_query, values)
                    db.commit()
            else:
                    return jsonify({'message': 'Invalid file type or no file provided'}), 400    
                    
            return jsonify({'message': f'Photo with PictureId {PictureId} updated successfully'}), 200
        else:
            return jsonify({'error': 'Invalid request'}), 400

    except Exception as e:
        print(e)
        return jsonify({'error': 'Internal Server Error'}), 500
    
@app.route('/getCountries', methods=['GET'])
def get_countries():
    cur.execute("SELECT * FROM countries")
    countries = cur.fetchall()
    return jsonify(countries)

@app.route('/getStates/<int:country_id>', methods=['GET'])
def get_states(country_id):
    cur.execute("SELECT * FROM states WHERE country_id = %s", (country_id,))
    states = cur.fetchall()
    return jsonify(states)

@app.route('/getDistricts/<int:state_id>', methods=['GET'])
def get_districts(state_id):
    cur.execute("SELECT * FROM districts WHERE state_id = %s", (state_id,))
    districts = cur.fetchall()
    return jsonify(districts)

@app.route('/getMandals/<int:district_id>', methods=['GET'])
def get_mandals(district_id):
    cur.execute("SELECT * FROM mandals WHERE district_id = %s", (district_id,))
    mandals = cur.fetchall()
    return jsonify(mandals)

@app.route('/saveaddress', methods=['POST'])
def save_address():
    data = request.get_json()
    userid = data['UserID']
    country = data['countries']
    state = data['states']
    district = data['districts']
    mandal = data['mandals']
    village = data['village']
    area = data['area']
    cur.execute("SELECT country_name FROM countries WHERE country_id = %s", (country,))
    country_name = cur.fetchone()
    country_name = country_name['country_name'] if country_name else None
    print(country_name)
    cur.execute("SELECT state_name FROM states WHERE state_id = %s", (state,))
    state_name = cur.fetchone()
    state_name = state_name['state_name'] if state_name else None
    cur.execute("SELECT district_name FROM districts WHERE district_id = %s", (district,))
    district_name = cur.fetchone()
    district_name = district_name['district_name'] if district_name else None
    cur.execute("SELECT mandal_name FROM mandals WHERE mandal_id = %s", (mandal,))
    mandal_name = cur.fetchone()
    mandal_name = mandal_name['mandal_name'] if mandal_name else None
    print(mandal_name)
    insert_query ="INSERT INTO addresses (UserID, country, state, district, mandal, village, area) VALUES (%s, %s, %s, %s, %s, %s, %s)"
    values =(userid,country_name, state_name, district_name, mandal_name, village, area)
    cur.execute(insert_query, values)
    db.commit()

    return jsonify({'message': 'Address saved successfully'}), 201

@app.route('/getaddresses/<int:UserId>', methods=['GET'])
def get_addresses(UserId):
    try:
        # Retrieve addresses based on the provided userid
        # _json = request.json
        # _userid = _json.get('UserID')
        get_query="SELECT * FROM addresses WHERE UserID = %s"
        cur.execute(get_query, (UserId,))
        addresses = cur.fetchall()

        # If addresses are found, return them as JSON
        if addresses:
            return jsonify(addresses), 200
        else:
            return jsonify({'message': 'No addresses found for the specified UserID'}), 404

    except Exception as e:
        print("Error:", e)
        return jsonify({'message': 'Internal Server Error'}), 500


@app.route('/friends', methods=['GET'])
def get_friends():
    try:
        query = "SELECT * FROM Friends ORDER BY likeCount DESC LIMIT 5;"
        cur.execute(query)
        rows = cur.fetchall()

        # Add this line to print the structure of the rows
        print("Rows structure:", rows)

        friends = [{'name': row['name'], 'likeCount': row['likeCount']} for row in rows]
        return jsonify({'friends': friends}), 200
    except Exception as e:
        print(e)
        return jsonify({'error': 'Internal Server Error'}), 500

# API route to like a friend
@app.route('/like', methods=['POST'])
def like_friend():
    try:
        data = request.get_json()
        friend_name = data.get('friendName')

        query = "UPDATE Friends SET likeCount = likeCount + 1 WHERE name = %s;"
        cur.execute(query, (friend_name,))
        db.commit()

        query = "SELECT likeCount FROM Friends WHERE name = %s;"
        cur.execute(query, (friend_name,))
        like_count = cur.fetchone()[0]

        return jsonify({'likeCount': like_count}), 200
    except Exception as e:
        print(e)
        return jsonify({'error': 'Internal Server Error'}), 500
