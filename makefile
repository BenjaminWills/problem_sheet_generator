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

run:
	# Run main file
	python generate_sheets.py

build:
	python api.py