import React, { useRef, useEffect } from "react";
import Link from "next/link";

export default function Login() {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //Scrolls to bottom to hide the NavBar when login in
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="h-screen bg-slate-800 flex flex-row justify-center items-center">
      <section className="w-96 h-[32rem] bg-white rounded-lg mx-4">
        <h1 className="text-center text-gray-400 mt-24 mb-8 text-xl">
          CENTROSIB
        </h1>
        <h2 className="text-center font-bold text-2xl mb-4">
          Inicio de Sesión
        </h2>
        <p className="text-gray-400 text-center text-sm mb-7">
          Ingresá tu contraseña y usuario debajo
        </p>
        <form
          action="
  "
        >
          <div className="flex flex-col items-center text-start mb-4">
            <label htmlFor="user" className="w-11/12 text-xs mb-2 ">
              USUARIO
            </label>
            <input
              type="text"
              placeholder="Usuario"
              id="user"
              required
              className="bg-slate-100 rounded-md w-11/12 placeholder:pl-3 h-9"
            />
          </div>

          <div className="flex flex-col items-center">
            <label
              htmlFor="password"
              className="flex justify-between w-11/12 text-xs mb-2"
            >
              CONTRASEÑA
              <button>
                <Link href={"/"}>
                  <a className="text-gray-400 text-right hover:text-blue-300">
                    Olvidaste tu contraseña?
                  </a>
                </Link>
              </button>
            </label>
            <input
              type="text"
              placeholder="Contraseña"
              id="password"
              required
              className="bg-slate-100 rounded-md w-11/12 placeholder:pl-3 h-9"
            />
          </div>
          <div className="w-full flex flex-col items-center text-center">
            <button className="rounded-md my-4 h-9 w-11/12 bg-blue-300">
              Iniciar Sesión
            </button>
          </div>
        </form>
        <div className="flex justify-between mx-5 text-sm">
          <p className="text-gray-400">No tenés una cuenta? Registrate</p>
          <button>
            <Link href="/signup">
              <a className="text-blue-300 hover:text-blue-500">Registrarse</a>
            </Link>
          </button>
        </div>
      </section>
      <div ref={bottomRef} />
    </div>
  );
}
