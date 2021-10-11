import React, { Fragment } from "react";
import NavBar from "./components/NavBar";
import Table from "./components/Table";

import "./App.css";

const App = () => {
	return (
		<Fragment>
			<NavBar />
			<section className="container-fluid">
				<div className="mb-3">
					<h3 className="my-5 text-center" id="heading">
						<img src="covid-19.png" alt="Covid-19" width="10%" height="auto" />
						Covid-19 Live Updates in India
					</h3>
				</div>
				<Table />
			</section>
		</Fragment>
	);
};

export default App;
