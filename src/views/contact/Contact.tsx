/**
 * @file Contact.tsx
 * @author John A Cruz Merced
 * @date 2025-11-02
 * @email cruzmercedjohn@gmail.com
 * @copyright Copyright (c) 2025
 */

import { type FormEventHandler } from 'react';
import LabeledInput from '../../components/labeledInput/LabeledInput.tsx';
import './contact.css';
import { assert, uuidv4 } from '../../utilities/helpers/utils.ts';

function Contact() {
	const firstName = uuidv4();
	const secondName = uuidv4();
	const firstLastName = uuidv4();
	const secondLastName = uuidv4();
	const phoneNumber = uuidv4();
	const email = uuidv4();

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		assert(e.target instanceof HTMLFormElement, 'target is not a <form>');
		const formData = new FormData(e.target);
		console.log('firstName: ', formData.get(firstName));
	};
	return (
		<form className={`contact-view`} onSubmit={onSubmit}>
			<LabeledInput label='Nombre' name={firstName}></LabeledInput>
			<LabeledInput label='Segundo Nombre' name={secondName}></LabeledInput>
			<LabeledInput label='Apellido' name={firstLastName}></LabeledInput>
			<LabeledInput label='Segundo Apellido' name={secondLastName}></LabeledInput>
			<LabeledInput label='Número de Teléfono' type='tel' name={phoneNumber}></LabeledInput>
			<LabeledInput label='Email' name={email}></LabeledInput>
			<button type='submit'>Someter</button>
		</form>
	);
}

export default Contact;
