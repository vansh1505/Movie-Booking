import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement('#root');

const ModalComponent = ({ isOpen, onRequestClose, selectedSeats, selectedDate, selectedTime, title, img }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlePayNow = () => {
    // Implement payment processing logic here
    alert(`Name: ${name}\nEmail: ${email}\nPayment processing...`);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Selected Seats"
      className="modal-content flex flex-col items-center bg-white rounded-xl shadow-xl p-5 relative"
      overlayClassName="modal-overlay fixed backdrop-blur-sm backdrop-brightness-75 inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <button aria-label="Close modal" className="absolute top-3 right-3 w-5" onClick={onRequestClose}>
        <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-1024.png" alt="Close" />
      </button>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 max-md:mt-2">Booking Confirmation</h2>
      <div className="flex gap-10 p-2 max-md:flex-col max-md:gap-5">
        <div className="flex flex-col justify-evenly items-center max-md:gap-3">
          <img className="w-48" src={img} alt={title} />
          <p className="text-xl text-black font-semibold">{title}</p>
        </div>
        <div className="flex flex-col mt-4">
          <p className="p-1">Selected Seats: {selectedSeats.join(", ")}</p>
          <p className="p-1">Selected Date: {selectedDate}</p>
          <p className="p-1">Selected Time: {selectedTime}</p>
        </div>
          <div className="flex flex-col">
          <input type="text" className="mt-3 p-2 border rounded-lg" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="email" className="mt-3 p-2 border rounded-lg" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <button className="mt-5 w-32 p-2 text-lg text-white rounded-xl bg-blue-700 hover:bg-blue-800 self-center" onClick={handlePayNow}>
            Pay Now
          </button>
          </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;
