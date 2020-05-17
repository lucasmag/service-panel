'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AppointmentSchema extends Schema {
  up () {
    this.create('appointments', (table) => {
      table
        .increments()
      table
        .integer('patient_nip')
        .notNullable()
        .references('nip')
        .inTable('patients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.
        string('student_enrollment', 7)
        .notNullable()
        .references('enrollment')
        .inTable('students')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .boolean('urgent')
        .notNullable()
        .defaultTo(false)
      table.datetime('date', { useTz: false }).notNullable()
      table.unique(['patient_nip', 'student_enrollment', 'date']);
      table.timestamps()
    })
  }

  down () {
    this.drop('appointments')
  }
}

module.exports = AppointmentSchema
