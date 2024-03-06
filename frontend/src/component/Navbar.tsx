import React from "react";

const Navbar = () => {
  return (
    <div className="px-12 pt-6 font-bold pb-4">
      <div className="flex items-center">
        <h1 className="flex justify-start mr-auto text-4xl">PURE</h1>
        <div className="text-2xl flex justify-center mx-auto space-x-12">
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
