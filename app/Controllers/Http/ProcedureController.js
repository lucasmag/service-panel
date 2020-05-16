'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Procedure = use('App/Models/Procedure')

class ProcedureController {

  async index () {
    return Procedure.all();
  }

  async store ({ request }) {
    const data = request.all();
    return Procedure.create(data);
  }

  async show ({ params }) {
    return Procedure.findOrFail(params.id);
  }

  async update ({ params, request }) {
    const procedure = await Procedure.findOrFail(params.id);
    procedure.merge(request.all());
    return procedure.save()
  }

  async destroy ({ params }) {
    const procedure = await Procedure.findOrFail(params.id);
    await procedure.delete();
  }
}

module.exports = ProcedureController
