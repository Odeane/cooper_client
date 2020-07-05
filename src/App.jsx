import React, { Component } from "react";
import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";
import { authenticate } from './modules/auth';
import DisplayPerformanceData from "./components/DisplayPerformanceData";
import { Item } from 'semantic-ui-react'
import { Advertisement } from 'semantic-ui-react'


class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: "",
    renderLoginForm: false,
    authenticated: false,
    message: "",
    entrySaved: false,
    renderIndex: false
  };

  onLogin = async e => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value, entrySaved: false });
  };

  render() {

    const description = [].join('')

    const { renderLoginForm, authenticated, message } = this.state;
    let performanceDataIndex;
    let renderLogin;
    switch (true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <button
              id="login"
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </button>
            <p id="message">{message}</p>
          </>
        );
        break;

      case authenticated:
        renderLogin = (
          <p id="message">Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}</p>
        );
        if (this.state.renderIndex) {
          performanceDataIndex = (
            <>
              <DisplayPerformanceData
                updateIndex={this.state.updateIndex}
                indexUpdated={() => this.setState({ updateIndex: false })}
              />
              <button onClick={() => this.setState({ renderIndex: false })}>Hide past entries</button>
            </>
          )
        } else {
          performanceDataIndex = (
            <button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</button>
          )
        }
    }

    return (
      <>
        <InputFields onChangeHandler={this.onChangeHandler} />
        {renderLogin}
        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
          authenticated={this.state.authenticated}
          entrySaved={this.state.entrySaved}
          entryHandler={() => this.setState({ entrySaved: true, updateIndex: true })}
        />
        {performanceDataIndex}

        <Advertisement unit='banner' centered test='How Fit Are You?' inverted color='green' />
<div> 
        <Item.Group>
          <Item>
            <Item.Image size='small' src='https://www.cooperinstitute.org/vault/2440/web/articles/thumb_15825-CCB42EE2-997D-D83F-CB6A1978EEA3AA85.jpg' />
            <Item.Content>
              <Item.Header as='a'>12 Minute Run Test Administration</Item.Header>
              <Item.Description>
                <p>{description}</p>
                <p id = 'para'>
                  Prior to taking the test, be sure that you are properly hydrated, and warm up for at least 5 minutes.
                     Choose a time of day where weather conditions are relatively mild.Try to maintain a steady pace throughout the test while covering as much distance as possible.<br />
                    A common mistake made by those who are new to the test is to start much too fast. This will result in early exhaustion and will cause you to slow down considerably the rest of the way. Run in lane 1 (the inside lane) the entire time.<br />
                    Keep track of how many laps you have completed, rounded to the nearest quarter of a lap.Cool down properly by walking slowly for 5-10 minutes.
                  </p>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
        </div>
      </>

    );
  }
}
export default App;