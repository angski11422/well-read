#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, BookClub, Book

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        genre = ["Romance", "Young Adult", "Spicy", "Horror", "Nonfiction", "Thriller", "Fantasy"]

        # Seed code goes here!

        print("Deleting data...")
        BookClub.query.delete()
        Book.query.delete()

        print("Creating BookClubs...")

        book_clubs = []
        for i in range(5):
            bc = BookClub (
                club_name=fake.word(),
                location='virtual',
                genre=rc(genre),
                description=fake.text(),
                meeting_day=fake.day_of_week(),
                next_meeting_date=fake.date_this_month(),
                image=fake.image_url(),
                book_id=randint(1, 5)
            )
            book_clubs.append(bc)

        db.session.add_all(book_clubs)

        print("Creating Books...")

        books=[]
        for i in range(5):
            b = Book (
                author=fake.name(),
                title=fake.word(),
                cover_image=fake.image_url(),
                subject=rc(genre)
            )
            books.append(b)

        db.session.add_all(books)

        db.session.commit()

        print("Seeding done!")
