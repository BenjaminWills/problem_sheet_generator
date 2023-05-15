MAIN_ENV_PATH = "./.env"
API_ENV_PATH = "./API/.env"
FRONTEND_ENV_PATH = "frontend/problem-generation/.env"


def init_api_env() -> None:
    """
    Initialises API .env file so dockerfile build can be successful.
    """
    print("INITIALISE PROBLEM SHEET API ENV FILE...")
    print("=" * 60)
    open_api_key = input("Enter your openai API key: ")
    print("=" * 60)
    problem_sheet_api_key = input("Enter your desired problem sheet API key: ")
    print("=" * 60)
    keys = ["open_api_key", "problem_sheet_api_key"]
    values = [open_api_key, problem_sheet_api_key]
    with open(API_ENV_PATH, "w") as env_file:
        for key, value in zip(keys, values):
            env_file.write(f"{key}={value}\n")


def init_main_env() -> None:
    """
    Initialises main .env file so that all aws functionality works.
    """
    print("INITIALISE MAIN ENV FILE...")
    print("=" * 60)
    ECR_PATH = input("Enter your ECR path: ") or "None"
    print("=" * 60)
    AWS_ACCOUNT_ID = input("Enter your AWS account ID: ") or "None"
    print("=" * 60)
    AWS_REGION = input("Enter your AWS region: ") or "None"
    print("=" * 60)
    AWS_ACCESS_KEY_ID = input("Enter your AWS access key ID: ") or "None"
    print("=" * 60)
    AWS_SECRET_ACCESS_KEY = input("Enter your AWS secret access key: ") or "None"
    print("=" * 60)
    AWS_BUCKET_NAME = input("Enter your S3 bucket name: ") or "None"
    print("=" * 60)
    AWS_BACKEND_BUCKET = input("Enter your terraform backend bucket name: ") or "None"
    print("=" * 60)
    keys = [
        "ECR_PATH",
        "AWS_ACCOUNT_ID",
        "AWS_REGION",
        "AWS_ACCESS_KEY_ID",
        "AWS_SECRET_ACCESS_KEY",
        "AWS_BUCKET_NAME",
        "AWS_BACKEND_BUCKET",
    ]
    values = [
        ECR_PATH,
        AWS_ACCOUNT_ID,
        AWS_REGION,
        AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY,
        AWS_BUCKET_NAME,
        AWS_BACKEND_BUCKET,
    ]
    with open(MAIN_ENV_PATH, "w") as env_file:
        for key, value in zip(keys, values):
            env_file.write(f"{key}={value}\n")
    with open(FRONTEND_ENV_PATH, "w") as env_file:
        for key, value in zip(keys, values):
            env_file.write(f"REACT_APP_{key}={value}\n")


def init_envs() -> None:
    """
    Initialises all important .env files.
    """
    init_api_env()
    init_main_env()


if __name__ == "__main__":
    init_envs()
