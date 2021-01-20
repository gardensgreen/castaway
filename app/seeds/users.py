from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user


def seed_users():
    demo = User(email='demo@aa.com',
                hashedPassword=generate_password_hash("password"), firstName="Demo", lastName="User", bio="I am the demo user and this is my bio :)")
    db.session.add(demo)
    db.session.commit()


def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
