/**
 * @file LabeledInput.tsx
 * @author John A Cruz Merced
 * @date 2025-11-02
 * @email cruzmercedjohn@gmail.com
 * @copyright Copyright (c) 2025
 */

import { HTMLInputTypeAttribute } from 'react';

function LabeledInput({
	size = 'medium',
	color,
	label,
	type = 'text',
	children
}: {
	size?: string;
	color?: string;
	label?: string;
	type?: HTMLInputTypeAttribute;
	children?: string;
}) {

	return (
		<>
			<label htmlFor='' className={`labelInput-view_${size}`}>
				{label}
				<input
					type={type}
					className={`labelInput-input_${size}`}
					value={children}
				/>
			</label>
		</>
	);
}

export default LabeledInput;