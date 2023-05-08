[![Test Build](https://github.com/BenjaminWills/problem_sheet_generator/actions/workflows/test_build.yml/badge.svg)](https://github.com/BenjaminWills/problem_sheet_generator/actions/workflows/test_build.yml) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://www.linkedin.com/in/benjamin-wills-b22887220/) <a href="mailto:benjaminwills047@gmail.com?subject=Problem%20Sheet%20Generator&body=Hey%20Ben%2C%0D%0A%0D%0AI'm%20just%20emailing%20to%20ask...">
  <img src="https://img.shields.io/badge/email-me-blue?logo=mail.ru" alt="Email Me">
</a>

# MATHEMATICS PROBLEM SHEET GENERATOR

In this project I use the open AI API to generate mathematical problem sheets. The idea could be generalised to any kind of problem sheet or essay question for example. I thought this could be useful for student revision.

## Local setup

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

Then the docs should display themselves.