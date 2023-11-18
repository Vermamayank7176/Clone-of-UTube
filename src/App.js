//import logo from './logo.svg';
import './App.css';
// import TableComponent from "./component/table";
// import SomeComponent from "./component/SomeComponent";
// import HookComponent from "./component/HookComponent";
// import Timebomb from './component/Timebomb';
import Homepage from './component/Homepage';
import Firstpage from './component/Firstpage';

import { BrowserRouter, Route ,Routes} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Homepage" element={<Homepage/>}></Route>
        <Route path="/Firstpage" element={<Firstpage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
