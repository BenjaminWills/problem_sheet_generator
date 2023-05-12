def init_api_env() -> None:
    """
    Initialises API .env file so dockerfile build can be successful.
    """
    open_api_key = input("Enter your open API key: ")
    problem_sheet_api_key = input("Enter your desired problem sheet API key: ")
    keys = ["open_api_key", "problem_sheet_api_key"]
    values = [open_api_key, problem_sheet_api_key]
    with open("./API/.env", "w") as env_file:
        for key, value in zip(keys, values):
            env_file.write(f"{key}={value}\n")


def init_main_env() -> None:
    """
    Initialises main .env file so that all aws functionality works.
    """
    ECR_PATH = input("Enter your ECR path: ")
    AWS_ACCOUNT_ID = input("Enter your AWS account ID: ")
    AWS_REGION = input("Enter your AWS region: ")
    AWS_ACCESS_KEY_ID = input("Enter your AWS access key ID: ")
    AWS_SECRET_ACCESS_KEY = input("Enter your AWS secret access key: ")
    AWS_BUCKET_NAME = input("Enter your S3 bucket name: ")
    keys = [
        "ECR_PATH",
        "AWS_ACCOUNT_ID",
        "AWS_REGION",
        "AWS_ACCESS_KEY_ID",
        "AWS_SECRET_ACCESS_KEY",
        "AWS_BUCKET_NAME",
    ]
    values = [
        ECR_PATH,
        AWS_ACCOUNT_ID,
        AWS_REGION,
        AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY,
        AWS_BUCKET_NAME,
    ]
    with open("./.env", "w") as env_file:
        for key, value in zip(keys, values):
            env_file.write(f"{key}={value}\n")


def init_envs() -> None:
    """
    Initialises all important .env files.
    """
    init_api_env()
    init_main_env()


if __name__ == "__main__":
    init_envs()
