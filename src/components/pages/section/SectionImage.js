function SectionImage(props) {
    return (
        <div>
            <img src={props.link}  alt={props.caption} />
            <p>{props.caption}</p>
        </div>
    );
}

export default SectionImage;
