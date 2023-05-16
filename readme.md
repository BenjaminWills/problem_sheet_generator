[![Test Build](https://github.com/BenjaminWills/problem_sheet_generator/actions/workflows/test_build.yml/badge.svg)](https://github.com/BenjaminWills/problem_sheet_generator/actions/workflows/test_build.yml) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://www.linkedin.com/in/benjamin-wills-b22887220/) <a href="mailto:benjaminwills047@gmail.com?subject=Problem%20Sheet%20Generator&body=Hey%20Ben%2C%0D%0A%0D%0AI'm%20just%20emailing%20to%20ask...">
  <img src="https://img.shields.io/badge/email-me-blue?logo=mail.ru" alt="Email Me">
</a> ![GitHub issues](https://img.shields.io/github/issues/BenjaminWills/problem_sheet_generator) ![GitHub all releases](https://img.shields.io/github/downloads/BenjaminWills/problem_sheet_generator/total) ![GitHub commit activity](https://img.shields.io/github/commit-activity/w/BenjaminWills/problem_sheet_generator)

# MATHEMATICS PROBLEM SHEET GENERATOR

This is a project that uses the [`openai`](https://platform.openai.com/docs/guides/chat/introduction) API to generate mathematical problem sheets. The website has a `react` frontend and a `python` backend.

The end goal of the website is for studentes/people who are interested to be able to generate their own problem sheets.

I also intend to add the following features:

1. A blog for cool ideas
2. Host on github pages / aws 
3. Notes summariser
4. Flash card generator

## Local setup

The first thing to do is run:

```sh
make init
```

This will run a python script that will prompt the creation of .env files where necessary, as well as the AWS ECR login.

### Using docker

To setup this project locally run:

```sh
make local_build
```

Then to access the docs that have instructions on how to use this application run:

```sh
open http://localhost:3001/
```

### Not using docker

To set up the conda environment simply run the command:

```sh
make create_environment
source activate problem_sheet_generation
```

In seperate terminals run each line:

```sh
make start_api # Starts problem sheet API
make start_frontend # Starts frontend website (needs api to work problem sheet generation)
make display_docs # Displays docs rendered using docsify 
```

Then the docs should display themselves using [docsify](https://github.com/docsifyjs/docsify-cli)