import './ListPage.css';
import {Link, Outlet} from "react-router-dom";
import {Card, Col, Row} from "react-bootstrap";
import capitalize from "../../utils/StringUtils";
import breakIntoRows from "../../utils/ArrayUtils";

function ListPage(props) {
    // TODO: List all things that are passed in with links
    if (props.data) {
        const rows = breakIntoRows(Object.keys(props.data), 3);

        return (
            <div>
                <Outlet />
                <Card>
                    <Card.Header>{capitalize(props.title)}</Card.Header>
                    <Card.Body>
                        {
                            rows.map((row, rowID) => {
                                return (<Row key={"row" + rowID} className="m-2">
                                    {row.map((col, colID) => {
                                        return (
                                            <Col sm={4} key={(rowID * 3 + colID).toString()}>
                                                <Link className={"btn btn-outline-primary btn-lg w-100"} to={`${props.data[col].name}`}>
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
        );
    } else {
        // TODO: Loading
        return (
            <div></div>
        );
    }
}

export default ListPage;
