import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  loggingIn(){
    return (
      <div>
        <button>Log In As Demo User</button>
      </div>
    );
  }

  signingUp(){
    return (
      <div>
        <button>Log In As Demo User</button>
      </div>
    );
  }



  render() {
    let question;
    if (this.props.formType === 'signup'){
      question = ("Already have an account?");
    } else {
      question = ("Don't have an account?");
    }
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1>Pulsify!</h1>
          <br/>
          <button> Log In As Demo User </button>
          <p> - OR - </p>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
        {question} {this.props.navLink}
      </div>
    );
  }
}

export default withRouter(SessionForm);
