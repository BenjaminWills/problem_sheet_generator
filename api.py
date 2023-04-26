import os
import shutil

from flask import Flask, send_file, request, Response
from io import BytesIO
from werkzeug.wsgi import wrap_file


from problem_generator.generate_problems import generate_problem_sheet
from problem_generator.utilities import zip_files


app = Flask(__name__)


@app.route("/")
def hello_world():
    b = BytesIO(b"blah blah blah")
    w = wrap_file(file=b, environ=locals())
    return Response(w, mimetype="text/plain", direct_passthrough=True)


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
    return send_file(
        f"{zip_path}.zip",
        as_attachment=True,
        attachment_filename=f"{topic}_problems.zip",
    )


if __name__ == "__main__":
    app.run(debug=True)
