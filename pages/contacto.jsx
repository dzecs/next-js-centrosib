import React from "react";

export default function contacto() {
  return (
    <div className="flex flex-col">
      <div className="">contacto</div>
      <div className="text-xl font-bold">
        Av. Estrugamou 250, Venado Tuerto, Santa Fe.
      </div>
      <div className="grid grid-cols-2 border-4 w-screen">
        <div>
          <form className="" action="#" method="POST">
            <input
              className="border-black border-[1px]"
              type="text"
              name="Nombre"
              placeholder="Ingrese su nombre"
            />

            <input
              className="border-black border-[1px]"
              type="text"
              name="Email"
              placeholder="Ingrese su Email"
            />

            <input
              className="border-black border-[1px]"
              type="text"
              name="Asunto"
              placeholder="Motivo de la consulta"
            />

            <textarea
              className="border-black border-[1px]"
              name="Mensaje"
              placeholder="Ingrese su mensaje"
            ></textarea>

            <button className="bg-blue-800 w-24 border-lime-700 border-2 text-white">
              Enviar
            </button>
          </form>
          <h2>
            <strong>3462-518748</strong>
          </h2>
          <h2>
            <strong>
              <a href="centrocib@gmail.com" className="email-contacto">
                centrocib@gmail.com
              </a>
            </strong>
          </h2>
          <h3>Horarios</h3>
          <p>Lunes a Viernes: 08:00 a 20:00</p>
          <p>Sabado, Domingos y Feriados: GUARDIA</p>
          <p></p>
        </div>
        <div>
          <iframe
            className="mapa"
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.6914545667732!2d-61.972224555328275!3d-33.74279380654516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c8649fbe5239df%3A0x31676de26d740cdf!2sInstituto%20de%20Educaci%C3%B3n%20Superior%20nro.%207%20(ex%20Normal)!5e0!3m2!1ses-419!2sar!4v1654873509381!5m2!1ses-419!2sar"
            width="76%"
            height="369px"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
