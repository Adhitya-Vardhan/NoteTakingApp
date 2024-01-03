import Container from "./components/Container";
import Navbar from "./components/Navbar";

import AddNotes from "./components/AddNotes";
import Notes from "./components/Notes";
import { Navigate, Route, Routes } from "react-router-dom";
import TaskAdded from "./components/TaskAdded";

function App() {

  return (
    <>
      <Container>
        
        <header>
          <Navbar />
        </header>

        <Routes>
          <Route path="/" Component={Notes}/>
          <Route path="/add" Component={AddNotes}/>
          <Route path="/taskadded" Component={TaskAdded}/>
          <Route path="*" Component={<Navigate to={Notes}/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
