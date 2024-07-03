import React, { useState } from "react";
import "./Calendar.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

const Calendar = ({ events, onDateClick, selectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const renderHeader = () => {
    const nextMonth = () => {
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
      );
    };

    const prevMonth = () => {
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
      );
    };

    const nextYear = () => {
      setCurrentDate(
        new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), 1)
      );
    };

    const prevYear = () => {
      setCurrentDate(
        new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), 1)
      );
    };

    return (
      <div className="header row d-flex justify-content-between align-items-center">
        <div className="col col-start" onClick={prevYear}>
          <FaAngleDoubleLeft className="icon" />
        </div>
        <div className="col col-start" onClick={prevMonth}>
          <FaChevronLeft className="icon" />
        </div>
        <div className="col col-center">
          <span>
            {currentDate.toLocaleDateString("tr-TR", {
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
        <div className="col col-end" onClick={nextMonth}>
          <FaChevronRight className="icon" />
        </div>
        <div className="col col-end" onClick={nextYear}>
          <FaAngleDoubleRight className="icon" />
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ];

    return (
      <div className="days row">
        {days.map((day, index) => (
          <div className="col col-center" key={index}>
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const daysInMonthCount = daysInMonth(month, year);
    const firstDayIndex = firstDayOfMonth(month, year);

    const rows = [];
    let days = [];
    let day = 1;
    let dayIndex = firstDayIndex; // Döngü için kullanılan değişken

    // Create empty cells for the days before the first day of the month
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(<div className="col cell empty" key={`empty-${i}`} />);
    }

    // Create cells for each day of the month
    while (day <= daysInMonthCount) {
      for (let i = dayIndex; i < 7; i++) {
        if (day > daysInMonthCount) {
          break;
        }
        const cloneDay = new Date(year, month, day);
        const currentDateString = cloneDay.toDateString();
        const dayEvents = events.filter(
          (event) => new Date(event.date).toDateString() === currentDateString
        );

        days.push(
          <div
            className={`col cell ${
              cloneDay.getMonth() !== month
                ? "disabled"
                : cloneDay.getDate() === new Date().getDate() &&
                  cloneDay.getMonth() === new Date().getMonth() &&
                  cloneDay.getFullYear() === new Date().getFullYear()
                ? "today"
                : selectedDate &&
                  cloneDay.toDateString() === selectedDate.toDateString()
                ? "selected"
                : ""
            }`}
            key={cloneDay}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className="number">{day}</span>
            {dayEvents.length > 0 &&
              dayEvents.map((event, index) => (
                <div className="event" key={index}>
                  {event.time} - {event.title}
                </div>
              ))}
          </div>
        );
        day++;
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
      dayIndex = 0; // Reset the day index for the next row
    }

    // Add empty cells after the last day of the month
    const lastDayIndex = (firstDayIndex + daysInMonthCount) % 7;
    for (let i = lastDayIndex; i < 7 && i !== 0; i++) {
      days.push(<div className="col cell empty" key={`empty-end-${i}`} />);
    }
    if (days.length) {
      rows.push(
        <div className="row" key="last-row">
          {days}
        </div>
      );
    }

    return <div className="body">{rows}</div>;
  };

  return (
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
