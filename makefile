update_requirements:
	# Save conda recipie and requirements for non conda uses
	mkdir -p libraries
	pip freeze > libraries/requirements.txt
	pip freeze > API/requirements.txt
	pip freeze > database_API/requirements.txt
	conda env export > libraries/conda_environment.yml

create_environment:
	# Creates conda env from conda_environment template
	conda env create -f libraries/conda_environment.yml

install_dependencies:
	# Install pip dependencies if not using conda env
	python -m pip install -r libraries/requirements.txt

tests:
	# Run main file
	python test/test.py

start_api:
	# Starts the api
	python API/api.py

start_frontend:
	# Starts the frontend
	npm --prefix frontend/problem-generation start

lint:
	# Lint python files and imports
	black .
	isort .
	# Lint all javascript files and fix most issues
	./frontend/problem-generation/node_modules/.bin/eslint . --fix

cleanup:
	# Removes all zip files from the present directory
	find . -name "*.zip" -type f -delete

local_build:
	# Builds the docker containers that host the API and the frontend
	docker compose -f docker-compose.yml up -d --build

push_to_cloud:
	# Builds in the cloud, authenticates, then pushes
	sh authenticate_docker.sh
	docker compose -f docker-compose.yml build
	docker compose -f docker-compose.yml push

local_destroy:
	# Halts services
	docker compose down
