'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class StudentSchema extends Schema {
    up() {
        this.create('students', (table) => {
            table.increments();
            table.string('name', 30).notNullable();
            table.string('enrollment', 7).notNullable().unique();
            table.timestamps();
        });
    }

    down() {
        this.drop('students');
    }
}

module.exports = StudentSchema;
