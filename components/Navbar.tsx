import Link from "next/link";

export const Navbar = (props: {}) => {
  return (
    <nav className="">
      <ul className="flex justify-end gap-3 pr-7 bg-blue-100 items-center h-16">
        <li className="">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/signup">Registro</Link>
        </li>
      </ul>
    </nav>
  );
};
