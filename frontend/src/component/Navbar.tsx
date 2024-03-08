import React from "react";

const Navbar = () => {
  return (
    <div className="lg:px-12 px-4 sm:px-8 lg:pt-6 pt-2 sm:pt-4 font-bold pb-2 sm:pb-3 lg:pb-4">
      <div className="flex items-center">
        <h1 className="flex justify-start mr-auto lg:text-4xl sm:text-3xl text-2xl">
          PURE
        </h1>
        <div className="lg:text-2xl hidden text-lg sm:flex justify-center mx-auto lg:space-x-12 sm:space-x-7">
          <p>Home</p>
          <p>About</p>
          <p>Shopping Info</p>
          <p>Contacts</p>
        </div>
        <div className="text-2xl flex justify-end ml-auto space-x-2">
          <p>Profile</p>
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
