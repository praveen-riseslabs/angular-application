from app import app
import mysql.connector
from flask import jsonify
from flask import request
import pdb


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