from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'your-secret-key'

@app.route("/")
def welcome():
    return "hello world"

import user_controller
import forgotpassword
if __name__ == '__main':
    app.run(debug=True)