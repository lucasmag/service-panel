'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', ({response}) => {
  return response.ok({message: 'all right!'});
});

Route.post('/register', 'AuthController.register');
Route.post('/authenticate', 'AuthController.authenticate');
Route.get('/dashboard', 'DashboardController.index').middleware(['auth']);

Route.group(() => {
  Route.resource('student', 'StudentController').apiOnly()
}).middleware('auth');

Route.group(() => {
  Route.resource('procedure', 'ProcedureController').apiOnly()
}).middleware('auth');

Route.group(() => {
  Route.resource('appointment', 'AppointmentController').apiOnly()
}).middleware('auth');

// Routes patient.
Route.group(() => {
  Route.resource('patient', 'PatientController').apiOnly();
}).middleware('auth');
