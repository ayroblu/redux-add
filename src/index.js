const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const genText = require('./genText')

module.exports = function(name, parentDir, options={}) {
  const {typesDir, actionsDir, reducersDir} = options

  const typesFileName = path.resolve(parentDir, typesDir, `${name}.js`)
  const actionsFileName = path.resolve(parentDir, actionsDir, `${name}.js`)
  const reducersFileName = path.resolve(parentDir, reducersDir, `${name}.js`)

  const typesText = genText.genTypes(name)
  const actionsText = genText.genActions(name)
  const reducersText = genText.genReducers(name)

  mkdirp.sync(path.resolve(parentDir, typesDir))
  mkdirp.sync(path.resolve(parentDir, actionsDir))
  mkdirp.sync(path.resolve(parentDir, reducersDir))

  fs.writeFileSync(typesFileName, typesText)
  fs.writeFileSync(actionsFileName, actionsText)
  fs.writeFileSync(reducersFileName, reducersText)

  console.log('Make sure you change the combine reducers file!', path.resolve(parentDir, reducersDir, `index.js`))

  console.log('Finished!')
}
