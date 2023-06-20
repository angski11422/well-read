from sqlalchemy_serializer import SerializerMixin;
# from sqlalchemy.orm import validates;
# from sqlalchemy.ext.hybrid import hybrid_property;

from config import *

# Models go here!

class BookClub(db.Model, SerializerMixin):
    __tablename__ = 'book_clubs'

    serialize_rules = ('-updated_at', '-created_at', '-books.book_club')

    id = db.Column(db.Integer, primary_key=True)
    club_name = db.Column(db.String, nullable=False)
    location = db.Column(db.String, nullable=False)
    genre = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    meeting_day = db.Column(db.String, nullable=False)
    next_meeting_date = db.Column(db.DateTime)
    image = db.Column(db.String)
    book_id = db.Column(db.Integer, db.ForeignKey('books.book_id'))
  
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    books = db.relationship('Book', backref='book_club')

class Book(db.Model, SerializerMixin):
    __tablename__ = 'books'

    serialize_rules = ('-book_club.books',)

    book_id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.String)
    title = db.Column(db.String)
    cover_image = db.Column(db.String)
    subject = db.Column(db.String)

# class User(db.Model, SerializerMixin):
#     __tablename__ = 'users'

#     id = db.Column(db.Integer, primary_key=True),
#     first_name = db.Column(db.String, nullable=False),
#     last_name = db.Column(db.String, nullable=False),
#     email = db.Column(db.String, nullable=False),
#     username = db.Column(db.String, nullable=False),
#     _password_hash = db.Column(db.String, nullable=False),
#     avatar = db.Column(db.String),
#     birthday = db.Column(db.Date),
#     created_at = db.Column(db.DateTime, server_default=db.func.now()),
#     updated_at = db.Column(db.DateTime, onupdate=db.func.now()), 


#     @validates('email')
#     def validate_email(self, key, address):
#         if '@' not in address:
#             raise ValueError("Must enter a valid email")
#         return address
    
#     @validates('username')
#     def validate_username(self, key, username):
#         if 4 > len(username) > 18:
#             raise ValueError("Username must be between 4 and 18 characters")
#         return username
    
#     @hybrid_property
#     def password_hash(self):
#         raise Exception('Password hashes may not be viewed')

#     @password_hash.setter
#     def password_hash(self, password):
#         password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
#         self._password_hash = password_hash.decode('utf-8')

#     def authenticate(self, password):
#         return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))