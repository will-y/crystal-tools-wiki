function PageSection(props) {
    const itemData = props.data;
    
    return (
        <div>
            <h2>Page Section</h2>
            <h3>{props.id}</h3>
            <h3>{itemData.title}</h3>
            <h3>{itemData.text}</h3>
        </div>
    );
}

export default PageSection;
