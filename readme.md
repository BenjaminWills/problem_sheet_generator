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

Ensure that you have an [OpenAI API](https://platform.openai.com/account/api-keys) key in an env file so that the API can run.

```txt
# ./API/.env
open_api_key = "<API KEY>"
problem_sheet_api_key = 123456789
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