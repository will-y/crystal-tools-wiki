import {Form} from "react-bootstrap";

function ImageForm(props) {
    return (
        <>
            <Form.Group className="mb-3" controlId="sectionTitle">
                <Form.Label>Section Title</Form.Label>
                <Form.Control placeholder="Section Title" ref={sectionTitle} />
            </Form.Group>
        </>
    );
}

export default ImageForm;
