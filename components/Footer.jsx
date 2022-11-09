import React from 'react';

function Footer() {
  return (
    <footer className="p-5 mt-5 bg-gray-700 shadow flex justify-between items-center">
      <span className="text-sm text-white flex flex-col lg:flex-row">
        © 2022
        <a href="/" className="hover:underline"> Paperetro</a>
        Tutti i diritti riservati.
      </span>
      <ul className="flex flex-wrap items-center text-sm text-white justify-center">
        <li>
          <a href="/contattaci" className="mr-4 hover:underline md:mr-6 ">Contatti</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
