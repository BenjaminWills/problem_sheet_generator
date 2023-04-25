import os
import shutil


from flask import Flask, send_file, url_for, jsonify, render_template, request

from problem_generator.generate_problems import generate_problem_sheet
from problem_generator.utilities import zip_files


app = Flask(__name__)


@app.route("/")
def hello():
    return render_template("index.html")


@app.route("/download")
def download():
    n_problems = request.args.get("n-problems", 5)
    topic = request.args.get("topic", "mathematics")

    formatted_topic = topic.replace("-", "_")

    generate_problem_sheet(n_problems, formatted_topic)

    dir_path = "problem_sheets"

    zip_path = f"{topic}_problems"

    zip_files(zip_path, dir_path)

    shutil.rmtree("problem_sheets")
    return send_file(f"{zip_path}.zip", as_attachment=True)


if __name__ == "__main__":
    app.run(debug=True)
