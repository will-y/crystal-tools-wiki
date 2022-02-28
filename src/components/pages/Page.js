import {useParams} from "react-router-dom";
import SectionForm from "../modals/SectionForm";

function Page(props) {
    const params = useParams();
    const itemData = props.data[params.pageID];

    return (
        <div>
            <h1>{itemData.name}</h1>
            <SectionForm name={params.pageID} category={props.category}/>
        </div>
    );
}

export default Page;
