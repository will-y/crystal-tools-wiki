import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import SideBar from "./components/sidebar/SideBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ListPage from "./components/pages/ListPage";
import Page from "./components/pages/Page";
import {child, get, ref} from "firebase/database";
import database from "./firebase";
import {useEffect, useState} from "react";

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
        <Container fluid>
            <Row>
                <Col md={3}>
                    <SideBar data={data} />
                </Col>
                <Col md={9}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="items" element={<ListPage title="items" data={data["items"]}/>}>
                                <Route path=":pageID" element={<Page />} />
                            </Route>
                            <Route path="blocks" element={<ListPage title="blocks" data={data["blocks"]}/>}>
                                <Route path=":pageID" element={<Page />} />
                            </Route>
                            <Route path="armor" element={<ListPage title="armor" data={data["armor"]}/>}>
                                <Route path=":pageID" element={<Page />} />
                            </Route>
                            <Route path="tools" element={<ListPage title="tools" data={data["tools"]}/>}>
                                <Route path=":pageID" element={<Page />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
