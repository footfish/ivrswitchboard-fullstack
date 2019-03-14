import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import './index.css';
import TimesApp from './routes/TimesApp';
import MenuApp from './routes/MenuApp';
import RecordingsApp from './routes/RecordingsApp'
import AccountApp from './routes/AccountApp'
import PaymentApp from './routes/PaymentApp'
import BillingApp from './routes/BillingApp'


const Routing = () => {
  
  return (
    <Router>
      <div className="container">
      <Switch>
        <Route path="/account/" exact component={AccountApp} />
        <Route path="/closed/" exact key={"closedMenu"} component={MenuApp} />
        <Route path="/open/" exact key={"openMenu"} component={MenuApp}/>        
        <Route path="/times/" exact component={TimesApp} />
        <Route path="/recordings/" exact component={RecordingsApp} />        
        <Route path="/payment/" exact component={PaymentApp} />        
        <Route path="/billing/" exact component={BillingApp} />        
        <Redirect to="/times/" />        
        </Switch>
      </div>
    </Router>
  );
  
  }


ReactDOM.render(<Routing/>, document.getElementById('root'));

