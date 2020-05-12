'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PatientSchema extends Schema {
  up () {
    this.create('patient', (table) => {
      table.increments('nip')
      table.string('name', 80).notNullable()
      table.string('cpf').unique().notNullable()
      table.string('rg').unique().notNullable()
      table.string('contato').notNullable()
      table.date('birthday').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('patients')
  }
}

module.exports = PatientSchema
