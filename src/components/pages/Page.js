import {useParams} from "react-router-dom";
import SectionForm from "../modals/SectionForm";
import PageSection from "./PageSection";

function Page(props) {
    const params = useParams();
    const itemData = props.data[params.pageID];

    const sectionIds = Object.keys(itemData.sections);

    const sections = itemData.sections;

    return (
        <div>
            <h1>{itemData.name}</h1>
            {
                sectionIds.map((sectionId) => {
                    return <PageSection id={sectionId} data={sections[sectionId]} key={sectionId}/>
                })
            }
            <SectionForm name={params.pageID} category={props.category}/>
        </div>
    );
}

export default Page;
