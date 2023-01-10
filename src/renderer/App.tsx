import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Draw from './Screens/Draw';

const Hello = () => {
  const [child, setChild] = useState<boolean>(true);

  const showChildWindow = () => {
    setChild(!child);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.electron.ipcRenderer.sendMessage('child-channel', child);
  };

  return (
    <div>
      <h1>TLDRAW</h1>
      <div className="Hello" style={{ marginTop: '80vh' }}>
        <button type="button" onClick={showChildWindow}>
          Pencil
        </button>
      </div>
    </div>
  );
};
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/draw" element={<Draw />} />
      </Routes>
    </BrowserRouter>
  );
}
