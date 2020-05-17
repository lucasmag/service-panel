'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProcedureSchema extends Schema {
    up() {
        this.create('procedures', (table) => {
            table.increments();
            table.string('name', 30).notNullable();
            table.string('description', 300);
            table.timestamps();
        });
    }

    down() {
        this.drop('procedures');
    }
}

module.exports = ProcedureSchema;
