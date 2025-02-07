
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

    </div>
    </>
  );
}

export default App;
