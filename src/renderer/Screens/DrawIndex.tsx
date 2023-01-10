import { createRoot } from 'react-dom/client';
import Draw from './Draw';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const drawcontainer = document.getElementById('root')!;
const drawroot = createRoot(drawcontainer);
drawroot.render(<Draw />);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['pinging']);
