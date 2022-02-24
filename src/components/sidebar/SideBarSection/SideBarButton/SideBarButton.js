import './SideBarButton.css';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function SideBarButton(props) {
    return (
        // <Button variant="outline-primary" size="lg" className="text-start">
        //     {props.data.name}
        // </Button>
        <Link to={`/${props.category}/${props.id}`} className="btn btn-lg btn-outline-primary">
            {props.name}
        </Link>
    );
}

export default SideBarButton;
