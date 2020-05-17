'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AppointmentProcedureSchema extends Schema {
    up() {
        this.create('appointment_procedures', (table) => {
            table.increments();
            table
                .integer('appointment_id', 7)
                .notNullable()
                .references('id')
                .inTable('appointments')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table
                .integer('procedure_id', 7)
                .notNullable()
                .references('id')
                .inTable('procedures')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.unique(['appointment_id', 'procedure_id']);
            table.timestamps();
        });
    }

    down() {
        this.drop('appointment_procedures');
    }
}

module.exports = AppointmentProcedureSchema;
