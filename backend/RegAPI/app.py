from flask import Flask
from flask_cors import CORS
from flask_mail import Mail, Message

app = Flask(__name__)
mail = Mail(app)
CORS(app)
app.config['SECRET_KEY'] = 'your-secret-key'

app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'laxminarayana.sirimalla@riseslabs.com'
app.config['MAIL_PASSWORD'] = 'daig wwwg uczp crue'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)
import user_controller
import forgotpassword
if __name__ == '__main':
    app.run(debug=True)