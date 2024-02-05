const test = {
  'snippet-id': 'cloudwatch-insight-apigw-integration-latency2',
  title: 'Integration latency report',
  subtitle: 'Create API Gateway integration latency report for your API Gateway access log group.',
  description: 'Cloudwatch Log Insight snippet that returns API Gateway integration latency statistics in 1 minute intervals in your API Gateway access log group.',
  type: 'CloudWatch Logs Insights',
  services: ['Amazon API Gateway'],
  languages: [],
  'snippet-title': 'Copy the code into CloudWatch Logs Insights',
  snippet: '```bash\n' + 'filter status=200\r\n' + '| stats avg(integrationLatency), max(integrationLatency), \r\n' + 'min(integrationLatency) by bin(1m)\n' + '```',
};

// Create pull request with the files that have changed..

const fs = require('fs');
const path = require('path');

module.exports = async ({ github, context, core }) => {
  console.log('ISSUE', process.env.ISSUE_MODEL);
  const issueModel = JSON.parse(process.env.ISSUE_MODEL);

  console.log('FILES');
  console.log(fs.readdirSync(__dirname));

  // Ths is the main dir
  console.log(fs.readdirSync(process.env.GITHUB_WORKSPACE));

  fs.writeFileSync(path.join(GITHUB_WORKSPACE, 'test.txt'), 'Hello');


  const issueNumber = process.env.ISSUE_NUMBER;

  if (!issueNumber) {
    core.setFailed(`No issue number was passed. Aborting`);
  }

  // Create a pull request
  // const result = await github.rest.pulls.create({
  //   title: '[Example] Simple demo',
  //   owner,
  //   repo,
  //   head: '${{ github.ref_name }}',
  //   base: 'develop',
  //   body: [
  //     'This PR is auto-generated by',
  //     '[actions/github-script](https://github.com/actions/github-script).'
  //   ].join('\n')
  // });


  //   const prNumber = process.env.PR_NUMBER;

  //   if (prNumber === '') {
  //     core.setFailed(`No PR number was passed. Aborting`);
  //   }

  //   try {
  //     const {
  //       data: { head, base, user, ...rest },
  //     } = await github.rest.pulls.get({
  //       owner: context.repo.owner,
  //       repo: context.repo.repo,
  //       pull_number: prNumber,
  //     });

  //     const { data: fileData } = await github.rest.pulls.listFiles({
  //       owner: context.repo.owner,
  //       repo: context.repo.repo,
  //       pull_number: prNumber,
  //     });

  //     const allChangedFiles = fileData.map((file) => file.filename);

  //     core.setOutput('files', allChangedFiles.toString());

  //     core.setOutput('headRef', head.ref);
  //     core.setOutput('headSHA', head.sha);
  //     core.setOutput('baseRef', base.ref);
  //     core.setOutput('baseSHA', base.sha);
  //     core.setOutput('user', user.login);
  //   } catch (error) {
  //     core.setFailed(`Unable to retrieve info from PR number ${prNumber}.\n\n Error details: ${error}`);
  //     throw error;
  //   }
};
