import React from 'react';

class About extends React.Component {
	
	constructor(props){
        super(props);
        this.state = { // define this.state in constructor
            isSaved: true
        } 
    }

   render() {
      return (
         <div>
            Hello About!!!
         </div>
      );
   }
}

export default About;
