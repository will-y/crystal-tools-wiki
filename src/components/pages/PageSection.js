import './Section.css';

function PageSection(props) {
    const itemData = props.data;

    return (
        <div className="section-container m-2">
            <h2 className="section-title pb-1">{itemData.title}</h2>
            <p className="section-text">{itemData.text}</p>
        </div>
    );
}

export default PageSection;
