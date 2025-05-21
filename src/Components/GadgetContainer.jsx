import { useLoaderData, useParams } from "react-router-dom";

const GadgetContainer = () => {
     const obj=useParams();
     const gadets = useLoaderData();
     
     const  gadegetData = gadets.filter(data=>data.category === obj.category)
     console.log(gadegetData)
    return (
        <div>
            <h1>hi</h1>
        </div>
    );
};

export default GadgetContainer;