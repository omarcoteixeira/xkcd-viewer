import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './assets/stylesheets/App.css';

import { CommicService } from './app/services/ComicService';

import { ComicViewer, ComicNavigation }  from './app/components';

class App extends Component {
  componentWillMount() {
    this.props.CommicService();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Xkcd Viewer</h1>
          <div className="container">
            <ComicViewer></ComicViewer>
            <ComicNavigation></ComicNavigation>
          </div>
        </header>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({ CommicService }, dispatch);

const connector = connect(null, mapDispatchToProps);
export default connector(App);
