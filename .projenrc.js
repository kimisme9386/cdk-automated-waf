const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'kimisme9386',
  authorAddress: 'kimisme9386@gmail.com',
  cdkVersion: '1.95.2',
  defaultReleaseBranch: 'main',
  name: 'cdk-automated-waf',
  repositoryUrl: 'git@github.com:kimisme9386/cdk-automated-waf.git',

  // cdkDependencies: undefined,        /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,    /* AWS CDK modules required for testing. */
  // deps: [],                          /* Runtime dependencies of this module. */
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // release: undefined,                /* Add release management to this project. */
});
project.synth();