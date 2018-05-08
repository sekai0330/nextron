#!/usr/bin/env node

import { join, sep } from 'path'
import { promisify } from 'util'
import { exec as defaultExec } from 'child_process'
import * as fs from 'fs-extra'
import * as program from 'commander'
import * as spinner from '../spinner'

const pkg = require(join(__dirname, '../../package.json'))

program
  .version(pkg.version)
  .parse(process.argv)

const cwd = process.cwd()
const exec = promisify(defaultExec)

async function build() {
  try {
    spinner.create('Clearing previous builds')
    await fs.remove(join(cwd, 'dist'))

    spinner.create('Building main process')
    await exec(`node_modules${sep}.bin${sep}webpack --config=node_modules${sep}nextron${sep}build${sep}javascript${sep}webpack.app.config.js --env=production`, { cwd })

    spinner.create('Building renderer process')
    await exec(`node_modules${sep}.bin${sep}next build renderer`, { cwd })
    await exec(`node_modules${sep}.bin${sep}next export renderer`, { cwd })
    await fs.copy(join(cwd, 'renderer/out'), join(cwd, 'dist/renderer'))
    await fs.remove(join(cwd, 'renderer/out'))

    spinner.create('Packaging - please wait a moment')
    await exec(`node_modules${sep}.bin${sep}electron-builder`, { cwd })

    spinner.clear('See `dist` directory')
  } catch (err) {
    spinner.fail('Cannot build release packages. Please contact <shiono.yoshihide@gmail.com>')
    process.exit(1)
  }
}

build()
