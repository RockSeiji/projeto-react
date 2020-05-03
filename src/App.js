import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './Components/Home';
import Login from './Components/Login';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
