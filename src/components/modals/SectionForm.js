import {useRef, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import database from "../../firebase";
import { ref, push, set } from "firebase/database";


function SectionForm(props) {
    const [show, setShow] = useState(false);
    const [images, setImages] = useState(0);
    const [imageLinks, setImageLinks] = useState([]);
    const [imageCaptions, setImageCaptions] = useState([]);
    const [imageInline, setImageInline] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sectionTitle = useRef(null);
    const sectionText = useRef(null);

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
            text: sectionText.current.value,
            images: []
        }

        for (let i = 0; i < imageLinks.length; i++) {
            result.images.push({
                link: imageLinks[i],
                caption: imageCaptions[i],
                inline: imageInline[i]
            });
        }

        const db = database;
        const sectionsRef = ref(db, props.category + "/" + props.name + "/sections");
        const newSectionRef = push(sectionsRef);
        set(newSectionRef, result).then(() => {
            console.log("written to database");
        });

        setShow(false);
    }

    const onAddImage = () => {
        setImages(images + 1);
        setImageLinks((prevState => {
            const arr = JSON.parse(JSON.stringify(prevState));
            arr.push("");
            return arr;
        }));
        setImageCaptions((prevState => {
            const arr = JSON.parse(JSON.stringify(prevState));
            arr.push("");
            return arr;
        }));
        setImageInline((prevState => {
            const arr = JSON.parse(JSON.stringify(prevState));
            arr.push("");
            return arr;
        }));
    }

    const onImageFieldChange = (event) => {
        const nameSplit = event.target.name.split("-");
        const name = nameSplit[0];
        const id = parseInt(nameSplit[1]);
        const value = event.target.value;

        if (name === "link") {
            setImageLinks((prevState => {
                const arr = JSON.parse(JSON.stringify(prevState));
                arr[id] = value;
                return arr;
            }));
        } else if (name === "caption") {
            setImageCaptions((prevState => {
                const arr = JSON.parse(JSON.stringify(prevState));
                arr[id] = value;
                return arr;
            }));
        } else {
            setImageInline((prevState => {
                const arr = JSON.parse(JSON.stringify(prevState));
                arr[id] = event.target.checked;
                return arr;
            }));
        }
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
                                        <Form.Control placeholder="Image Link" className="mb-2" onChange={onImageFieldChange} name={`link-${index}`} />
                                        <Form.Control placeholder="Image Caption" onChange={onImageFieldChange} name={`caption-${index}`} />
                                        <Form.Check type="checkbox" label="Inline?" onChange={onImageFieldChange} name={`inline-${index}`} />
                                    </Form.Group>
                                );
                            })
                        }
                        <Form.Group>
                            <Button variant="primary" onClick={onAddImage}>Add Image</Button>
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
