import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/shared/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='main-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
