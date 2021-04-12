import logo from "./logo.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";

import Projects from "./components/Projects";

function App() {
	return (
		<Box bg='background'>
			<Navbar />
			<Main>
				<About />
				<Projects />
				<Contact />
			</Main>
		</Box>
	);
}

export default App;
