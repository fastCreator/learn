import React from 'react';

class Repos extends React.Component {

	constructor(props){
        super(props);
        this.state = { 
            isSaved: true
        } 
        this.routerWillLeave = this.routerWillLeave.bind(this);
    }
	
   	render() {
      	return (
         	<div>
            	Hello repos
         	</div>
      	);
   	}

	 
   	componentDidMount() {
      this.props.router.setRouteLeaveHook(
        this.props.route, 
        this.routerWillLeave
      )
    }

    routerWillLeave(nextLocation) {
    alert(1); 
      // 返回 false 会继续停留当前页面，
      // 否则，返回一个字符串，会显示给用户，让其自己决定
      alert(this.state.isSaved)
      if (!this.state.isSaved)
        return '确认要离开？';
    }
}

export default Repos;
