
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPhotos from "./pages/ShowSearchPhotos";
import Profile from "./pages/ShowProfile";

function App() {
  return (
    <div className="App">
     
 <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={SearchPhotos}/>
            <Route path="/profile/:username" component={Profile}/>
          </Switch>
        </Router>
        </div>
    </div>
  );
}
export default App;