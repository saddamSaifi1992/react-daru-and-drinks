import React from 'react';
import Header from "./Component/Header"; 
import Container from "./Component/Container";
import Random from "./Component/Random";
import Category from "./Component/Category";
import ItemById from "./Component/ItemById";
import ItembyCategoty from "./Component/ItembyCategoty";
import Alphabet from "./Component/Alphabet";

import "animate.css/animate.min.css";

import {
	Switch,
	Route
  } from "react-router-dom";
function App() {
    return (
		<div className="site-wrap" id="home-section">
			<Header/> 
			<Switch>
				<Route exact path="/">
					<Container />
				</Route>
				<Route path="/random">
					<Random />
				</Route>
				<Route path="/alphabet">
					<Alphabet />
				</Route>
				<Route path="/category">
					<Category />
				</Route>
				<Route path="/drink/:id">
					<ItemById />
				</Route>
				<Route path="/categoryFilter/:c/:v">
					<ItembyCategoty />
				</Route>
			</Switch>
		</div>
    );
}

export default App;
