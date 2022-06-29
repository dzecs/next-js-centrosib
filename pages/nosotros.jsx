import React from 'react'
import Image from 'next/image'

export default function Nosotros() {
	return (
		<div>
			<div className='nosotros'> Sobre nosotros</div>
			<h1>odontologia general
				ortodoncia
				implantes
				estetica
			</h1>
			<div className='imagen1'><Image src="/img/CentroSib-1-900x600.png" alt="" width={300} height={200} /> </div>
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
			<div className='imagen2'><Image src="/img/CentroSib-2-900x600.png" alt="" width={300} height={200} /> </div>
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
			<div className='imagen3'><Image src="/img/CentroSib-3-900x600.png" alt="" width={300} height={200} /> </div>
			<div className='parrafo3'>
				TODO LO QUE EL PACIENTE NECESITA, EN DIAGNÓSTICO Y TRATAMIENTO ODONTOLOGICO,
				DE FORMA ÁGIL Y EN UN MISMO LUGAR
			</div>
			<div className='imagen4'><Image src="/img/CentroSib-4-900x600.png" alt="" width={300} height={200} /> </div>
			<div className='imagen5'><Image src="/img/ortodoncia5.jpg" alt="" width={300} height={200} /> </div>

			<style jsx>{`
        .parrafo1{
            background:red;

        }


        `}</style>
		</div>

	)
}
