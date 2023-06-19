# from sqlalchemy_serializer import SerializerMixin;
# from sqlalchemy.orm import validates;
# from sqlalchemy.ext.hybrid import hybrid_property;

from config import *

# Models go here!

class BookClub(db.Model):
    __tablename__ = 'book_clubs'

    id = db.Column(db.Integer, primary_key=True)
    club_name = db.Column(db.String, nullable=False)
    location = db.Column(db.String, nullable=False)
    genre = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    meeting_day = db.Column(db.String, nullable=False)
    image = db.Column(db.String)
    book_id = db.Column(db.Integer, db.ForeignKey('books.book_id)'))
  
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

