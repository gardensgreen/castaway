import os
from flask import Flask, render_template, request, session
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf

from app.models import db, User
from app.config import Config

app = Flask(__name__, static_url_path='')

app.config.from_object(Config)
db.init_app(app)

# Application Security
CORS(app)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get('FLASK_ENV') else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') else None,
                        httponly=True)
    return response


@app.route("/", defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file("favicon.ico")
    return app.send_static_file('index.html')
