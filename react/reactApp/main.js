import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,IndexRedirect,createMemoryHistory,IndexRoute,Redirect,browserHistory} from 'react-router';


import App from './App.jsx';
import Repos from './Repos.jsx';
import About from './About.jsx';

//ReactDOM.render(<App />, document.getElementById('app'))

const history = createMemoryHistory(location)
 

let routes =<Route path="/" component={App}>
<IndexRedirect to="/" />
<IndexRoute component={About}/>
<Route path="/repos" component={Repos}/>
<Route path="/about" component={About}/>
<Route path="/about/:id"  />
<Redirect from="/about1/:id" to="/about" /> 
</Route>;



ReactDOM.render((
<Router history={hashHistory} routes ={routes} >

</Router>

), document.getElementById('app'));

//hashHistory.push('/repos');
