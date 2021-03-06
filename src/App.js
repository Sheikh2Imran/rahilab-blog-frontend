import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import PostDetails from './components/PostDetails';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CreatePost from './components/CreatePost';
import Footer from './components/Footer';

class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/'component={Dashboard} />
              <Route path='/post/:id' component={PostDetails} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path='/create' component={CreatePost} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      );
    }
  }

export default App;
