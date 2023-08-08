import { Component } from "react";
import Nav from "./components/nav/Nav.jsx";
import Header from "./components/header/Header.jsx";
import Section from "./components/section/Section.jsx";
import Footer from "./components/footer/Footer.jsx";
import About from "./components/about/About.jsx";
import Menu from "./components/menu/Menu.jsx";
import Where from "./components/where/Where.jsx";



export default class App extends Component {



  render() {
    return (
      <>
				<Nav />
				<Header />
				<Section class={"about"}>
					<About />
				</Section>
				<Section class={"menu"}>
					<Menu />
				</Section>
				<Section class={"where"}>
					<Where />
				</Section>
				<Footer />
			</>
		);
  }
}
