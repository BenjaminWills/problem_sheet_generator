import shutil

from flask import Flask, request, send_file
from flask_cors import CORS
from problem_generator.generate_problems import generate_problem_sheet
from problem_generator.utilities import (
    TRUE_API_KEY,
    format_topic,
    validate_api_key,
    zip_files,
)

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
    difficulty = request.args.get("difficulty", "intermediate")
    api_key = int(request.args.get("api-key", 0))
    if validate_api_key(inputted_key=api_key):
        formatted_topic = format_topic(topic)
        formatted_difficulty = format_topic(difficulty)

        generate_problem_sheet(n_problems, formatted_topic, formatted_difficulty)

        dir_path = "problem_sheets"

        zip_path = f"{topic}_problems"

        zip_files(f"API/{zip_path}", dir_path)

        shutil.rmtree("problem_sheets")
        return (
            send_file(
                f"{zip_path}.zip",
                as_attachment=True,
            ),
            200,
        )
    else:
        return "Access denied", 400


if __name__ == "__main__":
    app.run(debug=True, port=5000, host="0.0.0.0")
