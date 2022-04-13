echo "prebuild steps"
echo "authenticate with AWS ECR"
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 556319409837.dkr.ecr.us-east-1.amazonaws.com

echo "Build Steps"
echo "building image."
docker build -t retailiation .
echo "Post build"
docker tag retailiation:latest 556319409837.dkr.ecr.us-east-1.amazonaws.com/retailiation:latest
echo "Pushing Image to ECR"
docker push 556319409837.dkr.ecr.us-east-1.amazonaws.com/retailiation:latest