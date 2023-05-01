[![Test Build](https://github.com/BenjaminWills/problem_sheet_generator/actions/workflows/test_build.yml/badge.svg)](https://github.com/BenjaminWills/problem_sheet_generator/actions/workflows/test_build.yml) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://www.linkedin.com/in/benjamin-wills-b22887220/) <a href="mailto:benjaminwills047@gmail.com?subject=Problem%20Sheet%20Repository&body=Dear%Ben%2C%0A%0AInsert%20your%20email%20template%20here.">
  <img src="https://img.shields.io/badge/email-me-blue?logo=mail.ru" alt="Email Me">
</a>

# MATHEMATICS PROBLEM SHEET GENERATOR

In this project I use the open AI API to generate mathematical problem sheets. The idea could be generalised to any kind of problem sheet or essay question for example. I thought this could be useful for student revision.

## Setup

### Conda route

To set up the conda environment simply run the command:

```sh
make create_environment
source activate problem_sheet_generation
```

### Pip route

To set up the python libraries simply run the command:

```sh
make install_dependencies
```

### General

### Problem sheet API env

Ensure that you have an [OpenAI API](https://platform.openai.com/account/api-keys) key in an env file so that the API can run.

```txt
# ./API/.env
open_api_key=""
problem_sheet_api_key=0
```

### Root env file

This file is used in the makefile and the docker compose file. This is only really necessary if we want to push to AWS's [ECR](https://docs.aws.amazon.com/ecr/index.html).

```txt
# ./.env
ECR_PATH=""
AWS_ACCOUNT_ID=""
AWS_REGION=""
```

## Build project locally

### Non docker users

In one terminal run:

```sh
make start_api
```

In another run:

```sh
make start_frontend
```

Then create the postgres database and initialise it with the file in the database directory.

### Docker users

Run the following command from the root directory to build the project:

```sh
make local_build
```

Then head to http://localhost:3000/ to see the website. The problem sheet api is hosted on http://localhost:5001/, the transaction database api is hosted on http://localhost:5002/. To access the postgres database in the docker daemon we write:

```sh
psql postgres://root:admin@localhost:5432/transactions
```

Then we can query the database as we wish. Alternatively we could use the SQLWrapper to query the database.

### Push to AWS ECR

Run the following command:

```sh
make push_to_cloud
```

This command will authenticate docker with the AWS cli. Make sure the 

```sh
aws configure
```

Command is run, so that we can load the ecr info. 

NOTE: work on automating this so that it can be done via env file.
