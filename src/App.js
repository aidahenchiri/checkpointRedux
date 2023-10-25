import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TaskList from './Components/Task/TaskList';

function App() {
  return (
    <div className="App">
    
     <Routes>
        <Route path='/' element={<TaskList/>} />
     </Routes>
    </div>
  );
}

export default App;
