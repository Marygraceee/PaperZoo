import React from 'react';
import { useRouter } from 'next/router';

function Breadcrumbs() {
  const router = useRouter();
  return (
    <section className="flex w-full justify-center items-center text-center mx-auto p-5">
      {console.log(router)}
      <nav className="rounded-md w-full justify-center flex items-center text-center mx-auto">
        <ol className="list-reset flex">
          <li><a href="/" className="text-orange-400 hover:text-orange-300">Home&nbsp;</a></li>
          <li>
            <a href={router.asPath} className="text-gray-600 hover:text-orange-300 transition duration-300 ease-in-out cursor-pointer">
              {router.asPath.replace(/\//g, ' ' + '/' + ' ')}
            </a>
          </li>
        </ol>
      </nav>
    </section>
  );
}

export default Breadcrumbs;
