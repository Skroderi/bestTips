import React, { Component, Fragment } from "react";
import TopNavBar from "components/organisms/NavBars/TopNavBar/TopNavBar";
import LeftSideBar from "components/organisms/NavBars/LeftSideBar/LeftSideBar";
import NewTipBar from "components/molecules/NewTipBar/NewTipBar";
import AddTipButton from "components/atoms/AddTipButton/AddTipButton";
import plus from "assets/icons/plus.svg";
import Buttons from "components/atoms/Button/Buttons";
import { connect } from "react-redux";

class MainTamplate extends Component {
  constructor(props) {
    super(props);
  }

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
    console.log(this.props);
    const { isActive, loginActive } = this.state;
    const id = this.props.id;

    const {
      auth: { isAuthenticated, loading }
    } = this.props;

    const AuthComponents = () => {
      return (
        <>
          <AddTipButton
            icon={plus}
            onClick={this.handleNewTipBarToggle}
            isActive={isActive}
          />
          <NewTipBar
            isActive={isActive}
            handleNewTipBarToggle={this.handleNewTipBarToggle}
          />
        </>
      );
    };
    return (
      <div>
        <TopNavBar login={this.login} />
        <LeftSideBar isLoginBarVisible={loginActive} />
        <Buttons id={id} />
        {!loading && (
          <Fragment>{isAuthenticated ? <AuthComponents /> : null}</Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(MainTamplate);
