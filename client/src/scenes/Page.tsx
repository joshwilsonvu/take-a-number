import * as React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Jumbotron} from 'react-bootstrap';

/**
 * Because this single page app is so simple, it is sufficient to switch
 * between rendering the Landing component, the Profile component, and the
 * Org component, and let each of these components handle their own logic.
 *
 * @returns the jsx to be rendered
 */
const Page = () => {
  console.log("Rendering page!!!!!");
  return (
    <BrowserRouter>
      <Switch>
        <Route render={props =>
          <Jumbotron><h1>Hello world!</h1><p>Testing changes.</p></Jumbotron>}/>
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