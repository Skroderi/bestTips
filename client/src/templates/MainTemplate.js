import React, { Component } from "react";
import TopNavBar from "components/organisms/NavBars/TopNavBar/TopNavBar";
import LeftSideBar from "components/organisms/NavBars/LeftSideBar/LeftSideBar";
import NewTipBar from "components/molecules/NewTipBar/NewTipBar";
import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";
import plus from "assets/icons/plus.svg";
import Buttons from "components/atoms/Button/Buttons";

class MainTamplate extends Component {
  state = {
    isActive: false,
    loginActive: false
  };

  handleNewTipBarToggle = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  login = () => {
    this.setState(prevState => ({
      loginActive: !prevState.loginActive
    }));
  };

  render() {
    const { isActive, loginActive } = this.state;
    const id = this.props.id;
    // console.log(url);

    return (
      <div>
        <TopNavBar login={this.login} />
        <NewTipBar
          isActive={isActive}
          handleNewTipBarToggle={this.handleNewTipBarToggle}
        />
        <LeftSideBar isLoginBarVisible={loginActive} />
        <Buttons id={id} />
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
