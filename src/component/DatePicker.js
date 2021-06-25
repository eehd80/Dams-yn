import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
registerLocale("ko", ko);

const DatePickerButton = () => {
    // 달력 날짜 변경 시 기준점이 되는 날짜
    const [startDate, setStartDate] = useState(new Date());

    // 월/일
    const getFormattedDate = (date) => {
        const month = date.toLocaleDateString("ko-KR", { month: "long" });
        const day = date.toLocaleDateString("ko-KR", { day: "numeric" });
        return `${month.substr(0, month.length - 1)}/${day.substr(0, day.length - 1)}`;
    }; // 요일 반환
    const getDayName = (date) => {
        return date.toLocaleDateString("ko-KR", { weekday: "long" }).substr(0, 1);
    };

    return (
        <DatePicker
            locale="ko"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()} // 과거 날짜 disable
            showTimeSelect
            showMonthDropdown
            dropdownMode="select"
            timeFormat="p"
            timeIntervals={15}
            dateFormat="yyyy-MM-dd(eee) p"
        />
    );
};
export default DatePickerButton;
