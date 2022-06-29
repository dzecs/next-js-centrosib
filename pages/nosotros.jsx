import React from 'react'

export default function nosotros() {
    return (
    <div>
        <div className='container'>
            <div className='nosotros'> Sobre nosotros</div> 
            <h1> QUIÉNES SOMOS
                Somos un grupo de odontólogos dedicados construir sonrisas,
                unimos salud bucal, estética y calidad. 
                Escuchamos tus expectativas y juntos planeamos el mejor tratamiento. 
            </h1>
            <div>
                <ul>
                    <li>Odontologia general</li>
                    <li>Ortodoncia</li>
                    <li>Implantes</li>
                    <li>Estética</li>
                </ul>
            </div>
            <div className='imagen1'><img src="img/CentroSib-1-900x600.png" alt=""width={300} height={200} /> </div>      
            <div className='parrafo1'>
                <h3>Los orígenes de CentroSib se remontan al año 1950,
                    cuando un grupo de prestigiosos profesionales de la Odontología se agrupan.
                    Con la llegada del nuevo milenio, esta unión se potenció,
                    generando relaciones de mutuo beneficio y optimizando sus prestaciones 
                    a través de una gestión innovadora, eficiente y sustentable. 
                    Esta sinergia ha consolidado a CentroSib como uno de los más
                    importantes a nivel nacional en términos cuantitativos y cualitativos.
                </h3>
            </div>
            <div className='imagen2'><img src="img/CentroSib-2-900x600.png" alt=""width={300} height={200} /> </div> 
            <div className='parrafo2'>
                <h3>
                La trayectoria del CentroSib se transmite entre nuestros profecionales, 
                con el objetivo de brindar a sus pacientes una odontología de excelencia 
                y al mismo tiempo, como en las grandes ciudades del mundo,
                contar con todas las especialidades odontológicas en un mismo Centro,
                lo que facilita el trabajo interdisciplinario y brinda comodidad y
                ahorro de tiempo al paciente.
                TODO LO QUE EL PACIENTE NECESITA, EN DIAGNÓSTICO Y TRATAMIENTO ODONTOLOGICO,
                DE FORMA ÁGIL Y EN UN MISMO LUGAR
                </h3>
            </div>
            <div className='imagen3'>
                <img src="img/CentroSib-3-900x600.png" alt=""width={300} height={200}/>
            </div> 
            <div className='parrafo3'>                
                TODO LO QUE EL PACIENTE NECESITA, EN DIAGNÓSTICO Y TRATAMIENTO ODONTOLOGICO,
                DE FORMA ÁGIL Y EN UN MISMO LUGAR
            </div>
            <h3>Tatamientos de limpieza</h3>
            <div className='limpieza'>
                <img src="img/limpieza.jpg" alt=""width={300} height={200}/>
            </div>
            <h3>Mejorando la calidad de vida de nuestros pacientes</h3>
            <div className='limpieza'>
                <img src="img/limpieza1.jpg" alt=""width={300} height={200}/>
            </div>
            <h3>Aplicando las últimas tecnicas en cada uno de los tatamientos</h3>
            <div className='limpieza'>
                <img src="img/limpieza2.jpg" alt=""width={300} height={200}/>
            </div>
            <h3>Escuchando las necesidades de cada uno de nuestro pacientes</h3>
            <div className='limpieza'>
                <img src="img/limpieza3.jpg" alt=""width={300} height={200}/>
            </div>
            <h3>nuestros consultorios</h3>
            <div className='imagen4'>
                <img src="img/consultorio1.jpg" alt=""width={300} height={200}/>
            </div>
            <h3>nuestros consultorios</h3>
            <div className='imagen4'>
                <img src="img/consultorio2.jpg" alt=""width={300} height={200}/>
            </div>
            <h3>nuestros consultorios</h3>
            <div className='imagen4'>
                <img src="img/consultorio3.jpg" alt=""width={300} height={200}/>
            </div>
            <h3>Ortodoncia en niños</h3>
            <div className='ortodoncia'>
                <img src="img/ortodoncia5.jpg" alt=""width={300} height={200}/>
            </div>
            <h3>Ortodoncia en niños</h3>
            <div className='ortodoncia'>
                <img src="img/ortodoncia4.jpg" alt=""width={300} height={200}/>
            </div>
            <h3>Ortodoncia en niños</h3>
            <div className='ortodoncia'>
                <img src="img/ortodoncia6.jpg" alt=""width={300} height={200}/>
            </div>
            <h3>Ortodoncia en niños</h3>
            <div className='ortodoncia'>
                <img src="img/ortodoncia7.jpg" alt=""width={300} height={200}/>
            </div>
            <h3>Ortodoncia en niños</h3>
            <div className='ortodoncia'>
                <img src="img/ortodoncia9.jpg" alt=""width={300} height={200}/>
            </div>
            <h3>Ortodoncia en niños</h3>
            <div className='ortodoncia'>
                <img src="img/ortodoncia10.jpg" alt=""width={300} height={200}/>
                </div>
            <div className='dentista2'>
                <img src="img/dentista1.jpg" alt=""width={300}height={200}/>
                <img src="img/dentista2.jpg" alt=""width={300} height={200}/>
            </div>
            <div className='dentista'>
                <div className="dentista3"><img src="img/dentista3.jpg" alt=""width={300} height={200}/></div>
                <div className="dentista3"><img src="img/dentista5.jpg" alt=""width={300} height={200}/></div> 
                <div className="dentista3"><img src="img/dentista6.jpg" alt=""width={300} height={200}/></div> 
                <div className="dentista3"><img src="img/dentista7.jpg" alt=""width={300} height={200}/></div>
                <div className="dentista3"><img src="img/dentista10.jpg" alt=""width={300}/></div>
            </div>
        </div>
        <style jsx>{`
        .container{
            margin-left:auto;
            margin-right:auto;
            
        }
        div:hover{
            border:4px solid #333;
            padding:2px;
            border-radius:4px;
            transition:.3s;
        }
        .nosotros{
            text-align:center;
        }
        .parrafo1{
            background:red;
        }
        .dentista{
            display: flex;        
        }
        .dentista2{
            background:#555;
            display: flex;
        }
        
        .dentista3{
            
            margin:5px;
        }
        .ortodoncia:hover{
            width:600xp;

        }

        `}</style>
    </div>
    
    )
}
