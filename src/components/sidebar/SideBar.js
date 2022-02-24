import './SideBar.css';
import {Accordion, Container, Row} from "react-bootstrap";
import SideBarSection from "./SideBarSection/SideBarSection";

function SideBar(props) {
    const data = props.data;

    return (
        <Accordion alwaysOpen>
            {
                Object.keys(data).map((name, index) => {
                    return <SideBarSection name={name} index={index.toString()} key={index.toString()} data={data[name]}/>
                })
            }
        </Accordion>
    );
}

export default SideBar;
