import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="d-flex container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary m-2">Check the Context in action</button>
					</Link>
					<Link to="/landingpage">
						<button className="btn btn-success">Landing Page</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
