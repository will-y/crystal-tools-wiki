import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import SideBar from "./components/sidebar/SideBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ListPage from "./components/pages/ListPage";
import Page from "./components/pages/Page";

function App() {
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <SideBar />
                </Col>
                <Col md={9}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="items" element={<ListPage title="items"/>}>
                                <Route path=":pageID" element={<Page />} />
                            </Route>
                            <Route path="blocks" element={<ListPage title="blocks"/>}>
                                <Route path=":pageID" element={<Page />} />
                            </Route>
                            <Route path="armor" element={<ListPage title="armor"/>}>
                                <Route path=":pageID" element={<Page />} />
                            </Route>
                            <Route path="tools" element={<ListPage title="tools"/>}>
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
