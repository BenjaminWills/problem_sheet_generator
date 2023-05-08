import os
import shutil
from typing import List, Tuple

from flask import Flask, request, send_file
from flask_cors import CORS
from problem_generator.generate_problems import generate_problem_sheet
from problem_generator.utilities import format_topic, validate_api_key, zip_files

app = Flask(__name__)
# Add cors so that fetch stops throwing errors
CORS(app)


@app.route("/")
def hello_world():
    return {"response": "Hello World"}


@app.route("/download")
def download_problemsheet() -> Tuple[int]:
    """Downloads the problem sheet specified in the url:

    args:
        n_problems: Number of problems to generate
        topic: The topic that the problems revolve around
        difficulty: The relative difficulty of the problems
        api-key: The API key

    Returns
    -------
    Tuple
        A response code
    """
    try:
        n_problems: int = request.args.get("n-problems", 5)
        topic: str = request.args.get("topic", "mathematics")
        difficulty: str = request.args.get("difficulty", "intermediate")

        api_key = int(request.args.get("api-key", 0))

        if validate_api_key(inputted_key=api_key):
            formatted_topic: str = format_topic(topic)
            formatted_difficulty: str = format_topic(difficulty)

            generate_problem_sheet(n_problems, formatted_topic, formatted_difficulty)

            dir_path = "problem_sheets"

            zip_path = f"{topic}_problems"

            zip_files(f"{zip_path}", dir_path)

            shutil.rmtree("problem_sheets")
            return (
                send_file(
                    f"{zip_path}.zip",
                    as_attachment=True,
                ),
                200,
            )
        else:
            return ("Access denied", 400)
    except Exception as e:
        return ("Access denied", 400)


@app.route("/cleanup")
def cleanup() -> Tuple[int]:
    """Removes all files with ".zip" extension.

    Returns
    -------
    Tuple[int]
        Response code
    """
    try:
        pwd: str = os.getcwd()
        files: List[str] = os.listdir(pwd)
        for file in files:
            if file.endswith(".zip"):
                zip_path: str = os.path.join(pwd, file)
                os.remove(zip_path)
        return ("Success", 200)
    except Exception as e:
        print(e)
        return ("Access denied", 400)


if __name__ == "__main__":
    app.run(debug=True, port=5001, host="0.0.0.0")
