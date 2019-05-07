import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header/index.js'
import Home from './pages/home'
import Detail from './pages/detail/loadable.js';
import Search from './pages/search/loadable.js';
import Login from './pages/login';
// import Register from './pages/register';
import Write from './pages/write';
// import Search from './pages/search'
import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
            {/* <Route path='/register' exact component={Register}></Route> */}
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/search' exact component={Search}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
