import React from "react";
import {ReactDOM} from "react";
import NavBar from "./NavBar.jsx"
import Container from "./Container.jsx"
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";





//create your first component
const Home = () => {
	return (
	<>
	<NavBar/>
	<Container/>
	<Cards/>
	<Footer/>

	 </>	
);
};

export default Home;
