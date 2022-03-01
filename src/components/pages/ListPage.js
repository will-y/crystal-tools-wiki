import './ListPage.css';
import {Link, Outlet} from "react-router-dom";
import {Card, Col, Container, Row} from "react-bootstrap";
import capitalize from "../../utils/StringUtils";
import breakIntoRows from "../../utils/ArrayUtils";
import SideBar from "../sidebar/SideBar";

function ListPage(props) {
    if (props.data) {
        const rows = breakIntoRows(Object.keys(props.data), 3);

        return (
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <SideBar data={props.sideBarData}/>
                    </Col>
                    <Col md={9}>
                        <div>
                            <Outlet />
                            <Card className="mt-2">
                                <Card.Header>{capitalize(props.title)}</Card.Header>
                                <Card.Body>
                                    {
                                        rows.map((row, rowID) => {
                                            return (<Row key={"row" + rowID} className="m-2">
                                                {row.map((col, colID) => {
                                                    return (
                                                        <Col sm={4} key={(rowID * 3 + colID).toString()}>
                                                            <Link className={"btn btn-outline-primary btn-lg w-100"} to={`${col}`}>
                                                                {props.data[col].name}
                                                            </Link>
                                                        </Col>
                                                    );
                                                })}
                                            </Row>);
                                        })
                                    }
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    } else {
        // TODO: Loading
        return (
            <div></div>
        );
    }
}

export default ListPage;
