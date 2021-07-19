[![NPM version](https://badge.fury.io/js/cdk-automated-waf.svg)](https://badge.fury.io/js/cdk-automated-waf)
[![PyPI version](https://badge.fury.io/py/cdk-automated-waf.svg)](https://badge.fury.io/py/cdk-automated-waf)
[![release](https://github.com/kimisme9386/cdk-automated-waf/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/kimisme9386/cdk-automated-waf/actions/workflows/release.yml)

# cdk-automated-waf

This CDK Construct modify from [Cloudfront with Automated WAF](https://github.com/awslabs/aws-cloudfront-extensions/tree/main/templates/aws-cloudfront-waf).

:warning: If waf2Scope is REGIONAL, it has to enable ALB access logging and specify S3 location after deployment. The S3 location refer to CloudFormation Output which key is similar to "{stack name}AppAccessLogBucketName{hashCode}". See it in [AWS Document](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html#enable-access-logging)
