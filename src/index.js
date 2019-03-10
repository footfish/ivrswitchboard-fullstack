import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import TimesApp from './TimesApp';
import MenuApp from './MenuApp';
import RecordingsApp from './RecordingsApp'



//import * as serviceWorker from './serviceWorker';

const Routing = () => {
  
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/closed/" exact component={MenuApp} />
        <Route path="/open/" exact component={MenuApp} />        
        <Route path="/times/" exact component={TimesApp} />
        <Route path="/recordings/" exact component={RecordingsApp} />        
      </div>
    </Router>
  );
  
  }

  
  function Index() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About </h2>;
  }
  

ReactDOM.render(<Routing/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
