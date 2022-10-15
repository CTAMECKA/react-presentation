import { createRoot } from 'react-dom/client';
import { App } from './App';

const containerNode = document.getElementById('app');
const appRoot = createRoot(containerNode);

appRoot.render(<App />);
