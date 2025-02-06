
import './App.css'
import Aurora from '../src/blocks/Backgrounds/Aurora/Aurora.jsx';

function App() {
  return (
    <>
  <div className="text-white p-10">
    <Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  speed={0.5}
/>
      <h1 className="text-4xl font-bold">Tailwind CSS is Working!</h1>
      <p className="mt-4 text-xl">If you see this text styled, Tailwind is successfully installed.</p>
    </div>
    </>
  );
}

export default App;
