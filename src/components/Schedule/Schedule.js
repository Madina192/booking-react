import React, {useState, useEffect} from 'react';
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';


const Schedule = ({showTime, setShowTime, value, info, events}) => {
    const { event } = info;
    return (
        <div className='schedule-box'>
            <div className='schedule-title'>{event.title}</div>
        </div>
    );
};

export default Schedule;