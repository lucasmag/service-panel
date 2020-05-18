'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Appointment = use('App/Models/Appointment');

class AppointmentController {
    async index() {
        return Appointment.all();
    }

    async store({ request }) {
        const { patientNip, studentEnrollment, date, urgent } = request.all();

        return Appointment.create({
            patient_nip: patientNip,
            student_enrollment: studentEnrollment,
            date,
            urgent,
        });
    }

    async show({ params }) {
        return Appointment.findOrFail(params.id);
    }

    async update({ params, request }) {
        const appointment = await Appointment.findOrFail(params.id);
        appointment.merge(request.all());
        return appointment.save();
    }

    async destroy({ params }) {
        const appointment = await Appointment.findOrFail(params.id);
        await appointment.delete();
    }
}

module.exports = AppointmentController;
