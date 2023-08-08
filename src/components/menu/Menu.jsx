import { Component } from "react";
import "./Menu.scss";
import { eatList, drinkList } from "../../DATA/menu.js";

export default class Menu extends Component {
	constructor() {
		super();

		this.state = {
			isDrinkMenu: true,
		};

		this.menuHandler = function (e) {
			switch (e.target.name) {
				case "eatMenuSwitcher":
					this.setState({ isDrinkMenu: false });
					break;
				case "drinkMenuSwitcher":
					this.setState({ isDrinkMenu: true });
					break;
				default:
					break;
			}
		}.bind(this);
	}

	render() {
		return (
			<>
				<h2>THE MENU</h2>

				<div className="container">
					<div className="containerTop" onClick={this.menuHandler}>
						<button
							type="button"
							style={{ backgroundColor: this.state.isDrinkMenu ? "white" : "grey" }}
							name="eatMenuSwitcher">
							Eat
						</button>

						<button
							type="button"
							style={{ backgroundColor: this.state.isDrinkMenu ? "grey" : "white" }}
							name="drinkMenuSwitcher">
							Drink
						</button>
					</div>

					<div className="containerBottom">
						{this.state.isDrinkMenu
							? drinkList.map((item) => {
									return (
										<div key={crypto.randomUUID()}>
											<h3>{item.title}</h3>
											<p>{item.description}</p>
											<p>{item.price}</p>
										</div>
									);
							})
							: eatList.map((item) => {
									return (
										<div key={crypto.randomUUID()}>
											<h3>{item.title}</h3>
											<p>{item.description}</p>
											<p>{item.price}</p>
										</div>
									);
              })
            }
					</div>
				</div>

				<img src="/img/coffeeshop2.jpg" alt="coffeshop image"/>
			</>
		);
	}
}
