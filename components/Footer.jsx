import React from 'react';

function Footer() {
  return (
    <footer className="p-2 mt-5 lg:text-sm text-xs bg-gray-700 shadow flex justify-between items-center relative bottom-0">
      <span className=" text-white flex flex-col lg:flex-row gap-2">
        © 2022
        <a href="/" className="hover:underline">Paperzoo</a>
      </span>
      <ul className="flex flex-wrap items-center text-white justify-center">
        <li>
          <a href="/contattaci" className="mr-4 hover:underline md:mr-6 ">Contatti</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
