'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Patient = use('App/Models/Patient');

/**
 * Resourceful controller for interacting with patients
 */
class PatientController {
  async index ({ request, response, view }) {
  }

  async store ({ request, response }) {
    const patientData = request.all();

    return await Patient.create(data);
  }

  async show ({ params, request, response }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = PatientController
