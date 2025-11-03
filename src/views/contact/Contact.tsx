/**
 * @file Contact.tsx
 * @author John A Cruz Merced
 * @date 2025-11-02
 * @email cruzmercedjohn@gmail.com
 * @copyright Copyright (c) 2025
 */

import LabeledInput from '../../components/labeledInput/LabeledInput.tsx';

function Contact() {
	return (
		<>
			<LabeledInput label='Nombre'></LabeledInput>
			<LabeledInput label='Segundo Nombre'></LabeledInput>
			<LabeledInput label='Apellido'></LabeledInput>
			<LabeledInput label='Segundo Apellido'></LabeledInput>
			<LabeledInput label='Número de Teléfono' type='tel'></LabeledInput>
			<LabeledInput label='Email'></LabeledInput>
		</>
	);
}

export default Contact;
