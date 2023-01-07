import "./App.css";
import NavBar from "./Components/Navbar";
import Red from "./Components/Red";
import Blue from "./Components/Blue";
import Contact from "./Components/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import logo from './logo.svg';

function App() {
  return (
	<>
	  <div className="">
		<NavBar />
		<BrowserRouter>
		  <Routes>
			<Route path="/">
			  <Route path="about" element={<Blue />} />
			  <Route path="resume" element={<Red />} />
			  <Route path="contact" element={<Contact />} />
			</Route>
		  </Routes>
		</BrowserRouter>
		<Container>
		  {/* <Row xs={2} md={4} lg={6}>
			<Col>1 of 2</Col>
			<Col>2 of 2</Col>
		  </Row>
		  <Row xs={1} md={2} lg={4}>
			<Col>1 of 3</Col>
			<Col>2 of 3</Col>
			<Col>3 of 3</Col>
			<Col>3 of 3</Col>
			<Col>3 of 3</Col>
			<Col>3 of 3</Col>
		  </Row>
		  <Row xs="auto">
			<Col>1 of 3</Col>
			<Col>2 of 3</Col>
			<Col>3 of 3</Col>
		  </Row> */}
		</Container>
	  </div>
	</>
  );
}

export default App;
