import Image from 'react-bootstrap/Image'

function SectionImage(props) {
    return (
        <div>
            <Image src={props.link}  alt={props.caption} fluid={true}/>
            <p>{props.caption}</p>
        </div>
    );
}

export default SectionImage;
