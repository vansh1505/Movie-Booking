import React, { useState } from "react";
import ModalComponent from "./Cart"; // Import the ModalComponent

const seats = [
  ["A1", "A2", "A3", "A4", "A5"],
  ["B1", "B2", "B3", "B4", "B5"],
  ["C1", "C2", "C3", "C4", "C5"],
  ["D1", "D2", "D3", "D4", "D5"],
  ["E1", "E2", "E3", "E4", "E5"],
];

const seatPrice = 300;
const img = "https://static.toiimg.com/thumb/msid-100727197,imgsize-58436,width-400,resizemode-4/100727197.jpg";
const title = "Housefull 3";
const times = ["12:00pm", "3:00pm", "6:00pm"];
const dates = ["Aug 2 2024", "Aug 3 2024", "Aug 4 2024"];

const TimeButton = ({ time, selectedTime, onClick }) => {
  return (
    <button className={`h-7 hover:text-white hover:bg-green-500 duration-300 rounded-xl m-3 w-28 ${selectedTime === time ? "bg-green-500 text-white" : "bg-white text-green-500"}`} onClick={() => onClick(time)}>{time}</button>
  );
};

const DateButton = ({ date, selectedDate, onClick }) => {
  return (
    <button className={`h-7 hover:text-white hover:bg-green-500 duration-300 rounded-xl m-3 w-28 ${selectedDate === date ? "bg-green-500 text-white" : "bg-white text-green-500"}`} onClick={() => onClick(date)}>{date}</button>
  );
};

const Booking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSeatClick = (seat) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seat)
        ? prevSelectedSeats.filter((s) => s !== seat)
        : [...prevSelectedSeats, seat]
    );
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleConfirmClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex gap-12 max-md:flex-col justify-center items-center overflow-x-hidden">
        <div className="flex flex-col bg-white m-5 shadow-xl rounded-xl w-96 p-5 border-2">
          <div className="flex flex-col items-center">
            <img className="w-80" src={img} alt="" />
          </div>
          <p className="my-7 text-3xl font-semibold text-center text-gray-800">
            {title}
          </p>
          <p className="ml-3 text-gray-700">Choose your show date and time:</p>
          <div className="flex justify-center items-center space-x-4">
            <div className="flex flex-col items-center">
              {dates.map((date) => (
                <DateButton key={date} date={date} selectedDate={selectedDate} onClick={handleDateClick} />))}
            </div>
            <div className="flex flex-col items-center">
              {times.map((time) => (
                <TimeButton key={time} time={time} selectedTime={selectedTime} onClick={handleTimeClick} />))}
            </div>
          </div>
        </div>
        <div className="flex flex-row max-sm:flex-col">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-semibold mb-5">Select Your Seats</p>
            <div className="grid grid-cols-5 gap-4 mb-5">
              {seats.flat().map((seat) => (
                <button key={seat} className={`p-3 rounded-lg ${selectedSeats.includes(seat) ? "bg-green-500 text-white" : "bg-gray-300 text-gray-800"}`} onClick={() => handleSeatClick(seat)}>{seat}</button>))}
            </div>
            <div>
              <p className="text-red-600 text-lg">
                Pricing: ₹{seatPrice}/seat | You chosen: {selectedSeats.length} seats
                <p className="text-center mt-1">
                  Total amount: ₹{seatPrice * selectedSeats.length}
                </p>
              </p>
            </div>
            <button
              className="mt-5 p-2 text-lg text-white rounded-xl bg-blue-700 hover:bg-blue-800 duration-300" onClick={handleConfirmClick}>Confirm Seats</button>
          </div>
          <div className="flex gap-2 flex-col my-32 p-4 mx-5 max-sm:flex-row max-sm:my-3">
            <div className="flex items-center gap-3">
              <p className="p-3 rounded-lg bg-gray-300 text-gray-800">nh</p>
              <span> Vacant</span>
            </div>
            <div className="flex items-center gap-3">
              <p className="p-3 rounded-lg bg-gray-300 text-gray-800 opacity-45">nh</p>
              <span>Booked</span>
            </div>
            <div className="flex items-center gap-3">
              <p className="p-3 rounded-lg bg-green-500 text-white">nh</p>
              <span> Selected</span>
            </div>
          </div>
        </div>
      </div>
      <ModalComponent isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} selectedSeats={selectedSeats} selectedDate={selectedDate} selectedTime={selectedTime} title={title} img={img} />
    </>
  );
};

export default Booking;
