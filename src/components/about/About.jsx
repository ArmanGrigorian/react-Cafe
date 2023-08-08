import { Component } from "react";
import "./About.scss";

export default class About extends Component {
	render() {
		return (
			<>
				<h2>ABOUT THE CAFE</h2>

				<p>
					The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat.
				</p>

				<p>
					In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast
					and lunch sandwiches, as well as a selection of sides and salads and other good stuff.
				</p>

				<div>
					<p>
						&quot;Use products from nature for what it&apos;s worth - but never too early, nor too
						late.&quot; Fresh is the new sweet.
					</p>
					<p>Chef, Coffeeist and Owner: Liam Brown</p>
				</div>

				<img src="/img/coffeeshop1.jpg" alt="coffeeshop image" />

				<div>
					<p>
						<strong>Opening hours:</strong> everyday from 6am to 5pm.
					</p>

					<p>
						<strong>Address:</strong> 15 Adr street, 5015, NY
					</p>
				</div>
			</>
		);
	}
}
