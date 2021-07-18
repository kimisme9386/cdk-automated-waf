# cdk-automated-waf

This CDK Construct modify from [Cloudfront with Automated WAF](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/templates/aws-cloudfront-waf).

:warning: If waf2Scope is REGIONAL, it has to enable ALB access logging and specify S3 location after deployment. The S3 location refer to CloudFormation Output which key is similar to "{stack name}AppAccessLogBucketName{hashCode}". See it in [AWS Document](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html#enable-access-logging)
