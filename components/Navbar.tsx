import Link from "next/link";

export const Navbar = (props: {}) => {
  return (

<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800">
  <div className="container mx-auto">
    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
      <ul className="flex justify-between mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
       <div className="flex gap-3">
        <li>
          <Link href="/">
            <a className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/nosotros">
            <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >Nosotros</a>
          </Link>
         </li>
        <li>
          <Link href="/contacto">
            <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contacto</a>
          </Link>
        </li>
        </div>
           <div className="flex gap-3">
           <li>
          <Link href="/login">
          <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Iniciar sesión</a>
          </Link>
          </li>
          <li>
          <Link href="/signup">
          <a className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Registrarse</a>
          </Link>
           </li>
    </div>
    </ul>
      </div>
    </div>
</nav>

  );
};
