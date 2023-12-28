import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="hidden md:flex h-[12vh] justify-around items-center bg-white shadow-2xl">
        <h1 className="text-[30px] font-bold">Travel.</h1>
        <ul className="flex gap-[25px] text-[18px]">
          <li>Packages</li>
          <li>Book</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>

      <div>
        <div className="sticky flex justify-between items-center border-b-[1px] h-[11vh] px-4 mb-0 md:hidden ">
          <h1 className="m-0 text-2xl font-bold">Travel.</h1>
          <div onClick={() => setNav((nav) => !nav)}>{nav ? "x" : "="}</div>
        </div>
        {nav && (
          <ul>
            <li className="p-4 border-b-2 ">Home</li>
            <li className="p-4 border-b-2">Packages</li>
            <li className="p-4 border-b-2">Contact US</li>
            <li className="p-4 border-b-2">Book</li>
            <li className="p-4 border-b-2">About</li>
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;
