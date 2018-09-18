import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount(){
    if(this.props.errors){
      this.props.clearErrors();
    }
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

  signInDemoUser(){
    const demoUser = {username:'demo', password: 'demouser'};
    this.props.login(demoUser);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className= 'errors' key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let question;
    if (this.props.formType === 'SIGN UP'){
      question = ("Already have an account?");
    } else {
      question = ("Don't have an account?");
    }

    let signupInfo;
    if (this.props.formType === 'SIGN UP'){
      signupInfo = (
        <div>
          <h2 id="session-signup-text">Sign up with your email address</h2>
          <label>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
              placeholder="Email"
            />
          </label>
        </div>
      );
    }

    return (
      <div className="session-form-whole">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <Link to='/'>
            <h1 id='session-header'>Pulsify</h1>
          </Link>
          <div id='session-separator'></div>
          <button type="button" className="btn-session" onClick={() => this.signInDemoUser()}>LOG IN AS DEMO USER</button>
          <section id='session-or'>or</section>
          {this.renderErrors()}
          <div className="session-form">
            <br/>
            {signupInfo}
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
            </label>
            <br/>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            </label>
            <br/>
            <input className="btn-submit" type="submit" value={this.props.formType} />
            <section id='session-question'>
              {question} {this.props.navLink}
            </section>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
