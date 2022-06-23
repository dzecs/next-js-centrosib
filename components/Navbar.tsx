import Link from "next/link";

export const Navbar = (props: {}) => {
  return (
    <nav className="">
      <ul className="flex justify-end gap-3 pr-7 bg-blue-100 items-center h-16">
        <li className="">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <a>Registro</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contacto">
            <a>Contacto</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
