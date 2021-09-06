from flask import Flask, jsonify, request, redirect, url_for, render_template
from flask_assets import Bundle, Environment

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite3"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

assets = Environment(app)
css = Bundle("src/main.css", output="dist/main.css", filters="postcss")

assets.register("css", css)
css.build()


@app.route("/", methods=["POST", "GET"])
def index():
    name = "Phil2, tailwind and Alpine js are working."
    number = 10
    data = [1, 2, 3, 5, 7]
    return render_template("index.html", name=name, number=number, data=data)
    # return "<h1>hello philly boy</h1>"


@app.route("/home",)
def home():
    return "<h1>This is a home page</h1>"
