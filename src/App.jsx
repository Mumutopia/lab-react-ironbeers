import React from 'react';

import { Switch, Route } from "react-router-dom";
import './App.css';
import NavMain from './Components/NavMain';
import BeersList from './Components/BeersList';
import BeerDetail from './Components/BeerDetail'
import RandomBeer from "./Components/RandomBeer"
import Home from './Components/Home';
import NewBeer from './Components/NewBeer';
// import BeerDetail from './Components/'

function App() {
  return (
    < >
     <main>
       <Switch>
        <Route exact path="/beers" component={BeersList}/>
        <Route exact path="/random-beer" component={RandomBeer}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beer/:id" component={BeerDetail}/>
        <Route  path="/newbeer" component={NewBeer}/>
        {/* <Route exact path="/:id" component={BeerDetail}/> */}
        

       </Switch>
     </main>
    </>
  );
}

export default App;
