import { Component } from "react";
import "./Where.scss";

export default class Where extends Component {
	render() {
		return (
			<>
				<h2>WHERE TO FIND US</h2>
				<p>Find us at some address at some place.</p>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d124629185.8849026!2d-0.45711182723734173!3d17.584637653979513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sam!4v1691416974419!5m2!1sen!2sam"
					allowFullScreen="yes"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"></iframe>

				<p>
					<span>FYI!</span>We offer full-service catering for any event, large or small. We
					understand your needs and we will cater the food to satisfy the biggerst criteria of them
					all, both look and taste.
				</p>

				<form action="#" method="POST">
					<fieldset>
						<legend>
							<strong>Reserve</strong> a table, ask for today&apos;s special or just send us a
							message:
						</legend>
						<input
							type="text"
							name="userName"
							id="userName"
							placeholder="Name" />
						<input
							type="number"
							name="guestsNumber"
							id="guestsNumber"
							placeholder="How many people"
						/>
						<input
							type="datetime-local"
							name="reservationDate"
							id="reservationDate"
							value="2023-09-08T10:50"
						/>
						<input
							type="text"
							name="userMessage"
							id="userMessage"
							placeholder="Message \ Special requirements"
						/>
						<input
							type="submit"
							name="sendMessage"
							value="SEND MESSAGE" />
					</fieldset>
				</form>
			</>
		);
	}
}
