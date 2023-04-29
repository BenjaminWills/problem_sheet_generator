from flask import Flask, request, send_file
from flask_cors import CORS
from postgres_connector import postgres_wrapper

app = Flask(__name__)
# Add cors so that fetch stops throwing errors
CORS(app)

connection_credentials = {
    "username": "root",
    "password": "admin",
    "host": "localhost",
    "port": 5432,
    "database": "transactions",
}

wrapper = postgres_wrapper(**connection_credentials)


@app.route("/")
def hello_world():
    return {"response": "Hello World"}


@app.route("/log-transaction")
def log_transaction() -> tuple:
    """Logs the transaction into postgres

    Returns
    -------
    Tuple[int]
        Response code
    """
    try:
        n_problems: int = request.args.get("n-problems", 5)
        topic: str = request.args.get("topic", "mathematics")
        difficulty: str = request.args.get("difficulty", "intermediate")
        query = f"""
        INSERT INTO transactions (topic, num_questions, difficulty) 
        VALUES ('{topic}', {n_problems}, '{difficulty}');
        """
        response = wrapper.query(query)
        return "Success", 200
    except Exception as e:
        print(e)
        return 400


if __name__ == "__main__":
    app.run(debug=True, port=5002, host="0.0.0.0")
