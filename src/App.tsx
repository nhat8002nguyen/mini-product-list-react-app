import { Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <main className="App h-screen py-16 bg-gradient-to-r from-bg-blue-left to-bg-blue-right flex flex-col items-center">
      <Navigate to={"/products"} />
    </main>
  );
}

export default App;
