import os

from flask import Flask, send_file, url_for, jsonify, render_template, request

from problem_generator.generate_problems import generate_problem_sheet


app = Flask(__name__)


@app.route("/")
def hello():
    return render_template("index.html")


@app.route("/download")
def download():
    n_problems = request.args.get("n-problems")
    topic = request.args.get("topic")

    formatted_topic = topic.replace("-", "_")

    generate_problem_sheet(n_problems, formatted_topic)

    dir_path = "problem_sheets"
    question_path = f"{dir_path}/{formatted_topic}.md"
    answer_path = f"{dir_path}/{formatted_topic}_answers.md"

    paths = [question_path, answer_path]

    return send_file(paths, as_attachment=True)
    for path in (question_path, answer_path):
        os.remove(path)


if __name__ == "__main__":
    app.run(debug=True)
