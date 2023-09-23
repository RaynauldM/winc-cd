import os
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
@app.route("/home")
def home_page(name="Raynauld"):
    templates_folder = os.path.join(app.root_path, "templates")
    html_files = [
        f
        for f in os.listdir(templates_folder)
        if f.endswith(".html") and f != "base.html" and f != "index.html"
    ]
    html_files = [os.path.splitext(f)[0] for f in html_files]
    return render_template("index.html", html_files=html_files)


@app.route("/guessNumber")
def guess_number_page():
    return render_template("guess_number_page.html")


@app.route("/rps")
def rps_page():
    return render_template("rps_page.html")


if __name__ == "__main__":
    app.run(debug=True)
