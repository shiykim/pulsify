import React from 'react';

class Navbar extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.currentUser.username}</h1>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    );
  }
}

export default Navbar;
