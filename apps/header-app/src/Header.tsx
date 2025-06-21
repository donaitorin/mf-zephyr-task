import { useState, FormEvent } from 'react';
import './index.css';

export interface HeaderProps {
	onAdd: (text: string) => void;
}

export default function Header({ onAdd }: HeaderProps) {
	const [input, setInput] = useState('');

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		const trimmed = input.trim();
		if (trimmed) {
			onAdd(trimmed);
			setInput('');
		}
	}

	return (
		<form onSubmit={handleSubmit} className="flex gap-3 mb-6 max-w-xl w-full">
			<input
				type="text"
				placeholder="Add a task…"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				className="flex-1 px-4 py-3 rounded-md outline-none ring-2 ring-blue-400/40 focus:ring-blue-500"
			/>
			<button
				type="submit"
				className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 rounded-md cursor-pointer"
			>
				Add
			</button>
		</form>
	);
}
