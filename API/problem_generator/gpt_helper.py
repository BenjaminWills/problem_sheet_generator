from typing import Dict, List

import openai
from openai import Completion
from problem_generator.utilities import GPT_message, make_gpt_message

Errors = List[str]
GPT_assistant_message = Dict[str, str]
GPT_system_message = Dict[str, str]
GPT_user_message = Dict[str, str]


class GPT_helper:
    def __init__(
        self, model: str, api_key: str, initial_message: GPT_system_message
    ) -> None:
        self.model = model
        self.key = api_key
        self.messages = [initial_message]

    def __repr__(self) -> str:
        return repr(f"Currently there are {len(self.messages)} messages in the queue.")

    def update_messages(self, message: GPT_user_message | GPT_system_message) -> None:
        self.messages.append(message)

    def chat_to_gpt(self, message: str) -> Completion:
        """Function to chat to GPT and retain the messages from the conversation, to make future queries easier.

        Args:
            message (str): A question to ask gpt

        Returns:
            Completion: Completion object that contains the message response
        """
        # Update message trace with user message
        user_message: GPT_message = make_gpt_message(role="user", content=message)
        self.update_messages(user_message)

        response: Completion = openai.ChatCompletion.create(
            model=self.model, messages=self.messages, api_key=self.key
        )

        # Update message trace with assistant message
        response_body: str = response.choices[0].message.content
        response_message: GPT_message = make_gpt_message(
            role="assistant", content=response_body
        )
        self.update_messages(response_message)
        return response
