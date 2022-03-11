import './Section.css';
import SectionImage from "./SectionImage";
import breakIntoRows from "../../../utils/ArrayUtils";

function PageSection(props) {
    const itemData = props.data;
    const images = separateImages(itemData.images);

    const nonInlineImages = breakIntoRows(images[1], 4);

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
            {
                nonInlineImages.map((imageRow, rowIndex) => {
                    return (
                        <div className="row" key={`row-${rowIndex}`}>
                            {
                                imageRow.map((image, index) => {
                                    return (
                                        <div className="col-md-3" key={`row-${rowIndex}-col-${index}`}>
                                            <SectionImage link={image.link} caption={image.caption} />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

function separateImages(imageList) {
    const result = [[], []];

    if (! imageList) {
        return result;
    }

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
