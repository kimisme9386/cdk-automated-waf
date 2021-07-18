import * as cdk from '@aws-cdk/core';
import { AutomatedWaf, Waf2ScopeOption } from './index';

export class IntegTesting {
  readonly stack: cdk.Stack[];
  constructor() {
    const app = new cdk.App();

    const env = {
      region: process.env.CDK_DEFAULT_REGION,
      account: process.env.CDK_DEFAULT_ACCOUNT,
    };

    const stack = new cdk.Stack(app, 'TestStackAutomatedWaf', { env });

    new AutomatedWaf(stack, 'AutomatedWaf', {
      waf2Scope: Waf2ScopeOption.REGIONAL,
      wafNamingPrefix: 'Alb-Api',
      errorThreshold: 50,
      requestThreshold: 100,
      blockPeriod: 240,
    });

    app.synth();
    this.stack = [stack];
  }
}

new IntegTesting();
