import React, { Component } from "react";
import TopNavBar from "components/organisms/NavBars/TopNavBar/TopNavBar";
import LeftSideBar from "components/organisms/NavBars/LeftSideBar/LeftSideBar";
import NewTipBar from "components/molecules/NewTipBar/NewTipBar";
import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";
import plus from "assets/icons/plus.svg";
import AllTips from "views/AllTips";

class MainTamplate extends Component {
  state = {
    isActive: false,
    loginActive: false
  };

  handleNewTipBarToggle = () => {
    console.log("asd");

    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };
  login = () => {
    console.log("login");

    this.setState(prevState => ({
      loginActive: !prevState.loginActive
    }));
  };

  render() {
    const { isActive, loginActive } = this.state;

    return (
      <div>
        <TopNavBar login={this.login} />
        <NewTipBar isActive={isActive} />
        <LeftSideBar isLoginBarVisible={loginActive} />
        <AllTips />
        <ButtonIcon
          icon={plus}
          onClick={this.handleNewTipBarToggle}
          isActive={isActive}
        />
      </div>
    );
  }
}

export default MainTamplate;
