import './SideBar.css';
import {Accordion, Container, Row} from "react-bootstrap";
import SideBarSection from "./SideBarSection/SideBarSection";
import AccordionItem from "react-bootstrap/AccordionItem";

// Temp data, use firebase maybe?
const section_names = ["Blocks", "Items", "Tools", "Armor"];

function SideBar(props) {
    return (
        <Accordion alwaysOpen>
            {
                section_names.map((name, index) => {
                    return <SideBarSection name={name} index={index.toString()} key={index.toString()}/>
                })
            }
        </Accordion>
    );
}

export default SideBar;
