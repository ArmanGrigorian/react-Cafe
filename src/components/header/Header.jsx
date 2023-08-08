import { Component } from "react";
import "./Header.scss";

export default class Header extends Component {
	render() {
		return (
			<header id="home">
                <p>Open from 6am to 5pm</p>
                <h1>the <br /> Cafe</h1>
				<p>15 Adr street, 5015</p>
			</header>
		);
	}
}
