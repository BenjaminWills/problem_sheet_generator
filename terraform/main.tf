resource "aws_s3_bucket" "terraform_bucket" {
  bucket = var.storage_bucket
  tags = {
    Description = "Bucket created by terraform"
  }
}