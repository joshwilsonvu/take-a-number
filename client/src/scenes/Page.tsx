import * as React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Landing} from './Landing/Landing' // landing page
import {Profile} from './Profile/Profile' // profile page
import {Org} from './Org/Org'; // org page
import {NotFound} from './NotFound/NotFound'; // page not found
import '../css/index.css';

/**
 * Because this single page app is so simple, it is sufficient to switch
 * between rendering the Landing component, the Profile component, and the
 * Org component, and let each of these components handle their own logic.
 *
 * @returns the jsx to be rendered
 */
let Page = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/profile/" render={props =>
          <Profile {...props} email="joshua.wilson@vanderbilt.edu"/>
        }/>
        <Route path="/profile/:email" render={props =>
          <Profile {...props} email={decodeURIComponent(props.match.params.email)}/>
        }/>
        <Route path="/org/:name" render={props =>
          <Org {...props} name={props.match.params.name}/>
        }/>
        <Route path="/404" component={NotFound}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

export {Page};


/*
Useful code:

fetch('/api/getList')
    .then(res => res.json())
    .then(list => this.setState({ list }))
 */