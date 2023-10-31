class User:
    def __init__(self, firstname, lastname, email, password, age, phonenumber, address):
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.password = password
        self.age = age
        self.phonenumber = phonenumber
        self.address = address

    def to_dict(self):
        return {
            'Firstname': self.firstname,
            'Lastname': self.lastname,
            'Email': self.email,
            'Password': self.password,
            'Age': self.age,
            'Phonenumber': self.phonenumber,
            'Address': self.address
        }

    @staticmethod
    def from_json(json_data):
        return User(
            json_data.get('Firstname'),
            json_data.get('Lastname'),
            json_data.get('Email'),
            json_data.get('Password'),
            json_data.get('Age'),
            json_data.get('Phonenumber'),
            json_data.get('Address')
        )
