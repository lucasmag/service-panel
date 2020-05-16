'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const AppointmentProcedure = use('App/Models/AppointmentProcedure');
const Appointment = use('App/Models/Appointment');
const Procedure = use('App/Models/Procedure');


/**
 * Resourceful controller for interacting with appointmentprocedures
 */
class AppointmentProcedureController {
  async index () {
    return AppointmentProcedure.all();
  }


  async store ({ request }) {
    const {appointmentId, procedureId} = request.all();
    const appointment = await Appointment.findOrFail(appointmentId)
    const procedure = await Procedure.findOrFail(procedureId)

    if (appointment && procedure){
      return AppointmentProcedure.create({appointment_id: appointmentId, procedure_id: procedureId});
    }

    return response.noContent("Procedure or Appointment not found!");
  }


  async show ({ params }) {
    return AppointmentProcedure.findOrFail(params.id);
  }


  async update ({ params, request }) {
    const {id} = params;
    const {appointmentId, procedureId} = request.all();
    const apptsProcs = await AppointmentProcedure.findOrFail(id);

    apptsProcs.merge({appointment_id: appointmentId, procedure_id: procedureId});
    apptsProcs.save();

    return apptsProcs;
  }


  async destroy ({ params}) {
    const {id} = params;
    const apptsProcs = await AppointmentProcedure.findOrFail(id);

    apptsProcs.delete();
  }
}

module.exports = AppointmentProcedureController
