import os
import shutil
from typing import Dict
from dotenv import load_dotenv

load_dotenv

GPT_message = Dict[str, str]
API_KEY = int

TRUE_API_KEY = int(os.getenv("problem_sheet_api_key", "key"))


def make_gpt_message(role: str, content: str) -> GPT_message:
    """Creates a GPT message dictionary to be used in the openai API.

    Parameters
    ----------
    role : str
        Either "system", "assistant" or "user".
        - System messages have the most weight and are instructions for GPT
        - Assistant messages are messages from GPT to the user
        - User messages are prompts from the user

    content : str
        Content of the message

    Returns
    -------
    GPT_message
        A dictionary containing the role and content, this is how the
        API intakes messages
    """
    return {"role": role, "content": content}


def format_topic(topic: str) -> str:
    """Replaces spaces and hyphens with underscores in string

    Parameters
    ----------
    topic : str

    Returns
    -------
    str
        String with spaces and hyphens replaced with underscores
    """
    return topic.replace(" ", "_").replace("-", "_")


def mkdir_if_not_exists(dir_path: str) -> None:
    """Creates a directory if that directory does not already exist

    Parameters
    ----------
    dir_path : str
        Directory path
    """
    if not os.path.exists(dir_path):
        os.mkdir(dir_path)


def zip_files(target_path: str, source_path: str) -> None:
    """Will create a zip file from a directory

    Parameters
    ----------
    target_path : str
        Target output path
    source_path : str
        Source directory
    """
    try:
        shutil.make_archive(target_path, "zip", source_path)
    except Exception as e:
        print(e)


def validate_api_key(inputted_key: int, actual_key: API_KEY = TRUE_API_KEY) -> bool:
    """A function for validating api keys

    Parameters
    ----------
    inputted_key : int
    actual_key : API_KEY

    Returns
    -------
    bool
        True if a match, false otherwise
    """
    return inputted_key == actual_key
