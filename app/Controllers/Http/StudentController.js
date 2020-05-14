'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Student = use('App/Models/Student')


class StudentController {

  async index () {
    return Student.all();
  }

  async store ({ request }) {
    const data = request.all();
    return Student.create(data);
  }

  async show ({ params }) {
    return Student.findOrFail(params.id);
  }

  async update ({ params, request }) {
    const student = await Student.findOrFail(params.id);
    student.merge(request.all());
    return student.save()
  }

  async destroy ({ params }) {
    const student = await Student.findOrFail(params.id);
    await student.delete();
  }
}

module.exports = StudentController
