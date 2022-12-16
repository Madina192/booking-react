import React from 'react';
import {useState} from "react";
import Carousel from "react-multi-carousel";
import konya1 from "../../imgs/konya_photo.jpg";
import pic2 from "../../imgs/football_img/pic2.jpg";
import pic3 from "../../imgs/football_img/pic3.webp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar";

const Conference = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);
    const [openDate, setOpenDate] = useState(false)
    const [value, onChange] = useState(new Date());

    return (
        <div className='football'>
            <h2 className="football-title">Conference Hall</h2>
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
                        <img src={konya1} alt="" className="football-img"/>
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
                    { openDate && <Calendar onChange={onChange} value={value} />}
                </div>
            </div>
            <div className="schedule">

            </div>

        </div>
    );
};

export default Conference;