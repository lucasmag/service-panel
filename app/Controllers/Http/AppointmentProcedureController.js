'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

// const Appointment = use('App/Models/Appointment');
// const Procedure = use('App/Models/Procedure');
const AppointmentProcedure = use('App/Models/AppointmentProcedure');


/**
 * Resourceful controller for interacting with appointmentprocedures
 */
class AppointmentProcedureController {
  async index ({ request, response }) {
    const apptsProcs = await AppointmentProcedure.all();
    
    return apptsProcs;
  }

  
  async store ({ request, response }) {
    const data = request.all();
    const apptsProcs = await AppointmentProcedure.create(data);

    return apptsProcs;
  }

  
  async show ({ params, request, response }) {
    const {id} = params;
    const apptsProcs = await AppointmentProcedure.findOrfail(id);

    return apptsProcs;
  }

  
  async update ({ params, request, response }) {
    const {id} = params;
    const data = request.all();
    const apptsProcs = await AppointmentProcedure.findOrfail(id);
    
    apptsProcs.merge(data);
    apptsProcs.save();

    return apptsProcs;
  }

  
  async destroy ({ params, request, response }) {
    const {id} = params;
    const apptsProcs = await AppointmentProcedure.delete(id);

    apptsProcs.delete();

    return response.ok({ message : `nip ${id} deleted with sucess`});

  }
}

module.exports = AppointmentProcedureController
