import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerButton = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale="ko"
            showTimeSelect
            timeFormat="p"
            timeIntervals={15}
            dateFormat="yyyy/MM/dd(eee) , p"
        />
    );
};
export default DatePickerButton;
