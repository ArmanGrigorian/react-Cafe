import { Component } from "react";
import PropTypes from "prop-types";
import "./Section.scss";


export default class Section extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
			<section className={this.props.class} id={this.props.class}>
				{this.props.children}
			</section>
		);
  }
}

Section.propTypes = {
  class: PropTypes.string,
  children: PropTypes.element,
}





