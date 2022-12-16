import React, {useEffect, useRef} from 'react';
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import pic1 from "../../imgs/football_img/pic1.jpg"
import pic2 from "../../imgs/football_img/pic2.jpg"
import pic3 from "../../imgs/football_img/pic3.webp"
import 'react-calendar/dist/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {useState} from "react";
//import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month} from "@syncfusion/ej2-react-schedule"
import Calendar from 'react-calendar';
import FullCalendar from "@fullcalendar/react"
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridMonth from "@fullcalendar/daygrid";
import timeGridWeek from "@fullcalendar/timegrid";
import timeGridDay from "@fullcalendar/timegrid";
import Schedule from "../../components/Schedule";
import * as events from "events";
import Event from "../../components/Event";

const Football = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const [openDate, setOpenDate] = useState(false)
    const [value, setValue] = useState(new Date())
    const [showTime, setShowTime] = useState(false);
    const [schedule, setSchedule] = useState([]);

    const createTable = () => {
        setShowTime(!showTime)
        const date = document.querySelector('.react-calendar__month-view__days')
        const count = date.children.length;
        const dateArray = [date.children]
        console.log(dateArray.length)
        console.log('clicked!')
    }
    useEffect(() => {
        setSchedule([...schedule, {id: value}])
        console.log(value)

    }, []);
    const [events, setEvents] = useState([]);
    const [submit, setSubmit] = useState(false);

    const handleSelect = (info) => {
        const { start, end } = info;
        setShowTime(true)
        const eventNamePrompt = prompt("Enter your group name");

        if (eventNamePrompt) setEvents([
            ...events,
            {
                start,
                end,
                title: eventNamePrompt,
                id: events.length === 0 ? 1 : events[events.length - 1].id + 1,
            },
        ])
    }

    return (
        <div className='football'>
            <h2 className="football-title">Football Field</h2>
            <div className="football-box">
                <Carousel
                    responsive={responsive}
                    additionalTransfrom={0}
                    arrows
                    autoPlay={false}
                    autoPlaySpeed={2000}
                    centerMode={false}
                    className='carousel'
                    containerClass="container-with-dots"
                    dotListClass=''
                    draggable
                    focusOnSelect={true}
                    infinite
                    itemClass=''
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                >
                    <div className="football-min_box">
                        <img src={pic1} alt="" className="football-img"/>
                    </div>
                    <div className="football-min_box">
                        <img src={pic2} alt="" className="football-img"/>
                    </div>
                    <div className="football-min_box">
                        <img src={pic3} alt="" className="football-img"/>
                    </div>
                </Carousel>
            </div>
            <div className="form-box">
                <button className="calendar-btn" onClick={() => setOpenDate(!openDate)}>
                    <h3 className="calendar-btn_title">Choose date</h3>
                    <FontAwesomeIcon icon={faCalendarDays} className='icon'/>
                </button>
                <div className="calendar-box">
                    { openDate && <FullCalendar
                        editable
                        selectable
                        events={events}
                        select={handleSelect}
                        headerToolbar={{
                            start: "today prev next",
                            end: "timeGridWeek timeGridDay"
                        }}
                        eventContent={(info) => <Schedule info={info} events={events}/>}
                        plugins={[timeGridPlugin, interactionPlugin]}
                        views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
                        allDaySlot={false}
                        slotMinTime='09:00:00'
                        slotLabelInterval='00:30:00'
                    />}
                </div>
            </div>
            <div className="schedule">

            </div>
            <div className="time">
            </div>

        </div>
    );
};

export default Football;