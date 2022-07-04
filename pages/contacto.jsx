import React from "react";

export default function contacto() {
  return (
    <div className="flex flex-col">
      <div className="text-xl font-bold text-center" >
        Av. Estrugamou 250, Venado Tuerto, Santa Fe.
      </div>
      <div className="grid grid-cols-2 border-4 w-screen">
        <div className="flex flex-col  mr-6">
          <div className="w-full mt-2" >
          <form className="flex flex-col gap-2  items-end" action="#" method="POST">
            
            <input
              className="border-slate-900 [1px] w-1/2 bg-slate-200"
              type="text"
              name="Nombre"
              placeholder="Ingrese su nombre"
            />

            <input
              className="border-slate-900 [1px] w-1/2 bg-slate-200"
              type="text"
              name="Email"
              placeholder="Ingrese su Email"
            />

            <input
              className="border-slate-900 [1px] w-1/2 bg-slate-200"
              type="text"
              name="Asunto"
              placeholder="Motivo de la consulta"
            />

            <textarea
              className="border-slate-900 [1px] w-1/2 bg-slate-200"
              name="Mensaje"
              placeholder="Ingrese su mensaje"
            ></textarea>

            <button className="bg-blue-800 w-24 border-2 text-white">
              Enviar
            </button>
          
          </form>
          </div>
          <div className="flex flex-col gap-2  items-end w-full">
          <h2 className="mt-5">
            <strong>3462-518748</strong>
          </h2>
          <h2 className="">
            <strong>
              <a href="centrocib@gmail.com">
                centrocib@gmail.com
              </a>
            </strong>
          </h2>
          </div>
          <div className="mt-3 flex flex-col gap-2  items-end w-full">
          <h3 className=""> Horarios</h3>
          <p>Lunes a Viernes: 08:00 a 20:00</p>
          <p>Sabado, Domingos y Feriados: GUARDIA</p>
          </div>
        </div>
        <div>
          <iframe
            className="mt-2"
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
