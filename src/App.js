import Landing from './Pages/Landing/Landing';
import { Route, Routes } from 'react-router-dom'
import Job_Description_Part from './Componence/Job_Description_Part/Job_Description_Part';

function App() {
  return (
    <div className="App">
      <Routes> <Route path='/' element={<Landing/>}></Route></Routes>
      <Routes> <Route path='/jobid/:id' element={<Landing/>}></Route></Routes>

    </div>
  );
}

export default App;
