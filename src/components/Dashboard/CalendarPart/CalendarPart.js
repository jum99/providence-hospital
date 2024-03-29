import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalenderPart = () => {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <Calendar
                className="p-3"
                onChange={onChange}
                value={value}
            />
        </>
    );
};

export default CalenderPart;