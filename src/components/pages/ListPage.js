import './ListPage.css';
import { Outlet } from "react-router-dom";
import {Card, Col, Row} from "react-bootstrap";
import capitalize from "../../utils/StringUtils";
import breakIntoRows from "../../utils/ArrayUtils";

function ListPage(props) {
    // TODO: List all things that are passed in with links
    if (props.data) {
        const rows = breakIntoRows(Object.keys(props.data), 3);

        return (
            <div>
                {props.title}
                <Outlet />
                <Card>
                    <Card.Header>{capitalize(props.title)}</Card.Header>
                    <Card.Body>
                        {
                            rows.map((row, rowID) => {
                                return (<Row key={"row" + rowID}>
                                    {row.map((col, colID) => {
                                        return (
                                            <Col md={4} key={(rowID * 3 + colID).toString()}>
                                                {props.data[col].name}
                                            </Col>
                                        );
                                    })}
                                </Row>);
                            })
                        }
                    </Card.Body>
                </Card>
            </div>
        );
    } else {
        // TODO: Loading
        return (
            <div></div>
        );
    }
}

export default ListPage;
