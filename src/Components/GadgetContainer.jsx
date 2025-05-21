import { useLoaderData, useParams } from "react-router-dom";

const GadgetContainer = () => {
    const gadgetdata = useLoaderData();
    console.log(gadgetdata)
    const obj = useParams();
    const gadgets= gadgetdata.filter(data=>data.category === obj.category)
   
    return (
        <div>
            <h1>hi</h1>
        </div>
    );
};

export default GadgetContainer;