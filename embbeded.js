'use strict'

const { Schema } = require('mongoose')

const properties = {

}

const options = {
  id: false,
  _id: false,
  safe: true,
  strict: true,
  timestamps: false,
  versionKey: false
}

const schema = new Schema(properties, options)

const factory = (connection) => {
  throw new Error('cannot instantiate an embbeded document')
}

module.exports = schema
module.exports.factory = factory
