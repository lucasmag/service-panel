'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PatientSchema extends Schema {
  up () {
    this.create('patients', (table) => {
      table.increments('nip')
      table.string('name', 30).notNullable()
      table.string('cpf').unique().notNullable()
      table.string('rg').unique()
      table.string('contact').notNullable()
      table.date('birthday')
      table.timestamps()
    })
  }

  down () {
    this.drop('patients')
  }
}

module.exports = PatientSchema
