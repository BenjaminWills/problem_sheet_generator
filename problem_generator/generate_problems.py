import os

from dotenv import load_dotenv

from gpt_helper import GPT_helper
from utilities import make_gpt_message, format_topic, mkdir_if_not_exists

load_dotenv()

model = "gpt-3.5-turbo"
api_key = os.getenv("open_api_key")


def generate_problem_sheet(num_problems: int, topic: str) -> None:
    initial_message = make_gpt_message(
        role="system",
        content="""
        You are a bot that generates Latex scripts about mathematical topics that are specified.
        Use Latex for any and all math notation. Where possible you will relate the problems to real life scenarios.
        """,
    )
    try:
        helper = GPT_helper(
            model=model, api_key=api_key, initial_message=initial_message
        )
        problem_sheet_prompt = f"""
        Generate a problem sheet with {num_problems} questions about {topic}"""
        question_response = helper.chat_to_gpt(problem_sheet_prompt)
        sheet_contents = helper.messages[-1].get("content", "")

        dir_name = "problem_sheets"
        mkdir_if_not_exists(dir_name)
        file_name = format_topic(topic)

        answer_prompt = f"""
        Generate the answers to these questions.
        """
        answer_response = helper.chat_to_gpt(answer_prompt)
        answers = helper.messages[-1].get("content", "")

        with open(f"{dir_name}/{file_name}.md", "w") as topic_sheet:
            topic_sheet.write(sheet_contents)
        with open(f"{dir_name}/{file_name}_answers.md", "w") as answer_sheet:
            answer_sheet.write(answers)
    except Exception as e:
        print(e)


if __name__ == "__main__":
    generate_problem_sheet(3, "linear algebra span and linear indepdendence")
