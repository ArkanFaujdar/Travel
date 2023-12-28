function Navbar() {
  return (
    <>
      <div className="flex h-[12vh] justify-around items-center bg-white shadow-2xl">
        <h1 className="text-[30px] font-bold">Travel.</h1>
        <ul className="flex gap-[25px] text-[18px]">
          <li>Packages</li>
          <li>Book</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
