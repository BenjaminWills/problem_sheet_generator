[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://www.linkedin.com/in/benjamin-wills-b22887220/) <a href="mailto:benjaminwills047@gmail.com?subject=Problem%20Sheet%20Generator&body=Hey%20Ben%2C%0D%0A%0D%0AI'm%20just%20emailing%20to%20ask...">
  <img src="https://img.shields.io/badge/email-me-blue?logo=mail.ru" alt="Email Me">
</a>

# MATHEMATICS PROBLEM SHEET GENERATOR

In this project I use the open AI API to generate mathematical problem sheets. The idea could be generalised to any kind of problem sheet or essay question for example. I thought this could be useful for student revision.

## Setup

### General

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

# Problem sheet API

These are the docs for the problem generator API.

## Problem sheet downlad

The URL looks like:

```python
URL = "http://127.0.0.1:5001/download?n-problems=5&topic=math&difficulty=hard&api-key=123456789"
```

Here we have a few URL arguments:

1. `n-problems` - This is the number of problems that you request in the problem sheet
2. `topic` - The topic that you wish the sheet to be on
3. `difficulty` - The difficulty of the sheet, this is rather arbritrary so be as detailed as you wish
4. `api-key` - This is reserved for your API key. If it is not entered then the requests will not go through

## Project cleanup

The URL looks like:

```python
URL = "http://127.0.0.1:5001/cleanup"
```

This will clean up the local machine repository by removing any zip files that may be lingering after the file is sent for download.

# Transaction database API

The transaction db will record the queries that are inputted on the website.

## Log transaction

The URL looks like:

```python 
URL = "http://127.0.0.1:5002/log-transaction?n-problems=5&topic=addition&difficulty=hard"
```

This will log the transaction to the database hoseted on a docker container.

1. `n-problems` - This is the number of problems that you request in the problem sheet
2. `topic` - The topic that you wish the sheet to be on
3. `difficulty` - The difficulty of the sheet, this is rather arbritrary so be as detailed as you wish

# Frontend

## Working with CORS and S3 buckets

When creating the S3 bucket ensure you fill in the CORS policy (will do with terraform at a later date):

Run:

```sh
open https://s3.console.aws.amazon.com/s3/buckets/<BUCKET NAME>?region=<AWS REGION>&tab=permissions
```

And navigate down to `Cross-origin resource sharing (CORS)` and paste the following:

```JSON
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "PUT",
            "POST",
            "DELETE"
        ],
        "AllowedOrigins": [
            "http://localhost:3000"
        ],
        "ExposeHeaders": []
    }
]
```