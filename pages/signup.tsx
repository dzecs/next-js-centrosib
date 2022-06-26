import Link from "next/link";
import React, { useEffect, useRef } from "react";

export default function Signup() {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //Scrolls to bottom to hide the NavBar when login in
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="h-screen bg-slate-800 flex flex-row justify-center items-center">
      <section className="w-96 h-[36.5rem] bg-white rounded-lg mx-4">
        <h1 className="text-center text-gray-400 mt-24 mb-8 text-xl">
          CENTROSIB
        </h1>
        <h2 className="text-center font-bold text-2xl mb-4">Registro</h2>
        <p className="text-gray-400 text-center text-sm mb-7">
          Ingresá tu usuario y contraseña debajo
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
              className="bg-slate-100 rounded-md w-11/12 pl-3 h-9"
            />
          </div>

          <div className="flex flex-col items-center mb-4">
            <label
              htmlFor="password"
              className="flex justify-between w-11/12 text-xs mb-2"
            >
              CONTRASEÑA
            </label>
            <input
              type="password"
              placeholder="Contraseña"
              id="password"
              required
              className="bg-slate-100 rounded-md w-11/12 pl-3 h-9"
            />
          </div>
          <div className="flex flex-col items-center mb-4">
            <label
              htmlFor="repeat-password"
              className="flex justify-between w-11/12 text-xs mb-2"
            >
              REPETIR CONTRASEÑA
            </label>
            <input
              type="password"
              placeholder="Contraseña"
              id="repeat-password"
              required
              className="bg-slate-100 rounded-md w-11/12 pl-3 h-9"
            />
          </div>

          <div className="w-full flex flex-col items-center text-center">
            <button className="rounded-md my-4 h-9 w-11/12 bg-green-300">
              Registrarse
            </button>
          </div>
        </form>
        <div className="flex justify-between mx-5 text-sm">
          <p className="text-gray-400">Ya tenés una cuenta? Iniciá sesión.</p>
          <button>
            <Link href="/login">
              <a className="text-blue-300 hover:text-blue-500">
                Iniciar sesión
              </a>
            </Link>
          </button>
        </div>
      </section>
      <div ref={bottomRef} />
    </div>
  );
}
