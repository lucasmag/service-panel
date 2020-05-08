'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('patient', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.int('phone').notNullable().unique()
      table.int('cpf', 60).unique()
      table.int('rg', 60).unique()
      table.datetime('birthday').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
