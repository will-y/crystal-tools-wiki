import './SideBarButton.css';
import {Button} from "react-bootstrap";

function SideBarButton(props) {
    return (
        <Button variant="outline-primary" size="lg" className="text-start">
            {props.data["name"]}
        </Button>
    );
}

export default SideBarButton;
