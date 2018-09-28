#!/usr/bin/env node
const program = require('commander')
const packageDetails = require('./../package.json')
const Linter = require('./linter.js')

const run = (args) => {
  program
    .version(packageDetails.version)
    .description(packageDetails.description)
    .usage('[options] <paths ...>')
    .option('-s, --syntax [scss|sass]', 'syntax to evaluate the file(s) with')
    .arguments('<paths>')
    .parse(process.argv)

  if (!program.args.length) {
    program.help()
  }

  const linter = new Linter({
    syntax: program.syntax
  })

  linter.checkPaths(program.args)
}

module.exports = run
