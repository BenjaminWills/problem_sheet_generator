import os
import shutil

from typing import Dict

GPT_message = Dict[str, str]


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
    """Replaces spaces with underscores in string

    Parameters
    ----------
    topic : str

    Returns
    -------
    str
        String with spaces replaced with underscores
    """
    return topic.replace(" ", "_")


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
    shutil.make_archive(target_path, "zip", source_path)
