import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Loader from "./Loader";
import states from "./states";

const Table = () => {
	const [updates, setUpdates] = useState([]);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get("/updates");
			const result = [];
			for (let i in data) {
				result.push([i, data[i]]);
			}
			setUpdates(result);
		})();
	}, []);

	const getUpdates = () => {
		return updates.map(update => {
			const date = new Date(update[1].meta.last_updated).toLocaleString();
			return (
				<tr key={update[0]}>
					<td>{date}</td>
					<td>{states[update[0]]}</td>
					<td>{update[1].meta.population}</td>
					<td>{update[1].total.confirmed}</td>
					<td>{update[1].total.deceased}</td>
					<td>{update[1].total.recovered}</td>
					<td>{update[1].total.tested}</td>
					<td>{update[1].total.vaccinated1}</td>
					<td>{update[1].total.vaccinated2}</td>
				</tr>
			);
		});
	};

	return (
		<Fragment>
			{updates.length === 0 ? (
				<Loader />
			) : (
				<div className="table-responsive">
					<table className="table table-bordered table-striped text-center" id="main-table">
						<thead>
							<tr>
								<th>Last Updated</th>
								<th>State</th>
								<th>Population</th>
								<th>Confirmed</th>
								<th>Deaths</th>
								<th>Recoverd</th>
								<th>Tested</th>
								<th>Vaccinated1</th>
								<th>Vaccinated2</th>
							</tr>
						</thead>
						<tbody>{getUpdates()}</tbody>
					</table>
				</div>
			)}
		</Fragment>
	);
};

export default Table;
