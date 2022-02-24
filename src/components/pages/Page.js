import {useParams} from "react-router-dom";

function Page(props) {
    let params = useParams();
    // TODO: Page for single item
    return (
        <div>{params.pageID}</div>
    );
}

export default Page;
