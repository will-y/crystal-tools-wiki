import {useRef, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import database from "../../firebase";
import { ref, push, set } from "firebase/database";


function SectionForm(props) {
    const [show, setShow] = useState(false);
    const [images, setImages] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sectionTitle = useRef(null);
    const sectionText = useRef(null);

    const imageLinkRefs = new Array(images);
    const imageCaptionRefs = new Array(images);

    for (let i = 0; i < images; i++) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        imageLinkRefs[i] = useRef(null);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        imageCaptionRefs[i] = useRef(null);
    }

    const handleSubmit = () => {
        // alert(sectionTitle.current.value);
        // alert(sectionText.current.value);

        if (sectionTitle.current.value === "" || sectionText.current.value === "") {
            alert("Can't add a section with empty fields.");
            return;
        }

        const result = {
            order: 0,
            title: sectionTitle.current.value,
            text: sectionText.current.value
        }

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
                        {
                            [...Array(images).keys()].map((index) => {
                                return (
                                    <Form.Group className="mb-3" key={index}>
                                        <Form.Label>Image {index}</Form.Label>
                                        <Form.Control placeholder="Image Link" className="mb-2" ref={imageLinkRefs[index]}/>
                                        <Form.Control placeholder="Image Caption" ref={imageCaptionRefs[index]} />
                                    </Form.Group>
                                );
                            })
                        }
                        <Form.Group>
                            <Button variant="primary" onClick={() => setImages(images + 1)}>Add Image</Button>
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
