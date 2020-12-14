import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Players from './pages/players';
import Items from './pages/items';
import Stages from './pages/stages';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<div className="Page">
						<h1 className="PageTitle">SMASH SCRAP</h1>
						<div className="Navigation">
							<Link to="/players">
								<h2>players</h2>
							</Link>
							<Link to="/items">
								<h2>items</h2>
							</Link>
						</div>
					</div>
				</Route>
				<Route exact path="/players">
					<Players></Players>
				</Route>
				<Route exact path="/items">
					<Items></Items>
				</Route>
				<Route exact path="/stages">
					<Stages></Stages>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
