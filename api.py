import shutil

from flask import Flask, send_file, request, Response
from io import BytesIO
from werkzeug.wsgi import wrap_file
from zipfile import ZipFile


from problem_generator.generate_problems import generate_problem_sheet
from problem_generator.utilities import zip_files


app = Flask(__name__)


@app.route("/")
def hello_world():
    b = BytesIO(b"Hello world!")
    w = wrap_file(file=b, environ=locals())
    return Response(w, mimetype="text/plain", direct_passthrough=True)


@app.route("/download")
def download():
    n_problems = request.args.get("n-problems", 5)
    topic = request.args.get("topic", "mathematics")

    formatted_topic = topic.replace("-", "_")

    generate_problem_sheet(n_problems, formatted_topic)

    dir_path = "problem_sheets"
    problem_path = f"{dir_path}/{formatted_topic}.md"
    answer_path = f"{dir_path}/{formatted_topic}_answers.md"

    # zip_path = f"{topic}_problems"

    # zip_files(zip_path, dir_path)

    archive = BytesIO()

    with ZipFile(archive, "w") as zip_archive:
        with zip_archive.open(problem_path) as problems:
            problems.write("")
        with zip_archive.open(answer_path) as answers:
            answers.write("")

    wrap_zip = wrap_file(file=archive, environ=locals())

    shutil.rmtree("problem_sheets")
    return send_file(
        BytesIO(archive.read()),
        as_attachment=True,
    )


if __name__ == "__main__":
    app.run(debug=True)
