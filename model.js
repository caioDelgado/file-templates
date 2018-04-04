'use strict'

const { Schema } = require('mongoose')

const properties = {

}

const options = {
  collection = ,
  id: false,
  safe: true,
  strict: true,
  timestamps: false,
  versionKey: false
}

const schema = new Schema(properties, options)

const factory = (connection) => {
  return connection.model(, schema)
}

module.exports = schema
module.exports.factory = factory
