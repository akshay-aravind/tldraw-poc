import { Tldraw } from '@tldraw/tldraw';

const Home = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'tranpsarent',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Tldraw />
      </div>
    </>
  );
};

export default function Draw() {
  return <Home />;
}
