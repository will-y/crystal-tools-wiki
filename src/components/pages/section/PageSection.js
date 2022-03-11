import './Section.css';
import SectionImage from "./SectionImage";

function PageSection(props) {
    const itemData = props.data;
    const images = separateImages(itemData.images);

    return (
        <div className="section-container m-2">
            <h2 className="section-title pb-1">{itemData.title}</h2>
            <div className="row">
                <div className={"section-text-container " + (images[0].length > 0 ? "col-md-9" : "")}>
                    <p className="section-text">{itemData.text}</p>
                </div>
                <div className={"section-images " + (images[0].length > 0 ? "col-md-3" : "")}>
                    {
                        images[0].map((image, index) => {
                            return (
                                <SectionImage link={image.link} caption={image.caption} key={index}/>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

function separateImages(imageList) {
    const result = [[], []];

    for (let i = 0; i < imageList.length; i++) {
        if (imageList[i].inline) {
            result[0].push(imageList[i]);
        } else {
            result[1].push(imageList[i]);
        }
    }

    return result;
}

export default PageSection;
