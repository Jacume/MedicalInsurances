/**
 * @file Contact.tsx
 * @author John A Cruz Merced
 * @date 2025-11-02
 * @email cruzmercedjohn@gmail.com
 * @copyright Copyright (c) 2025
 */

import { useState, type FormEventHandler } from 'react';
import LabeledInput from '../../components/labeledInput/LabeledInput.tsx';
import './contact.css';

function Contact() {
	const [firstName, setFirstName] = useState('');
	const [secondName, setSecondName] = useState('');
	const [firstLastName, setLastFirstName] = useState('');
	const [secondLastName, setSecondLastName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		console.log(':', firstName, secondName, firstLastName, secondLastName, phoneNumber, email);
	};
	return (
		<form className={`contact-view`} onSubmit={onSubmit}>
			<LabeledInput label='Nombre' onChange={(e) => {setFirstName(e.target.nodeValue ?? '')}}>{firstName}</LabeledInput>
			<LabeledInput label='Segundo Nombre' onChange={(e) =>{setSecondName(e.target.nodeValue ?? '');}}>{secondName}</LabeledInput>
			<LabeledInput label='Apellido' onChange={(e) =>{setLastFirstName(e.target.nodeValue ?? '');}}>{firstLastName}</LabeledInput>
			<LabeledInput label='Segundo Apellido' onChange={(e) => {setSecondLastName(e.target.nodeValue ?? '');}}>{secondLastName}</LabeledInput>
			<LabeledInput label='Número de Teléfono' type='tel' onChange={(e) => {setPhoneNumber(e.target.nodeValue ?? '');}}>{phoneNumber}</LabeledInput>
			<LabeledInput label='Email' onChange={(e) => {setEmail(e.target.nodeValue ?? '');}}>{email}</LabeledInput>
			<button type='submit'>Someter</button>
		</form>
	);
}

export default Contact;
