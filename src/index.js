const fs = require('fs')
const path = require('path')
const genText = require('./genText')

module.exports = function(name, parentDir, options={}) {
  const {parentDir, typesDir, actionsDir, reducersDir} = options

  const typesFileName = path.resolve(parentDir, typesDir, `${name}.js`)
  const actionsFileName = path.resolve(parentDir, actionsDir, `${name}.js`)
  const reducersFileName = path.resolve(parentDir, reducersDir, `${name}.js`)

  const typesText = genText.genTypes(name)
  const actionsText = genText.genActions(name)
  const reducersText = genText.genReducers(name)

  console.log('Make sure you change the combine reducers file!', path.resolve(parentDir, reducersDir, `index.js`))

  fs.writeFileSync(typeFileName, type)
  fs.writeFileSync(actionFileName, action)
  fs.writeFileSync(reducerFileName, reducer)

  console.log('Finished!')
}
