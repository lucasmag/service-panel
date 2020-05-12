'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AppointmentSchema extends Schema {
  up () {
    this.create('appointments', (table) => {
      table.increments()
      table.integer('patient_nip').references('nip').inTable('patients')
      table.string('student_enrollment', 7).references('enrollment').inTable('students')
      table.boolean('urgent').notNullable().defaultTo(false)
      table.datetime('date').notNullable()
      table.unique(['patient_nip', 'student_enrollment'])
      table.timestamps()
    })
  }

  down () {
    this.drop('appointments')
  }
}

module.exports = AppointmentSchema
