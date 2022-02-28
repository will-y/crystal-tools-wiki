import {useRef, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import database from "../../firebase";
import { ref, push, set } from "firebase/database";


function SectionForm(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sectionTitle = useRef(null);
    const sectionText = useRef(null);

    const handleSubmit = () => {
        // alert(sectionTitle.current.value);
        // alert(sectionText.current.value);
        const result = {
            order: 0,
            title: sectionTitle.current.value,
            text: sectionText.current.value
        }

        console.log(result);

        const db = database;
        const sectionsRef = ref(db, props.category + "/" + props.name + "/sections");
        const newSectionRef = push(sectionsRef);
        set(newSectionRef, result).then(() => {
            console.log("written to database");
        });

        setShow(false);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Section
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Add Section</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="sectionTitle">
                            <Form.Label>Section Title</Form.Label>
                            <Form.Control placeholder="Section Title" ref={sectionTitle} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="sectionText">
                            <Form.Label>Section Text</Form.Label>
                            <Form.Control placeholder="Section Text" as="textarea" rows={3} ref={sectionText} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SectionForm;
