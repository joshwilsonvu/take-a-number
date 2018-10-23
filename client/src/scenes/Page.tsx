import * as React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

/**
 * Because this single page app is so simple, it is sufficient to switch
 * between rendering the Landing component, the Profile component, and the
 * Org component, and let each of these components handle their own logic.
 *
 * @returns the jsx to be rendered
 */
const Page = () => {
  return (
    <h1>Hello world!</h1>
  );
};

export {Page};


/*
Useful code:

fetch('/api/getList')
    .then(res => res.json())
    .then(list => this.setState({ list }))
 */