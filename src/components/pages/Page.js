import {useParams} from "react-router-dom";
import SectionForm from "../modals/SectionForm";
import PageSection from "./section/PageSection";

function Page(props) {
    const params = useParams();
    const itemData = props.data[params.pageID];

    const sections = itemData.sections;
    let sectionIds;

    if (sections) {
        sectionIds = Object.keys(itemData.sections);
    }



    return (
        <div>
            <h1>{itemData.name}</h1>
            { sections ?
                sectionIds.map((sectionId) => {
                    return <PageSection id={sectionId} data={sections[sectionId]} key={sectionId}/>
                }) : <></>
            }
            <SectionForm name={params.pageID} category={props.category}/>
        </div>
    );
}

export default Page;
