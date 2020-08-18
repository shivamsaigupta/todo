import React from "react";
import GoogleAuth from "./GoogleAuth";

//TODO: Add Google SignIn

const Header: React.FC = () => {
  const getDate = (): string => {
    let today: Date = new Date();
    let monthName: Array<String> = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let date: number = today.getDate();
    let sup: string = "";
    if (date > 3 && date < 21) sup = "th";
    switch (date % 10) {
      case 1:
        sup = "st";
      case 2:
        sup = "nd";
      case 3:
        sup = "rd";
      default:
        sup = "th";
    }
    let dateString: string =
      today.getDate() +
      sup +
      " " +
      monthName[today.getMonth()] +
      " " +
      today.getFullYear();
    return dateString;
  };

  return (
    <div className="ui secondary pointing menu">
      <h1 className="ui header item">{getDate()}</h1>
      <div className="ui header item right">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
