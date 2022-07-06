import Link from "next/link";

export const Navbar = (props: {}) => {
  return (
    <nav className="">
      <ul className="flex justify-end gap-3 pr-7 bg-white items-center h-16">
        <li className="">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/nosotros">
            <a>Nosotros</a>
          </Link>
        </li>
        <li>
          <Link href="/contacto">
            <a>Contacto</a>
          </Link>
        </li>
        <li className="">
          <Link href="/login">
            <a>Iniciar Sesión</a>
          </Link>
        </li>
        /
        <li>
          <Link href="/signup">
            <a>Registro</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
