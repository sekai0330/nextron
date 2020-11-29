import fs from 'fs-extra';
import path from 'path';
import execa from 'execa';
import arg from 'arg';
import chalk from 'chalk';

const args = arg({
  '--help': Boolean,
  '--version': Boolean,
  '--template': String,
  '--example': '--template',
  '-h': '--help',
  '-v': '--version',
  '-t': '--template',
  '-e': '--template',
});

if (args['--version']) {
  const pkg = require(path.resolve(__dirname, '../package.json'));
  console.log(`nextron v${pkg.version}`);
  process.exit(0);
}

if (args['--help'] || (!args._[0])) {
  console.log(chalk`
    {bold.cyan nextron} - ⚡ Electron + NEXT.js ⚡

    {bold USAGE}

      {bold $} {cyan nextron init} --help
      {bold $} {cyan nextron init} {underline my-app}
      {bold $} {cyan nextron init} {underline my-app} [--example {underline example_folder_name}]

    {bold OPTIONS}

      --help,    -h                      shows this help message
      --version, -v                      displays the current version of nextron
      --example, -e {underline example_folder_name}  sets the example as a template
  `);
  process.exit(0);
}

const example = args['--template'] || args['--example'] || 'with-javascript-material-ui';
if (!fs.existsSync(path.resolve(__dirname, `../examples/${example}`))) {
  console.log(chalk.red(`Not found examples/${example}`));
  process.exit(1);
}

execa.sync(
  'npx',
  [
    'create-nextron-app',
    args._[0],
    '--example',
    example,
  ],
  {
    stdio: 'inherit',
  },
);
