# IDEA: MATH PROBLEM SHEET GENERATOR

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
make install dependencies
```

## Problem sheet API

This is a flask absed API that can be run as follows:

```sh
make start_api
```

We use a `GET` request to download the files.