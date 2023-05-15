# ./bin/bash

source ./.env

terraform_dir=./terraform

echo "init in dir: ${terraform_dir}"
terraform -chdir=${terraform_dir} init \
-backend=true \
-backend-config "bucket=backend-bucket-problem-sheet-website" \
-backend-config "key=terraform.tfstate" \
-backend-config "region=${AWS_REGION}"

terraform -chdir=${terraform_dir} validate

echo "Run terraform plan"
terraform -chdir=${terraform_dir} plan \
-var aws_region="${AWS_REGION}" \
-var aws_secret_access_key="${AWS_SECRET_ACCESS_KEY}" \
-var aws_access_key="${AWS_ACCESS_KEY_ID}" \
-var storage_bucket="${AWS_BUCKET_NAME}"

echo "Apply terraform"
yes yes | terraform -chdir=${terraform_dir} apply \
-var aws_region="${AWS_REGION}" \
-var aws_secret_access_key="${AWS_SECRET_ACCESS_KEY}" \
-var aws_access_key="${AWS_ACCESS_KEY_ID}" \
-var storage_bucket="${AWS_BUCKET_NAME}"
