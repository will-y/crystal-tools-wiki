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
            <Navbar bg="light" expand="sm">
                <Container fluid>
                    <Navbar.Brand href="#home">Crystal Tools</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="">Overview</Nav.Link>
                            <Nav.Link href="#home">Download</Nav.Link>
                            <Nav.Link href="#link">Source</Nav.Link>
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
