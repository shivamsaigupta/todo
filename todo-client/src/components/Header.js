import React from 'react';
import GoogleAuth from './GoogleAuth';

//TODO: Add Google SignIn

class Header extends React.Component {

  getDate = () => {
    let today = new Date();
    let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = today.getDate();
    let sup = ''
    if (date > 3 && date < 21) sup = 'th';
    switch (date % 10) {
      case 1:  sup = "st";
      case 2:  sup = "nd";
      case 3:  sup = "rd";
      default: sup = "th";
    }
    let dateString = today.getDate() + sup + ' ' + monthName[today.getMonth()] + ' ' + today.getFullYear();
    return dateString;
  }

  render(){
    return(
      <div className="ui secondary pointing menu">
        <h1 className="ui header item">
          {this.getDate()}
        </h1>
        <div className="ui header item right">
          <GoogleAuth />
        </div>
      </div>
    )};
}

export default Header;
