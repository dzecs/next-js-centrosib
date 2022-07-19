import React from 'react'

export default function nosotros() {
    return (
    <div>
        <div className='nosotros' >
            <h1> Quiénes somos</h1> 
                <h4>
                Somos un grupo de odontólogos dedicados a construir sonrisas saludables,
                uniendo salud bucal, estética y calidad. 
                Escuchamos tus expectativas y juntos planeamos el mejor tratamiento.
                </h4>
            </div>
        
        <div className='container'>
            
            
            <h2>Odontología general - Ortodoncia - Implantes - Estética</h2>
            
            <div className='imagen1'>
                <img src="img/dentista7.jpg" />
                <img src="img/CentroSib-1-900x600.png" />
                <img src="img/dentista6.jpg"/>
            </div>      
            
            <div className='parrafo1'>
                <p>
                    Los orígenes de CentroSib se remontan al año 1950,
                    cuando un grupo de prestigiosos profesionales de la Odontología se agrupan.
                    Con la llegada del nuevo milenio, esta unión se potenció,
                    generando relaciones de mutuo beneficio y optimizando sus prestaciones 
                    a través de una gestión innovadora, eficiente y sustentable. 
                    Esta sinergia ha consolidado a CentroSib como uno de los más
                    importantes a nivel nacional en términos cuantitativos y cualitativos.
                </p>
            </div>
            
            <div className='imagen2'>
                <img src="img/CentroSib-2-900x600.png" />
                <img src="img/dentista3.jpg"/>
                <img src="img/dentista5.jpg"/>
            </div> 
            
            <div className='parrafo1'>
                <p>
                    La trayectoria del CentroSib se transmite entre nuestros profesionales, 
                    con el objetivo de brindar a sus pacientes una odontología de excelencia 
                    y al mismo tiempo, como en las grandes ciudades del mundo,
                    contar con todas las especialidades odontológicas en un mismo Centro,
                    lo que facilita el trabajo interdisciplinario y brinda comodidad y
                    ahorro de tiempo al paciente.
                </p>
            </div>
            
            <div className='imagen3'>
                <img src="img/CentroSib-3-900x600.png"/>
                <img src="img/dentista10.jpg"/>
                <img src="img/dentista2.jpg"/>
            </div> 
            <div className='color'><h3>Nuestros consultorios</h3></div>
            <div className='consultorio'>
                <img src="img/consultorio1.jpg" />
                <img src="img/consultorio2.jpg" />
                <img src="img/consultorio4.jpg" />                
            </div>
            <div className='parrafo2'>
                <p>                
                TODO LO QUE EL PACIENTE NECESITA, EN DIAGNÓSTICO Y TRATAMIENTO ODONTOLÓGICO,
                DE FORMA ÁGIL Y EN UN MISMO LUGAR
                </p>
            </div>
            
            <div className='limpieza'>
                <div className='limpieza1'>
                    <img src="img/limpieza.jpg"/>
                    <h3>Tatamientos de limpieza</h3>
                </div>
                <div className='limpieza1'>
                    <img src="img/ortodoncia4.jpg" />
                    <h3>Mejorando la calidad de vida</h3>
                </div>
                <div className='limpieza2'>
                    <img src="img/limpieza2.jpg"/>
                    <h3>Aplicando las últimas tecnicas en cada uno de los tatamientos</h3>
                </div>
                <div className='limpieza2'>
                    <img src="img/limpieza3.jpg"/>
                    <h3>Escuchando las necesidades de cada uno de nuestro pacientes</h3>
                </div>
            </div>
            <div className='ortodoncia'>
                <div className='ortodoncia__'>
                    <h3>Ortodoncia en niños</h3>
                    <img src="img/ortodoncia5.jpg" />
                    <img src="img/ortodoncia6.jpg" />
                    <img src="img/ortodoncia9.jpg" />
                </div>
                <div className='ortodoncia__'>
                    <h3>Ortodoncia en adolescentes</h3>
                    <img src="img/ortodoncia10.jpg"/>
                </div>
                <div className='ortodoncia__'>
                    <h3>Ortodoncia invisible</h3>
                    <img src="img/dentista1.jpg"/>
                </div>
                <div className='ortodoncia__'>
                    <h3>Ortodoncia en adultos</h3>
                    <img src="img/ortodoncia7.jpg"/>
                </div>
            </div>

        </div>
        <style jsx>{`

            .parrafo1 {
                padding:150px;
                font-size: 1.8em;
            }

            .parrafo2 {
                font-size: 1.8em;
                margin-top:100px;
                margin-bottom:100px;
            }

            .nosotros {
                background:#07575b;
                color: #fff;
                text-align:center;
                padding:35px;
            }


            .container 
                margin-left:auto;
                margin-right:auto;
                text-align:center;
                align-items: center;
            }

            {/* 
            div:hover 
                border:1px solid #333;
                border-radius:4px;
                transition:1.5s;

            }
             */}

            h1 {
                font-size: 4em;
                line-height: 1.3em;
                padding-top: 10px;
                padding-bottom: 10px;
                text-align: center;
                font-weight: 300px;
            }

            h2 {
                font-size: 2.8em;
                line-height: 1.3em;
                margin: 15px;
                text-align: center;
                padding: 30px;
            }
            
            h3 {
                padding-top:50px;
                padding-bottom:50px;
                font-size: 2em;
                line-height: 1.3em;
                text-align:center;
            }
            
            h4 {
                font-size:1.8em;
                max-width:1200px;
                margin:0 auto;
            }

            {/*  
              h3:hover{
                  font-size:2.5rem;
                  transition:2s;
              }
            */}
            
            .dentista{
                display:inline-block;
                border-radius:15px;
                margin:2px;
            }
            
            .ortodoncia {
                display:inline-block;
                border-radius:15px; 
            }
            
            img{   
                display:inline-block;
                border-radius:10px;
                margin:10px;
                width:380px;
                height:290px;
                object-fit: cover;
            }
            
            .imagen3 
                margin-bottom:150px;
            }
            
            .limpieza1 
                display:inline-block;
                width:600px;
                height:400px;
                object-fit: contain;
            }
            
            .limpieza2 
                display:inline-block;
                width:600px;
                padding-top:30px;
                margin-bottom:10vh;
                
            }
            .limpieza2 h3 {    
                width:450px;
                margin:0 auto;
                
            }

            .consultorio {
                padding-bottom:20px;
            }
            
            .ortodoncia {
                margin-bottom:10%;
            }
            
            .color {
                color: #fff;
                background:#07575b;
                margin-bottom:30px;
            }
        
        `}</style>
    </div>
    )
}
