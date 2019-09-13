import React, { Component, Fragment } from "react";
import TopNavBar from "components/organisms/NavBars/TopNavBar/TopNavBar";
import LeftSideBar from "components/organisms/NavBars/LeftSideBar/LeftSideBar";
import NewTipBar from "components/organisms/NavBars/NewTipBar/NewTipBar";
import AddTipButton from "components/atoms/AddTipButton/AddTipButton";
import plus from "assets/icons/plus.svg";
import { connect } from "react-redux";
class UserPageTemplate extends Component {
  state = {
    isActive: false,
    loginActive: false
  };

  handleNewTipBarToggle = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  toggleLeftSideBar = () => {
    this.setState(prevState => ({
      loginActive: !prevState.loginActive
    }));
  };

  render() {
    const { isActive, loginActive } = this.state;
    const { children } = this.props;

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
      <>
        <TopNavBar toggleLeftSideBar={this.toggleLeftSideBar} />
        <LeftSideBar
          isLoginBarVisible={loginActive}
          toggleLeftSideBar={this.toggleLeftSideBar}
        />
        {!loading && (
          <Fragment>{isAuthenticated ? <AuthComponents /> : null}</Fragment>
        )}
        {children}
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(UserPageTemplate);
