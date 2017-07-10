#!/usr/bin/env node

const options = require('minimist')(process.argv.slice(2))
const run = require('./src')
const {help, notEnough, tooMany} = require('./text')

if (options._.length === 0 || (options.h || options.help)) {
  console.log(help)
  process.exit(0)
}
if (options._.length === 0 && (options.v || options.version)) {
  printVersionsAndExit()
}

const commands = options._
if (commands.length > 2) {
  console.error(tooMany)
  process.exit(1)
}
if (commands.length < 2) {
  console.error(notEnough)
  process.exit(1)
}

const dirName = commands[0]
const name = commands[1]

if (/[^a-z0-9]/i.test(name)){
  console.error('Please make sure your name contains only alphanumeric characters')
  process.exit()
}

const params = {
  parentDir: dirName
, typesDir: options.t || 'types'
, actionsDir: options.a || 'actions'
, reducersDir: reducers.r || 'reducers'
}
run(name, parentDir, params)

function printVersionsAndExit() {
  console.log('db-difftool: ' + require('./package.json').version)
  process.exit()
}





