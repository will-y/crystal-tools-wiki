import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import SideBar from "./components/sidebar/SideBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ListPage from "./components/pages/ListPage";
import Page from "./components/pages/Page";
import {child, get, ref} from "firebase/database";
import database from "./firebase";
import {useEffect, useState} from "react";
import HomePage from "./components/pages/HomePage";

function App() {
    const dbRef = ref(database);
    const [data, setData] = useState([]);

    useEffect(() => {
        get(child(dbRef, '/')).then((snapshot) => {
            if (snapshot.exists()) {
                setData(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    });

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <BrowserRouter>
                <Routes>
                    <Route path="items" element={<ListPage title="items" data={data["items"]} sideBarData={data}/>}>
                        <Route path=":pageID" element={<Page data={data["items"]} category="items" />} />
                    </Route>
                    <Route path="blocks" element={<ListPage title="blocks" data={data["blocks"]} sideBarData={data}/>}>
                        <Route path=":pageID" element={<Page data={data["blocks"]} category="blocks" />} />
                    </Route>
                    <Route path="armor" element={<ListPage title="armor" data={data["armor"]} sideBarData={data}/>}>
                        <Route path=":pageID" element={<Page data={data["armor"]} category="armor" />} />
                    </Route>
                    <Route path="tools" element={<ListPage title="tools" data={data["tools"]} sideBarData={data}/>}>
                        <Route path=":pageID" element={<Page data={data["tools"]} category="tools" />} />
                    </Route>
                    <Route path="/" element={<HomePage sideBarData={data} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
