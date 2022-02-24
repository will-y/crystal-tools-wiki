import './SideBarSection.css';
import {Accordion} from "react-bootstrap";
import SideBarButton from "./SideBarButton/SideBarButton";

function SideBarSection(props) {
    return (
        <Accordion.Item eventKey={props.index}>
            <Accordion.Header>{capitalize(props.name)}</Accordion.Header>
            <Accordion.Body>
                <div className="d-grid gap-2">
                    {Object.keys(props.data).map((prop, index) => {
                        return (
                            <SideBarButton key={index} data={props.data[prop]}/>
                        );
                    })}
                </div>
            </Accordion.Body>
        </Accordion.Item>
    );
}

function capitalize(str) {
    if (str.length > 0) {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }

    return str;
}

export default SideBarSection;
