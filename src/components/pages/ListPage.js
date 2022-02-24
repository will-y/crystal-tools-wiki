import './ListPage.css';
import { Outlet } from "react-router-dom";
import {Card} from "react-bootstrap";
import capitalize from "../../utils/StringUtils";

function ListPage(props) {
    // TODO: List all things that are passed in with links
    return (
        <div>
            {props.title}
            <Outlet />
            <Card>
                <Card.Header>{capitalize(props.title)}</Card.Header>
                <Card.Body>

                </Card.Body>
            </Card>
        </div>
    );
}

export default ListPage;
