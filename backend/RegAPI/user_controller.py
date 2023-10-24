from app import app
import mysql.connector
from flask import jsonify, abort
from flask import request
import jwt
from datetime import datetime, timedelta
from functools import wraps
import secrets
import string , pdb

secret_key = ''.join(secrets.choice(string.ascii_letters + string.digits) for _ in range(32))
app.config['SECRET_KEY'] = secret_key


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
    try:
        _json = request.json
        _firstname = _json['Firstname']
        _lastname = _json['Lastname']
        _email = _json['Email']
        _password = _json['Password']
        if _firstname and _lastname and _email and _password and request.method == 'POST':
            insert_query = "INSERT INTO registration (Firstname,Lastname,Email,Password) VALUES (%s, %s, %s, %s)"
            values = (_firstname, _lastname, _email, _password)
            cur.execute(insert_query, values)
            db.commit()
            response = {'message': 'Registration successful!', 'firstname': _firstname,
                        'lastname': _lastname, 'email': _email, 'password': _password}
            return jsonify(response), 201
        else:
            return "error while sending data"
    except Exception as e:
        print(e)
    
@app.route('/login' , methods =["POST"])
def loginUser():
    pdb.set_trace()
    try:
        _json = request.json
        _email = _json.get('Email')
        _password = _json.get('Password')
        _token = _json.get('Token')
        print(_email)
        if _email and _password and request.method == 'POST':
            # Query the database to check if the user with provided email and password exists
            select_query = "SELECT * FROM registration WHERE Email = %s AND Password = %s"
            values = (_email, _password)
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
def update_user():
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
  