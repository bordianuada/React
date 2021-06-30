import React, { useState } from "react";
import { addPacient, updatePacient, pacienti } from "./../../slices/programSlice"
import { useSelector, useDispatch } from "react-redux";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import TimePicker from "react-timepicker";


export function Program()
{
  const [startDate, setStartDate] = useState(new Date());
  //const [ora, setOra] = useState("10:00");
  return (
    <>
    <h1>Progamare</h1>
    <DatePicker selected={startDate} onChange={(event) => setStartDate(event.target.value)} value={startDate} />
    {/* <TimePicker step={60}/> */}
    </>
  );
};

export default Program;