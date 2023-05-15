update_requirements:
	# Save conda recipie and requirements for non conda uses
	mkdir -p libraries
	pip freeze > libraries/requirements.txt
	conda env export > libraries/conda_environment.yml

create_environment:
	# Creates conda env from conda_environment template
	conda env create -f libraries/conda_environment.yml

install_dependencies:
	# Install pip dependencies if not using conda env
	python -m pip install -r libraries/requirements.txt

tests:
	# Run test files
	python test/test.py

lint:
	# Lint python files and imports
	isort .
	black .
	# Lint all javascript files and fix most issues
	./frontend/problem-generation/node_modules/.bin/eslint . --fix

cleanup:
	# Removes all zip files from the present directory
	find . -name "*.zip" -type f -delete

authenticate_docker:
	# Authenticates docker with the aws ecr
	docker --version
	sh authenticate_docker.sh

authenticate_aws:
	# Authenticates machine with AWS CLI
	aws --version
	sh authenticate_aws.sh

create_envs:
	# Prompts creation of necessary env files
	python initialise/initialise.py

create_bucket:
	# Creates bucket for the backend
	sh run_terraform.sh

init:
	# Initialises the project so all parts work
	$(MAKE) create_envs
	$(MAKE) authenticate_aws
	$(MAKE) authenticate_docker

display_docs:
	# Display docs
	docsify serve ./docs --open

start_api:
	# Starts the api
	python API/api.py

start_frontend:
	# Starts the frontend
	npm --prefix frontend/problem-generation start

local_build:
	# Builds the docker containers that host the API and the frontend
	docker compose -f docker-compose.yml up -d --build
	open http://localhost:3000/

push_to_cloud:
	# Builds in the cloud, authenticates, then pushes
	sh authenticate_docker.sh
	docker compose -f docker-compose.yml build
	docker compose -f docker-compose.yml push

local_destroy:
	# Halts services
	docker compose down