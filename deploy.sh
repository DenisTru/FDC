echo "prebuild steps"
echo "authenticate with AWS ECR"
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 556319409837.dkr.ecr.us-east-1.amazonaws.com

echo "Build Steps"
echo "building image."
docker buildx build --platform=linux/amd64 -t  retailiation .
echo "Post build"
docker tag retailiation:latest 556319409837.dkr.ecr.us-east-1.amazonaws.com/retailiation:latest
echo "Pushing Image to ECR"
docker push 556319409837.dkr.ecr.us-east-1.amazonaws.com/retailiation:latest

aws ecs update-service --cluster retail-docker-aws-test-cluster --service retail-sv --force-new-deployment