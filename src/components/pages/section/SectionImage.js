import Image from 'react-bootstrap/Image'
import {Link} from "react-router-dom";

function SectionImage(props) {
    return (
        <div>
            {
                (!props.wikiLink || props.wikiLink === "") ? <Image src={props.link}  alt={props.caption} fluid={true} /> :
                    <Link to={props.wikiLink}>
                        <Image src={props.link}  alt={props.caption} fluid={true} />
                    </Link>
            }

            <p>{props.caption}</p>
        </div>
    );
}

export default SectionImage;
