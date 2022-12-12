import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = (day) => setState({ ...state, day });



  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };


    return axios.put(`/api/appointments/${id}`, {

      interview
    })
      .then(() => {

        const days = updateSpots(state, appointments)
        setState({
          ...state,
          appointments,
          days

        });
      })
  };

  function cancelInterview(id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    }

    const appointments = {
      ...state.appointments,
      [id]: appointment
    }

    return axios.delete(`/api/appointments/${id}`).then(() => {
      const days = updateSpots(state, appointments);
      setState({
        ...state,
        appointments,
        days
      });
    })
  };

  const updateSpots = function (state, appointments) {

    const dayObj = state.days.find((d) => d.name === state.day);

    let spots = 0;

    for (const id of dayObj.appointments) {

      const appointment = appointments[id]

      if (appointment.interview === null) {
        spots += 1
      }
    }

    const newDayObj = { ...dayObj, spots };
    const updatedDay = state.days.map((d) => (d.name === state.day ? newDayObj : d));

    return updatedDay;
  };

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers'),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }))
    })
  }, []);

  return { state, setDay, bookInterview, cancelInterview, updateSpots }
};


















