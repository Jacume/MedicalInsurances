/**
 * @file Contact.tsx
 * @author John A Cruz Merced
 * @date 2025-11-02
 * @email cruzmercedjohn@gmail.com
 * @copyright Copyright (c) 2025
 */

import LabeledInput from '../../components/labeledInput/LabeledInput.tsx';
import './contact.css';

function Contact() {
	/** @type FormEventHandler<HTMLFormElement> */
	const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		console.log('asdf:', e);
	};
	return (
		<form className={`contact-view`} onSubmit={onSubmit}>
			<LabeledInput label='Nombre'></LabeledInput>
			<LabeledInput label='Segundo Nombre'></LabeledInput>
			<LabeledInput label='Apellido'></LabeledInput>
			<LabeledInput label='Segundo Apellido'></LabeledInput>
			<LabeledInput label='Número de Teléfono' type='tel'></LabeledInput>
			<LabeledInput label='Email'></LabeledInput>
			<button type='submit'></button>
		</form>
	);
}

export default Contact;
