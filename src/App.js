import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from "./Header";
import "./index.css";
import Sidebar from "./Sidebar"
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "./Chat";
import Login from "./Login"
import { useStateValue } from "./StateProvider";
function App() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="App">
      <Router>
        {!user? (<Login/>):(
          <>
    <Header></Header>
    <div className="d-flex">
    <Sidebar></Sidebar>
    <Switch>
    <Route exact path="/:roomID">
      <Chat></Chat>
    </Route>
    </Switch>
    </div>
    </>
        )
}
    </Router>

    </div>
  );
  
}

export default App;
