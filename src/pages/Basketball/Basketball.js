import React from 'react';
import Carousel from "react-multi-carousel";
import basketball_1 from "../../imgs/basketball_1.jpg";
import basketball_2 from "../../imgs/basketball_2.jpg";
import basketball_3 from "../../imgs/basketball_3.jpg";
import basketball_4 from "../../imgs/basketball_4.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import FullCalendar from "@fullcalendar/react";
import Schedule from "../../components/Schedule";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {useState} from "react";

const Basketball = () => {
    const [openDate, setOpenDate] = useState(false)
    const [events, setEvents] = useState([]);
    const [showTime, setShowTime] = useState(false);

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
    return (
        <div className='football'>
            <h2 className="football-title">Basketball Field</h2>
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
                        <img src={basketball_1} alt="" className="football-img"/>
                    </div>
                    <div className="football-min_box">
                        <img src={basketball_2} alt="" className="football-img"/>
                    </div>
                    <div className="football-min_box">
                        <img src={basketball_3} alt="" className="football-img"/>
                    </div>
                    <div className="football-min_box">
                        <img src={basketball_4} alt="" className="football-img"/>
                    </div>
                </Carousel>
            </div>
            <div className="form-box">
                <h2 className="football-title">Click on the time you want to book and enter your group name</h2>
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
        </div>
    );
};

export default Basketball;