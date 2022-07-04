import React from 'react'

export default function nosotros() {
    return (
    <div>
        <div className='container'>
            <div className='nosotros'>
                <h1> QUIÉNES SOMOS
                    Somos un grupo de odontólogos dedicados construir sonrisas,
                    unimos salud bucal, estética y calidad. 
                    Escuchamos tus expectativas y juntos planeamos el mejor tratamiento. 
                </h1>
            </div> 
            
            <h3>Odontología general - Ortodoncia - Implantes - Estética</h3>
            
            <div className='imagen1'>
                <img src="img/dentista7.jpg" />
                <img src="img/CentroSib-1-900x600.png" />
            </div>      
            
            
            <h2>
                Los orígenes de CentroSib se remontan al año 1950,
                cuando un grupo de prestigiosos profesionales de la Odontología se agrupan.
                Con la llegada del nuevo milenio, esta unión se potenció,
                generando relaciones de mutuo beneficio y optimizando sus prestaciones 
                a través de una gestión innovadora, eficiente y sustentable. 
                Esta sinergia ha consolidado a CentroSib como uno de los más
                importantes a nivel nacional en términos cuantitativos y cualitativos.
            </h2>
            
            
            <div className='imagen2'>
                <img src="img/CentroSib-2-900x600.png" />
            </div> 
            
            
            <h2>
                La trayectoria del CentroSib se transmite entre nuestros profecionales, 
                con el objetivo de brindar a sus pacientes una odontología de excelencia 
                y al mismo tiempo, como en las grandes ciudades del mundo,
                contar con todas las especialidades odontológicas en un mismo Centro,
                lo que facilita el trabajo interdisciplinario y brinda comodidad y
                ahorro de tiempo al paciente.
                TODO LO QUE EL PACIENTE NECESITA, EN DIAGNÓSTICO Y TRATAMIENTO ODONTOLOGICO,
                DE FORMA ÁGIL Y EN UN MISMO LUGAR
            </h2>
            
            <div className='imagen3'>
                
                <img src="img/CentroSib-3-900x600.png"/>
            </div> 
            <h2>                
                TODO LO QUE EL PACIENTE NECESITA, EN DIAGNÓSTICO Y TRATAMIENTO ODONTOLOGICO,
                DE FORMA ÁGIL Y EN UN MISMO LUGAR
            </h2>
            <div className='limpieza'>
                <div className='limpieza1'>
                    <h3>Tatamientos de limpieza</h3>
                    <img src="img/limpieza.jpg"/>
                </div>

                <div className='limpieza2'>
                    <h3>Mejorando la calidad de vida de nuestros pacientes</h3>
                    <img src="img/limpieza1.jpg"/>
                </div>
                
                <div className='limpieza3'>
                    <h3>Aplicando las últimas tecnicas en cada uno de los tatamientos</h3>
                    <img src="img/limpieza2.jpg"/>
                </div>
                
                <div className='limpieza4'>
                    <h3>Escuchando las necesidades de cada uno de nuestro pacientes</h3>
                    <img src="img/limpieza3.jpg"/>
                </div>
            </div>
            <div calassName='consultorio'>
                <h3>Nuestros consultorios</h3>
                <div className='consultorio__img1'>
                    <img src="img/consultorio1.jpg" />
                </div>
                <div className='consultorio__img2'>
                    <img src="img/consultorio2.jpg" />
                </div>
                <div className='consultorio__img3'>
                    <img src="img/consultorio3.jpg" />
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
                    <img src="img/ortodoncia4.jpg"/>
                </div>
                <div className='ortodoncia__'>
                    <h3>Ortodoncia en adultos</h3>
                    <img src="img/ortodoncia7.jpg"/>
                </div>
            </div>


            <div className='dentista'>
                <img src="img/dentista1.jpg"/>
                <img src="img/dentista2.jpg"/>
            </div>
            <div className='dentista'>
                <img src="img/dentista3.jpg"/>
                <img src="img/dentista5.jpg"/>
            </div>
            <div className='dentista'>   
                <img src="img/dentista6.jpg"/>
                
                <img src="img/dentista10.jpg"/>
            </div>
        </div>
        <style jsx>{`
            .container{
                margin-left:auto;
                margin-right:auto;
            }

            div{
                background:#E4FEE7;
            }

            div:hover{
                background:#EFFFEE;
                border:1px solid #333;
                border-radius:4px;
                transition:.3s;
            }

            h1 {
                font-size: 2.3em;
                line-height: 1.3em;
                margin: 15px;
                text-align: center;
                font-weight: 300;
            }

            h2 {
                font-size: 2.3em;
                line-height: 1.3em;
                margin: 15px;
                text-align: justify;
                font-weight: 300;
            }

            h3 {
                font-size: 2.3em;
                line-height: 1.3em;
                margin: 15px;
                text-align: justify;
                font-weight: 300;
            }

            h3:hover{
                font-size:2.5rem;
                transition:2s;
            }

            .parrafo1{
                background:#222;
            }
            
            .dentista{
                background:#CEF2CC;
                display:inline-block;
                border-radius:15px;
                margin:2px;
            }

            img{
                
                display:inline-block;
                border-radius:10px;
                margin:10px;
                width:450px;
                height:300px;
                object-fit: cover;
            }
            
        `}</style>
    </div>
    
    )
}
