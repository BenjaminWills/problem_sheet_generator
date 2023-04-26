import os

from dotenv import load_dotenv
from problem_generator.gpt_helper import Completion, GPT_helper
from problem_generator.utilities import (
    GPT_message,
    format_topic,
    make_gpt_message,
    mkdir_if_not_exists,
)

load_dotenv()

model = "gpt-3.5-turbo"
api_key = os.getenv("open_api_key")


def generate_problem_sheet(
    num_problems: int, topic: str, difficulty_level: str = "hard"
) -> None:
    """Generates a problem sheet with n problems about one topic

    Args:
        num_problems (int): Number of problems in the problem sheet
        topic (str): Name of the topic, e.g addition
        difficulty_level (str): How hard the problems are

    Returns:
        None, saves files to a problem sheet directory.
    """
    initial_message: GPT_message = make_gpt_message(
        role="system",
        content="""
        You are a bot that generates Latex scripts about mathematical topics that are specified.
        Use Latex for any and all math notation. Where possible you will relate the problems to real life scenarios.

        Here is an example of 5 problems on complex analysis:
        1. Find the Laurent series expansion of $f(z) = \frac{1}{z(z-1)}$ centered at $z=0$ and determine its region of convergence.
        2. Find the residue of $f(z) = \frac{\sin(z)}{z^2 - z - 6}$ at $z=3$ and $z=-2$.
        3. Show that $f(z) = e^z$ is an entire function.
        4. Determine the singularities and their types of $f(z) = \frac{\sin z}{z^2+1}$.
        5. Compute $\oint_C \frac{e^z}{z(z-1)} \, dz$, where $C$ is the positively oriented circle with center at $z=1$ and radius 2.

        And here are the example answers:
        
        1. The partial fraction decomposition of $f(z)$ is $\frac{1}{z(z-1)} = \frac{1}{z-1} - \frac{1}{z}$. Therefore, the Laurent series expansion of $f(z)$ centered at $z=0$ is given by $f(z) = -\frac{1}{z} + \frac{1}{z-1} = \sum_{n=-\infty}^{-1}\frac{(-1)^{n+1}}{z^{n+1}} + \sum_{n=0}^{\infty}\frac{1}{(z-1)^{n+1}}$. The region of convergence is the annulus $0 \lt \lvert z \rvert \lt 1$ and $\lvert z-1 \rvert \gt 1$.
        2. We have $f(z) = \frac{\sin(z)}{(z-3)(z+2)}$, so the residue at $z=3$ is $\operatorname{Res}_{z=3} f(z) = \frac{\sin(3)}{3-(-2)} = \frac{\sin(3)}{5}$ and the residue at $z=-2$ is $\operatorname{Res}_{z=-2} f(z) = \frac{\sin(-2)}{(-2)-3} = -\frac{\sin(2)}{5}$.
        3. $\frac{d}{dz}e^z = e^z$ so the derivative of $f(z)=e^z$ exists at every point in the complex plane. By extension, so do all of the higher order derivatives, and $f(z)$ is infinitely differentiable. Therefore, $f(z)$ is entire.
        4. The denominator has roots at $\pm i$, so $f(z)$ has simple poles at those points. To determine the type, we need to evaluate $\lim_{z \to \pm i} (z \pm i)f(z)$. We have $(z+i)f(z) = \frac{\sin(z)(z+i)}{(z+i)(z-i)} = \frac{\sin(z)}{z-i}$, so $\lim_{z \to i} (z+i)f(z) = \sin(i)$. Similarly, $(z-i)f(z) = \frac{\sin(z)(z-i)}{(z-i)(z+i)} = \frac{\sin(z)}{z+i}$ and $\lim_{z \to -i} (z-i)f(z) = \sin(-i)$. Therefore, $f(z)$ has simple poles at $\pm i$ with residues $\sin(i)$ and $\sin(-i)$, respectively.
        5. We can apply the residue theorem using the two poles of $f(z)$ at $z=0$ and $z=1$. The residues are $\operatorname{Res}_{z=0} f(z) = 1$ and $\operatorname{Res}_{z=1} f(z) = e$. Therefore, by the residue theorem, $\oint_C \frac{e^z}{z(z-1)} dz = 2\pi i (\operatorname{Res}_{z=0} f(z) + \operatorname{Res}_{z=1} f(z)) = 2\pi i(1+e)$.
        """,
    )
    try:
        helper: GPT_helper = GPT_helper(
            model=model, api_key=api_key, initial_message=initial_message
        )
        problem_sheet_prompt = f"""
        Generate a problem sheet with {num_problems} questions about {topic}.
        These problems should be of difficulty: {difficulty_level}"""
        question_response: Completion = helper.chat_to_gpt(problem_sheet_prompt)
        sheet_contents: str = helper.messages[-1].get("content", "")

        dir_name = "problem_sheets"
        mkdir_if_not_exists(dir_name)
        file_name: str = format_topic(topic)

        answer_prompt = f"""
        Generate the answers to these questions.
        """
        answer_response: Completion = helper.chat_to_gpt(answer_prompt)
        answers: str = helper.messages[-1].get("content", "")

        with open(f"{dir_name}/{file_name}.md", "w") as topic_sheet:
            topic_sheet.write(sheet_contents)
        with open(f"{dir_name}/{file_name}_answers.md", "w") as answer_sheet:
            answer_sheet.write(answers)
    except Exception as e:
        print(e)
