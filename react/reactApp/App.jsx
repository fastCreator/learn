import React from 'react';
import About from './About.jsx';
import { Link } from 'react-router';

class App extends React.Component {

	constructor(props){
        super(props);
        this.state = { // define this.state in constructor
            isSaved: true
        } 
    }

   render() {
      return (
         <div>
            Hello World!!!
            {this.props.children}
            <Link to="/about" activeStyle={{color: 'red'}}>About</Link>
			<Link to="/repos" activeStyle={{color: 'red'}}>Repos</Link>
         </div>
      );
   }
}

export default App;
