import os
from flask import Flask, render_template, request, session
from app.models import db, User
from app.config import Config

app = Flask(__name__)

app.config.from_object(Config)
db.init_app(app)


@app.route("/")
def index():
    return ('Index Works')
