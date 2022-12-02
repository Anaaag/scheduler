// returns an array of appointments for that day
export function getAppointmentsForDay(state, day) {
  const dayApp = [];

  const filterDays = state.days.find(d => d.name === day);

  if (!filterDays) {
    return [];
  }

  for (const apptId of filterDays.appointments) {
    dayApp.push(state.appointments[apptId]);

  }

  return dayApp;

}


