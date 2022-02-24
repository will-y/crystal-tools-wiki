import './SideBarSection.css';
import {Accordion} from "react-bootstrap";
import SideBarButton from "./SideBarButton/SideBarButton";
import capitalize from "../../../utils/StringUtils";

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

export default SideBarSection;
