from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user


def seed_users():
    default_password = generate_password_hash('password')
    demo = User(email='demo@demo.com', hashedPassword=default_password)
    db.session.add(demo)
    db.session.commit()


def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
