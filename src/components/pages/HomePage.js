import {Col, Container, Row} from "react-bootstrap";
import SideBar from "../sidebar/SideBar";

function HomePage(props) {
    // Might want to not have sidebar here later
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <SideBar data={props.sideBarData}/>
                </Col>
                <Col md={9}>
                    <div>Home Page</div>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;
