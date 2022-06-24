import React from "react";

export default function contacto() {
  return (
    <div id="contacto">
      <div class="contacto">
        <h1>Contacto</h1>
      </div>
      <div id="nav">
        <p class="texto-contacto">
          <strong class="direccion">
            <img class="geoCerca-ico" src={""} />
            Av. Estrugamou 250, Venado Tuerto, Santa Fe.
          </strong>
        </p>
      </div>
      <div id="contenido">
        <div id="izquierda">
          <form className="form" action="#" method="POST">
            <input type="text" name="Nombre" placeholder="Ingrese su nombre" />

            <input type="text" name="Email" placeholder="Ingrese su Email" />

            <input
              type="text"
              name="Asunto"
              placeholder="Motivo de la consulta"
            />

            <textarea
              name="Mensaje"
              placeholder="Ingrese su mensaje"
            ></textarea>

            <button className="boton-enviar">Enviar</button>
          </form>

          <img class="whatsapp-ico" src={""} />
          <h2>
            <strong>3462-518748</strong>
          </h2>
          <h2>
            <img class="mensaje-ico" src={""} />

            <strong>
              <a href="centrocib@gmail.com" class="email-contacto">
                centrocib@gmail.com
              </a>
            </strong>
          </h2>
          <h3>Horarios</h3>

          <p>Lunes a Viernes: 08:00 a 20:00</p>
          <p>Sabado, Domingos y Feriados: GUARDIA</p>
          <p></p>
        </div>
        <div id="derecha">
          <iframe
            className="mapa"
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.6914545667732!2d-61.972224555328275!3d-33.74279380654516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c8649fbe5239df%3A0x31676de26d740cdf!2sInstituto%20de%20Educaci%C3%B3n%20Superior%20nro.%207%20(ex%20Normal)!5e0!3m2!1ses-419!2sar!4v1654873509381!5m2!1ses-419!2sar"
            width="76%"
            height="369px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div id="footer">
        <footer></footer>
      </div>
      <style jsx>{`
        #nav {
          height: 40%;
          margin-bottom: 10px;
        }
        #contenido {
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 50%;
          width: 100%;
        }
        #izquierda {
          margin-top: 5px;
          text-align: center;
          width: 100%;
        }
        #derecha {
          margin-top: 5px;
          text-align: center;
          width: 100%;
          height: 100%;
        }
        #footer {
        }
        h1 {
          font-family: var(--body-font);
          color: rgb(173, 15, 15) !important;
          opacity: 1;
          margin-left: 40%;
          text-align: left;
        }

        .texto-contacto {
          text-align: center;
        }

        .email-contacto {
          color: #000;
          text-decoration: none;
        }
        .email-contacto:hover {
          text-decoration: underline;
        }

        .form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          margin-right: 2rem;
        }
        /* input[type='text'],
      input[type='Email'] {
        border: 1px solid #ccc;
        padding: 5px;
        border-radius: 5px;
        margin: 5px;
        margin-right: auto;
      } */
        input {
          width: 329px;
          height: 30px;
          padding: 10px;
          margin-top: 10px;
        }
        textarea {
          width: 329px;
          border: 1px solid #ccc;
          padding: 5px;
          border-radius: 5px;
          margin-top: 10px;
        }
        .boton-enviar {
          width: 5rem;
          padding: 10px;
          margin-top: 10px;
          background: #0489b1;
          color: white;
          border: 1px solid #048;
          border-radius: 5px;
          text-align: center;
        }
        #contacto {
          /*  background-image: url('../../Assets/img/dentistaAbajo.jpg');*/
          min-height: 100vh;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
          /* position: absolute; */
        }
        /* #Mapa {
        width: 50%;
        height: auto;
        overflow: hidden;
        text-align: center;
        margin-top: 20%;
        position: absolute;
        border-radius: 20px;
      } */
        .mapa {
          display: flex;
          align-items: flex-start;
          margin-left: 2rem;
          border-radius: 5px;
          border: 2px rgb(196, 194, 194) solid;
        }
        .mensaje-ico {
          width: 6%;
          height: 6%;
          position: absolute;
          text-align: center;
        }
        .whatsapp-ico {
          width: 6%;
          height: 6%;
          position: absolute;
          text-align: center;
        }
        .geoCerca-ico {
          width: 4%;
          height: 4%;
          position: absolute;
          margin-left: 32%;
        }
        h2 {
          color: #000;
        }
        h3 {
          border-top: 20px;
        }
      `}</style>
    </div>
  );
}
