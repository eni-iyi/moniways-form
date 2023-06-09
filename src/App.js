import Form from './Component/Form/Form.js';
import './App.css';
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      <Form />
      </header>
    </div>
  );
}

export default App;
