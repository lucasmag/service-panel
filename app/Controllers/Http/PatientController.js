'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Patient = use('App/Models/Patient');

/**
 * Resourceful controller for interacting with patients
 */
class PatientController {
    //Show a list of all the patients.
    async index() {
        return Patient.all();
    }

    //Create/save a new patient.
    async store({ request }) {
        const data = request.all();
        return Patient.create(data);
    }

    //Display a single patient
    async show({ params }) {
        const nip = params.id;
        return Patient.findOrFail(nip);
    }

    //Update patient details.
    async update({ params, request }) {
        const nip = params.id;
        const data = request.all();
        const patient = await Patient.findOrFail(nip);

        patient.merge(data);

        patient.save();

        return patient;
    }

    //Delete a patient with id.
    async destroy({ params }) {
        const nip = params.id;
        const patient = await Patient.findOrFail(nip);

        patient.delete();
    }
}

module.exports = PatientController;
