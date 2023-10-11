from app import app
import mysql.connector
from flask import jsonify
from flask import request

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
    