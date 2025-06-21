import React, { Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Header = React.lazy(() => import('header/Header'));
const Content = React.lazy(() => import('content/Content'));

type Todo = { id: number; text: string };
const LS_KEY = 'todos-mf';

function App() {
	const [todos, setTodos] = useState<Todo[]>(() => {
		try {
			const raw = localStorage.getItem(LS_KEY);
			return raw ? (JSON.parse(raw) as Todo[]) : [];
		} catch {
			return [];
		}
	});

	useEffect(() => {
		localStorage.setItem(LS_KEY, JSON.stringify(todos));
	}, [todos]);

	return (
		<div className="min-h-screen flex items-center justify-center bg-blue-700">
			<div className="bg-white p-10 rounded-xl shadow-lg w-[480px]">
				<Suspense fallback={<div>Loading header…</div>}>
					<Header
						onAdd={(text) => setTodos((prev) => [...prev, { id: Date.now(), text }])}
					/>
				</Suspense>

				{/* Todo list */}
				<Suspense fallback={<div>Loading list…</div>}>
					<Content
						todos={todos}
						onDelete={(id) => setTodos((prev) => prev.filter((t) => t.id !== id))}
					/>
				</Suspense>
			</div>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById('app')!).render(<App />);
