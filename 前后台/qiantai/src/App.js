import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header/index.js'
import Home from './pages/home'
import Detail from './pages/detail/loadable.js';
import Search from './pages/search/loadable.js';
import Login from './pages/login';
import Register from './pages/register';
import Write from './pages/write';
import Tiaocao from './pages/tiaocao';
import Button from './pages/spaPages/button';
import Button2 from './pages/spaPages/button2';
import Words from './pages/spaPages/words';
import Spa from './pages/spaPages';
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
            <Route path='/tiaocao' exact component={Tiaocao}></Route>
            <Route path='/write' exact component={Write}></Route>
            <Route path='/register' exact component={Register}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/search' exact component={Search}></Route>
            <Route path='/spa' exact component={Spa}></Route>
            <Route path='/button' exact component={Button}></Route>
            <Route path='/button2' exact component={Button2}></Route>
            <Route path='/words' exact component={Words}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
