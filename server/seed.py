#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!




 

    

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True),
    first_name = db.Column(db.String, nullable=False),
    last_name = db.Column(db.String, nullable=False),
    email = db.Column(db.String, nullable=False),
    username = db.Column(db.String, nullable=False),
    _password_hash = db.Column(db.String, nullable=False),
    avatar = db.Column(db.String),
    birthday = db.Column(db.Date),
    created_at = db.Column(db.DateTime, server_default=db.func.now()),
    updated_at = db.Column(db.DateTime, onupdate=db.func.now()), 


    @validates('email')
    def validate_email(self, key, address):
        if '@' not in address:
            raise ValueError("Must enter a valid email")
        return address
    
    @validates('username')
    def validate_username(self, key, username):
        if 4 > len(username) > 18:
            raise ValueError("Username must be between 4 and 18 characters")
        return username
    
    @hybrid_property
    def password_hash(self):
        raise Exception('Password hashes may not be viewed')

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))
