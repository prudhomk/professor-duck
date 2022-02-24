import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bubbles from '../bubbles/Bubbles';
import Duck from '../duck/Duck';
import Header from '../header/Header';
import ProblemList from '../problems/ProblemList';
import ProblemDetail from '../problems/ProblemDetail';

export default function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Duck}/>
        <Route exact path="/problems" component={ProblemList}/>
        <Route exact path="/problems/:id" component={ProblemDetail}/>
      </Switch>
      <Bubbles/>
    </>
  );
}


  
