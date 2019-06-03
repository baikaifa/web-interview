import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './common/header/index.js'
import Home from './pages/home'
import Detail from './pages/detail/loadable.js';
import RecommendDetail from './pages/recommendDetail/loadable.js'
import Search from './pages/search/loadable.js';
import Login from './pages/login';
// import Login from './Login';
import Register from './pages/register';
import Write from './pages/write';
import Tiaocao from './pages/tiaocao';
import Button from './pages/spaPages/button';
import Button2 from './pages/spaPages/button2';
import Words from './pages/spaPages/words';
import Spa from './pages/spaPages';
import UserInfo from './pages/userInfo'
import Chat from './pages/chat'
// import Search from './pages/search'
// import  Protected from './Protected'
import store from './store';
// import AuthenticationComponent from './Authentication.js';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Fragment>
              <Header />
              {/* <Route path="/Auth" component={AuthenticationComponent}></Route>
            <AuthenticationComponent>
            <Route path='/Protected' exact component={Protected}></Route>
            </AuthenticationComponent> */}
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
              <Route path='/userInfo' exact component={UserInfo}></Route>
              <Route path='/recommendDetail/:id' exact component={RecommendDetail}></Route>
              <Route path='/chat' exact component={Chat} ></Route>
            </Fragment>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
