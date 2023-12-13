# installing and build flask python application
Install Python:
Flask is a Python web framework, so you need to have Python installed on your system. You can download Python from the official website at https://www.python.org/downloads/ or use your system's package manager. download latest version

Check Python Installation:
Open a terminal (or command prompt on Windows) and run the following command to ensure Python is installed correctly:

![image](https://github.com/praveen-riseslabs/angular-fullstack/assets/146798534/ccc08822-db86-4d8b-b3da-958c1df3e17c)


Create a Virtual Environment (Optional but Recommended):
It's a good practice to create a virtual environment to isolate your Flask project from the system-wide Python environment. This step is optional but recommended.
To create a virtual environment, open your terminal and run the following commands:

![image](https://github.com/praveen-riseslabs/angular-fullstack/assets/146798534/f65ae9f9-f435-4d59-a624-01ef421fee44)


Replace myenv with the name you want to give to your virtual environment. To activate the virtual environment, run:

![image](https://github.com/praveen-riseslabs/angular-fullstack/assets/146798534/44272e9f-54f6-425e-8534-7b7bc411ae76)


Install Flask:
With Python and (optionally) your virtual environment set up, you can install Flask using pip, Python's package manager. In your terminal, run:

![image](https://github.com/praveen-riseslabs/angular-fullstack/assets/146798534/f3a212f2-4135-40c1-8249-39b3dcc5db44)


Check Flask Installation:
To ensure Flask is installed correctly, run this command:

![image](https://github.com/praveen-riseslabs/angular-fullstack/assets/146798534/b7b407d0-234d-4d8e-a7a9-38fa544116ed)

install all modules and libraries using below command 
Command : pip install -r requirements.txt

Create a Flask Application:
You can now create a Flask application. Start by creating a Python file, for example, app.py, and write your Flask code in it.

![image](https://github.com/praveen-riseslabs/angular-fullstack/assets/146798534/8d66f4ec-7fd0-4e97-892b-4523a4aa7b7d)


Run Your Flask Application:
In your terminal, navigate to the directory where your app.py is located and run your Flask application with:
before that make sure you are on the your virtual enverinment or you can use flask run command like below shown image

![image](https://github.com/praveen-riseslabs/angular-fullstack/assets/146798534/9600245d-a85d-496e-ac7d-c66392dcab7f)


![image](https://github.com/praveen-riseslabs/angular-fullstack/assets/146798534/d33bf296-770f-48a0-abcc-588cf33e56c3)


Your Flask app will be accessible in your web browser at http://127.0.0.1:5000/ or http://localhost:5000/.

![image](https://github.com/praveen-riseslabs/angular-fullstack/assets/146798534/51942b0c-eb9a-4e87-bff3-f2f495288dc2)



To connect MySQL with XAMPP in a Flask application, you will need to follow these steps:

Install XAMPP:
First, make sure you have XAMPP installed on your system. You can download XAMPP from the official website (https://www.apachefriends.org/index.html) and follow the installation instructions for your specific operating system.

Start the XAMPP MySQL Server:
After installing XAMPP, start the Apache and MySQL services using the XAMPP Control Panel. You should see the status indicators turn green when the services are running.


![image](https://github.com/praveen-riseslabs/angular-fullstack/assets/146798534/bd22cd39-ac81-41ca-8576-a36683051c36)


Create a MySQL Database:
Use phpMyAdmin, which is included with XAMPP, to create a MySQL database. You can access phpMyAdmin by going to http://localhost/phpmyadmin/ in your web browser. Create a new database and take note of its name, as you will need it in your Flask application. OR click on admin button in beside of stop button it will directly navigate to phpmyadmin portal there you can create your database and tables

![image](https://github.com/praveen-riseslabs/angular-fullstack/assets/146798534/584bab4a-b70e-48f2-b388-d9857d476540)




Install MySQL Connector for Python:
You'll need a Python library to connect to your MySQL database. You can install the mysql-connector-python library using pip:

![image](https://github.com/praveen-riseslabs/angular-fullstack/assets/146798534/64058626-4357-44ea-8986-f507a16f808c)


Connect to MySQL in Your Flask Application:
In your Flask application code (e.g., app.py), you can establish a connection to the MySQL database using the mysql-connector-python library. Here's an example of how to set up the connection:

![image](https://github.com/praveen-riseslabs/angular-fullstack/assets/146798534/6d9b52c9-be3d-47f4-a5bc-82e78fe396e6)


after the connection you can develope rest api with appropriate libraries like you can install cors, json,request, ....etc









