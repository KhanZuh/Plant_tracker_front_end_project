import FullCalendar from '@fullcalendar/react'
import DayGridPlugin from '@fullcalendar/daygrid'
import { useEffect, useState } from 'react';

const Calendar = ({ events, getEvents }) => {

    /*
    
    Get a list of plants that have a last watered date property
    From those plants, get their plant countdowns
    Calculate the next watering date from that and display as an event on the calendar

    */

    return (
        <FullCalendar
            plugins={[DayGridPlugin]}
            initialView='dayGridMonth'
            events={events}
        />
    )
}

export default Calendar;
