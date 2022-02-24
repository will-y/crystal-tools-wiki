import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import SideBar from "./components/sidebar/SideBar";

function App() {
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <SideBar />
                </Col>
                <Col md={9}>

                </Col>
            </Row>
        </Container>
    );
}

export default App;
