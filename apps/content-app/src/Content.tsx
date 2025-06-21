import './index.css';

export interface Todo {
	id: number;
	text: string;
}

export interface ContentProps {
	todos: Todo[];
	onDelete: (id: number) => void;
}

export default function Content({ todos, onDelete }: ContentProps) {
	return (
		<ul className="space-y-3 max-w-xl w-full">
			{todos.map((t) => (
				<li
					key={t.id}
					className="bg-sky-200 rounded-md px-4 py-3 flex justify-between items-center"
				>
					<span>{t.text}</span>

					<button
						onClick={() => onDelete(t.id)}
						className="bg-indigo-500 hover:bg-indigo-900 text-white p-2 rounded-md cursor-pointer"
						title="Delete"
					>
						🗑
					</button>
				</li>
			))}
		</ul>
	);
}
