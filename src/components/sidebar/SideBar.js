import './SideBar.css';
import {Accordion, Container, Row} from "react-bootstrap";
import SideBarSection from "./SideBarSection/SideBarSection";
import AccordionItem from "react-bootstrap/AccordionItem";
import { ref, child, get } from "firebase/database";
import database from "../../firebase";
import {useEffect, useState} from "react";

const section_names = ["Blocks", "Items", "Tools", "Armor"];


function SideBar(props) {
    const dbRef = ref(database);
    const [data, setData] = useState([]);

    useEffect(() => {
        get(child(dbRef, '/')).then((snapshot) => {
            if (snapshot.exists()) {
                setData(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    });

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
