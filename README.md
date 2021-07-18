# cdk-automated-waf

Cloudfront and ALB with Automated WAF

:warning: If waf2Scope is REGIONAL, it has to enable ALB access logging and specify S3 location after deployment. The S3 location refer to CloudFormation Output which key is similar to "{stack name}AppAccessLogBucketName{hashCode}". See it in [AWS Document](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html#enable-access-logging)
