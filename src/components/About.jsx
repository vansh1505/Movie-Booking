import React from 'react'

const About = () => {
  return (
    <>
      <div className="h-[84vh] sm:flex items-center max-w-screen-xl ">
        <div className="sm:w-1/2 p-10 max-sm:hidden">
          <div className="flex justify-center">
            <img src="logo3.png" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <h2 className="my-4 font-bold text-3xl text-gray-800  sm:text-4xl ">About <span className="text-indigo-800">BookMySeat</span>
            </h2>
            <p className="text-gray-800">
            BookMySeat Website is an intuitive platform that allows users to book movie tickets online. Users can view a movie's details, select show dates and times, and choose their seats from a visual seating chart. The application provides real-time feedback on seat availability and calculates the total cost based on the number of selected seats. The interface is user friendly, with clear indications of selected, vacant, and booked seats.<br/><br/>This project leverages React's state management and component-based architecture to create a seamless booking experience.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About