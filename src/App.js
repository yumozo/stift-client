import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import { Counter } from './components/Counter';
import { Info } from './components/Info';
import TextEditor from './components/TextEdit';
import Profile from './components/Profile';
import './custom.css'
import './index.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/info' component={Info} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/text-edit' component={TextEditor} />
        <Route path='/profile' component={Profile} />
      </Layout>
    );
  }
}
