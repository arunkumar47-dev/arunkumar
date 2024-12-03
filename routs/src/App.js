import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Files from './Files';
import File2 from './File2';
import Task from './Task';

function App() {
  return (
    <>
   <BrowserRouter basename="/app">
    <Routes>
      <Route path="/name1" element={<Files/>}/>
      <Route path="/name2" element={<File2/>}/>
      <Route path="/task"  element={<Task/>}/>


    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
