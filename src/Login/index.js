import React, { Component } from "react";
import firebase from "firebase";
import styled from "styled-components";

import * as Auth from "./auth_service";
import EmailForm from "./EmailForm";

import G from "./google.svg";
import Mark from "./github.png";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: ""
    };
  }

  render() {
    if (firebase.auth().currentUser) {
      return null;
    } else {
      return (
        <LoginWrapper>
          <EmailForm alert={this.state.alert} />
          <SocialLoginArea>
            <div>Or sign in with a social provider</div>
            <AuthButton className="google" onClick={this.handleGoogleAuth}>
              <Icon src={G} />
            </AuthButton>
            <AuthButton className="github" onClick={this.handleGithubAuth}>
              <Icon src={Mark} />
            </AuthButton>
          </SocialLoginArea>
        </LoginWrapper>
      );
    }
  }

  handleGoogleAuth = e => {
    Auth.handleSocialAuth(e, "google").then(err => {
      if (err) {
        this.setState((alert: err));
      }
    });
  };
  handleGithubAuth = e => {
    Auth.handleSocialAuth(e, "github").then(err => {
      if (err) {
        this.setState({ alert: err });
      }
    });
  };
}

const Icon = styled.img`
  height: 50px;
  width: 50px;
`;
const LoginWrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  text-align: center;
`;
const SocialLoginArea = styled.div`
  border-radius: 10px;
  margin: 0 auto;
  width: 250px;
  padding: 25px 0px;
  transition: all 150ms ease-in-out;
  &:hover {
    box-shadow: 3px 5px 30px -4px rgba(0, 0, 0, 0.75);
  }
`;
const AuthButton = styled.div`
  border-radius: 50%;
  box-shadow: 1px 1px 1px 1px rgba(133, 129, 133, 1);
  display: inline-flex;
  flex-direction: row;
  height: 50px;
  margin: 10px;
  padding: 5px;
  text-align: center;
  transition: all 150ms ease-in-out;
  width: 50px;
  &.disabled {
    background-color: rgba(80, 100, 152, 0.8);
  }
  &.github {
    background-color: #d3d9e2;
    &:hover {
      background-color: #f0f0f0;
      box-shadow: 1px 5px 10px 1px rgba(133, 129, 133, 1);
      transform: scale(1.05);
    }
  }
  &.google {
    background-color: #dd4b39;
    &:hover {
      box-shadow: 1px 5px 10px 1px rgba(133, 129, 133, 1);
      background-color: #f03838;
      transform: scale(1.05);
    }
  }
`;
