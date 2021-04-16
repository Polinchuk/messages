import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import ListMessagesStateProps from '../containers/ListMessagesStateProps';
import CreateMessagesStateProps from '../containers/CreateMessagesStateProps';
import AdminStateProps from '../containers/AdminStateProps';
import Error from '../components/Error';
import ShowMessage from '../components/ShowMessage';
import Login from '../containers/Login';



export default class App extends React.Component {

  checkLogin = () => {
    const login = window.localStorage.getItem('rr_login')
    if (login !== 'admin') {
      
    }
  }
  
  render() {

    return (
      <div className="container fluid">
        <Router>
            <Switch>
              <Route exact path="/" component={() => (<Redirect to='/msg' />)} />
              <Route exact path="/msg" component={ListMessagesStateProps} />
              <Route exact path="/create" component={CreateMessagesStateProps} />
              <Route path="/msg/:msgURL" component={ShowMessage} />
              <Route path='/login' component={Login} />
              <Route path='/admin' component={AdminStateProps} onEnter={this.checkLogin}/>
              <Route component={Error} />
            </Switch>
        </Router>
      </div>
    ); 
  };
}

