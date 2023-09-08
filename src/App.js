
import './App.css';
import Events from './pages/Events';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Events />
      <ToastContainer />
    </div>
  );
}

export default App;
