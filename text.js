const help = `
  Usage: redux-add [dirname] [name] [options]

  Options:

    -h, --help               output usage information
    -v, --version            output the version
    -r, --reducers-dir       reducers directory
    -t, --types-dir          types directory
    -a, --actions-dir        actions directory

  Example:

    $ redux-add src main
    $ redux-add -r reducers -t constants -a actions src main 
`
const tooMany = `
  Sorry you've provided too many arguments
`
const notEnough = `
  Sorry you haven't provided enough arguments
`


module.exports = {
  help
, tooMany
, notEnough
}

