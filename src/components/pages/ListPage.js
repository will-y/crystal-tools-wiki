import { Outlet } from "react-router-dom";

function ListPage(props) {
    // TODO: List all things that are passed in with links
    return (
        <div>
            {props.title}
            <Outlet />
        </div>
    );
}

export default ListPage;
