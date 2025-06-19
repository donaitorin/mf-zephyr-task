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

			{/* Content remote */}
			<Suspense fallback={<div className="p-4">Loading content…</div>}>
				<Content />
			</Suspense>
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(<App />);
