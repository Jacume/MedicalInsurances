/**
 * @file LabeledInput.tsx
 * @author John A Cruz Merced
 * @date 2025-11-02
 * @email cruzmercedjohn@gmail.com
 * @copyright Copyright (c) 2025
 */

import { HTMLInputTypeAttribute, type ChangeEventHandler} from 'react';
import './labeledInput.css';

function LabeledInput({
	size = 'medium',
	color,
	label,
	type = 'text',
	children,
	onChange
}: {
	size?: string;
	color?: string;
	label?: string;
	type?: HTMLInputTypeAttribute;
	children?: string;
	onChange?: ChangeEventHandler
}) {
	return (
		<label className={`labeledInput-view labeledInput-view_${size} labeledInput-view_${color}`}>
			<span className={`labeledInput-label labeledInput-label_${size} labeledInput-label_${color}`}>{label}</span>
			<input
				type={type}
				className={`labeledInput-input labeledInput-input_${size} labeledInput-input_${color}`}
				value={children}
				onChange={onChange}
			/>
		</label>
	);
}

export default LabeledInput;