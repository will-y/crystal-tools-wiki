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
                    {sortObject(props.data).map((prop, index) => {
                        return (
                            <SideBarButton key={index} name={props.data[prop].name} id={prop} category={props.name}/>
                        );
                    })}
                </div>
            </Accordion.Body>
        </Accordion.Item>
    );
}

function sortObject(data) {
    const keys = Object.keys(data);

    keys.sort((a, b) => {
        const objA = data[a];
        const objB = data[b];

        if (!("order" in objA) || !("order" in objB)) return 0;

        // console.log(objA);
        // console.log(objB);
        return objA.order - objB.order;
    });

    return keys;
}

export default SideBarSection;
