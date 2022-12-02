import React from 'react';
import football from "../../imgs/football.jpg";
import basketball from "../../imgs/basketball.jpg";
import volleyball from "../../imgs/volleyball.jpg";
import tennis from "../../imgs/tennis.jpg";
import picnic from "../../imgs/besedka.jpg";
import dance from "../../imgs/dance.jpg";
import konya from "../../imgs/konya.jpg";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import {useNavigate} from "react-router-dom";

const Home = ({isLoggedIn, setIsLoggedIn, setUserEmail, userEmail}) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const navigate = useNavigate()
    const goToFootball = () => {
        navigate('/football')
    }
    const goToBasketball = () => {
        navigate('/basketball')
    }
    const goToVolleyball = () => {
        navigate('/volleyball')
    }
    const goToTennis = () => {
        navigate('/tennis')
    }
    const goToGym = () => {
        navigate('/gym')
    }
    const goToDancing = () => {
        navigate('/dancing')
    }
    const goToPicnic = () => {
        navigate('/picnic')
    }
    const goToConference = () => {
        navigate('/conference')
    }
    const goToCanteen = () => {
        navigate('/canteen')
    }
    return (
        <div className='home'>
            <h1 className="home-title">
                Book online football field
            </h1>
            <div className="carousel-box">
                <Carousel
                    responsive={responsive}
                    additionalTransfrom={0}
                    arrows
                    autoPlay={true}
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
                    <div className='carousel-min_box'>
                        <h4 className="carousel-title">Football</h4>
                        <img src={football} alt="" className="carousel-img"/>
                        <div className="btn-box">
                            <button className="login-btn first" type='click' onClick={goToFootball}>See more</button>
                            <button className="login-btn" type='click'>Book</button>
                        </div>
                    </div>
                    <div className='carousel-min_box'>
                        <h4 className="carousel-title">Basketball</h4>
                        <img src={basketball} alt="" className="carousel-img"/>
                        <div className="btn-box">
                            <button className="login-btn first" type='click' onClick={goToBasketball}>See more</button>
                            <button className="login-btn" type='click'>Book</button>
                        </div>
                    </div>
                    <div className='carousel-min_box'>
                        <h4 className="carousel-title">Volleyball</h4>
                        <img src={volleyball} alt="" className="carousel-img"/>
                        <div className="btn-box">
                            <button className="login-btn first" type='click' onClick={goToVolleyball}>See more</button>
                            <button className="login-btn" type='click'>Book</button>
                        </div>
                    </div>
                    <div className='carousel-min_box'>
                        <h4 className="carousel-title">Gym</h4>
                        <img src={volleyball} alt="" className="carousel-img"/>
                        <div className="btn-box">
                            <button className="login-btn first" type='click' onClick={goToGym}>See more</button>
                            <button className="login-btn" type='click'>Book</button>
                        </div>
                    </div>
                    <div className='carousel-min_box'>
                        <h4 className="carousel-title">Table tennis</h4>
                        <img src={tennis} alt="" className="carousel-img"/>
                        <div className="btn-box">
                            <button className="login-btn first" type='click' onClick={goToTennis}>See more</button>
                            <button className="login-btn" type='click'>Book</button>
                        </div>
                    </div>
                    <div className='carousel-min_box'>
                        <h4 className="carousel-title">Picnic zone</h4>
                        <img src={picnic} alt="" className="carousel-img"/>
                        <div className="btn-box">
                            <button className="login-btn first" type='click' onClick={goToPicnic}>See more</button>
                            <button className="login-btn" type='click'>Book</button>
                        </div>
                    </div>
                    <div className='carousel-min_box'>
                        <h4 className="carousel-title">Konya Hall</h4>
                        <img src={konya} alt="" className="carousel-img"/>
                        <div className="btn-box">
                            <button className="login-btn first" type='click' onClick={goToConference}>See more</button>
                            <button className="login-btn" type='click'>Book</button>
                        </div>
                    </div>
                    <div className='carousel-min_box'>
                        <h4 className="carousel-title">Canteen</h4>
                        <img src={konya} alt="" className="carousel-img"/>
                        <div className="btn-box">
                            <button className="login-btn first" type='click' onClick={goToCanteen}>See more</button>
                            <button className="login-btn" type='click'>Book</button>
                        </div>
                    </div>
                    <div className='carousel-min_box'>
                        <h4 className="carousel-title">Dancing Hall</h4>
                        <img src={dance} alt="" className="carousel-img"/>
                        <div className="btn-box">
                            <button className="login-btn first" type='click' onClick={goToDancing}>See more</button>
                            <button className="login-btn" type='click'>Book</button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Home;