import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./SignUp";


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      
      <Route path="/" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
