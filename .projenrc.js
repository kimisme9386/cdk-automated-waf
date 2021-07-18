const {
  AwsCdkConstructLibrary,
  DependenciesUpgradeMechanism,
} = require('projen');

const AUTOMATION_TOKEN = 'PROJEN_GITHUB_TOKEN';

const project = new AwsCdkConstructLibrary({
  author: 'kimisme9386',
  authorAddress: 'kimisme9386@gmail.com',
  cdkVersion: '1.111.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-automated-waf',
  repositoryUrl: 'git@github.com:kimisme9386/cdk-automated-waf.git',
  description: 'Cloudfront and ALB with Automated WAF',
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-s3',
    '@aws-cdk/aws-kinesisfirehose',
    '@aws-cdk/aws-glue',
    '@aws-cdk/aws-athena',
    '@aws-cdk/aws-wafv2',
    '@aws-cdk/aws-cloudwatch',
    '@aws-cdk/aws-events',
    '@aws-cdk/aws-events-targets',
    '@aws-cdk/aws-s3-notifications',
    '@aws-cdk/custom-resources',
    '@aws-cdk/aws-apigateway',
  ],
  devDeps: ['projen-automate-it'],
  publishToPypi: {
    distName: 'cdk-automated-waf',
    module: 'cdk-automated-waf',
  },
  catalog: {
    announce: true,
  },
  stability: 'experimental',
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['kimisme9386-bot'],
  },
  depsUpgrade: DependenciesUpgradeMechanism.githubWorkflow({
    workflowOptions: {
      labels: ['auto-approve'],
      secret: AUTOMATION_TOKEN,
    },
  }),
});

project.eslint.addRules({
  'comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    },
  ],
});

const common_exclude = [
  'cdk.out',
  'cdk.context.json',
  'images',
  'yarn-error.log',
  'dependabot.yml',
  'lambda/codepipeline-event/dist',
];

project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

const common_include = ['/lambda/codepipeline-event/tsconfig.json'];

project.npmignore.include(...common_include);
project.gitignore.include(...common_include);

project.synth();
