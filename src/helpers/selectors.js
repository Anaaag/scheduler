// returns an array of appointments for that given day
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

// returns a new object containing the interview data when we pass it an object that contains the interviewer 

export function getInterview(state, interview) {

  if (!interview) {
    return null
  }

  return { ...interview, interviewer: state.interviewers[interview.interviewer] }
  
}


export function getInterviewersForDay(state, day) {

  const dayApp = [];

  const filterDays = state.days.find(d => d.name === day);

  if (!filterDays) {
    return [];
  }

  for (const interviewertId of filterDays.interviewers) {
    dayApp.push(state.interviewers[interviewertId]);

  }

  return dayApp;

}


