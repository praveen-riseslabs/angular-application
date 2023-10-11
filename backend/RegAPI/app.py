from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route("/")
def welcome():
    return "hello world"

import user_controller
if __name__ == '__main':
    app.run(debug=True)