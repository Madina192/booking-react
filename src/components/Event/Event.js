import React from 'react';

const Event = ({setShowTime, setEvents, events, setSubmit}) => {
    const closeEvent = () => {
        setShowTime(false)
    }
    const submitHandler = (el) => {
        el.preventDefault()
    }
    return (
        <div className='event'>
            <form className="event-form" onSubmit={submitHandler}>
                Type name of your group:
                <input type="text" name='group' required className='event-input' minLength='5'/>
                <button className="event-submit" type='submit'>Submit</button>
            </form>

        </div>
    );
};

export default Event;