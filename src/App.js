import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import SideBar from "./components/sidebar/SideBar";
import database from "./firebase";
import { ref, child, get } from "firebase/database";

const dbRef = ref(database);

get(child(dbRef, '/')).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});

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
