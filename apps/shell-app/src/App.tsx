import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

/* ----------  lazy federated imports  ---------- */
const Header = React.lazy(() => import('header/Header'));
const Content = React.lazy(() => import('content/Content'));

function App() {
	return (
		<>
			{/* Header remote */}
			<Suspense fallback={<div className="p-4">Loading header…</div>}>
				<Header />
			</Suspense>

			{/* Shell body */}
			<main className="p-8 text-3xl mx-auto max-w-6xl">
				<div>Name: mf-zephyr-task – Shell</div>
				<div>Framework: React 19</div>
			</main>

			{/* Content remote */}
			<Suspense fallback={<div className="p-4">Loading content…</div>}>
				<Content />
			</Suspense>
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(<App />);
