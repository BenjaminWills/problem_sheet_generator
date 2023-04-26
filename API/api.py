import shutil

from flask import Flask, send_file, request
from flask_cors import CORS


from problem_generator.generate_problems import generate_problem_sheet
from problem_generator.utilities import zip_files, format_topic


app = Flask(__name__)
# Add cors so that fetch stops throwing errors
CORS(app)


@app.route("/")
def hello_world():
    return {"response": "Hello World"}


@app.route("/download")
def download():
    n_problems = request.args.get("n-problems", 5)
    topic = request.args.get("topic", "mathematics")

    formatted_topic = format_topic(topic)

    generate_problem_sheet(n_problems, formatted_topic)

    dir_path = "problem_sheets"

    zip_path = f"{topic}_problems"

    zip_files(f"API/{zip_path}", dir_path)

    shutil.rmtree("problem_sheets")
    return send_file(
        f"{zip_path}.zip",
        as_attachment=True,
    )


if __name__ == "__main__":
    app.run(debug=True)
