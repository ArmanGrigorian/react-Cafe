import { Component } from "react";
import "./Nav.scss";

export default class Nav extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li>
						<a href="#home">HOME</a>
					</li>
					<li>
						<a href="#about">ABOUT</a>
					</li>
					<li>
						<a href="#menu">MENU</a>
					</li>
					<li>
						<a href="#where">WHERE</a>
					</li>
				</ul>
			</nav>
		);
	}
}
