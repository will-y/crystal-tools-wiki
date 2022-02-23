import './SideBarSection.css';
import {Accordion} from "react-bootstrap";

function SideBarSection(props) {
    return (
        <Accordion.Item eventKey={props.index}>
            <Accordion.Header>{props.name}</Accordion.Header>
            <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default SideBarSection;