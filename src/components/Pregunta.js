import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {
	//Define el state
	const [ cantidad, seftcantidad ] = useState(0);
	const [ error, setfError ] = useState(false);

	//Funcion que lee el presupuesto
	const definirPresupuesto = (e) => {
		seftcantidad(parseInt(e.target.value));
	};

	//Submit para definir presupuesto
	const agregarPresupuesto = (e) => {
		e.preventDefault();

		//Validar
		if (cantidad < 0 || isNaN(cantidad)) {
			setfError(true);
			return;
		}

		//Si se pasa la validacion
		setfError(false);
		guardarPresupuesto(cantidad);
		guardarRestante(cantidad);
		actualizarPregunta(false);
	};

	return (
		<Fragment>
			<h2>Coloca tu presupuesto</h2>

			{error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}

			<form onSubmit={agregarPresupuesto}>
				<input
					type="number"
					className="u-full-width"
					placeholder="Colaca tu presupuesto"
					onChange={definirPresupuesto}
				/>

				<input type="submit" className="button-primary u-full-width" value="Definir Presupuesto" />
			</form>
		</Fragment>
	);
};

export default Pregunta;
