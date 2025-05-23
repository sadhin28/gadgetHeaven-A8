import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const GadgetContainer = () => {
     const obj=useParams();
     const gadets = useLoaderData();
     
     const  gadegetData = gadets.filter(data=>data.category.includes(obj.category))
     console.log(gadegetData)
    return (
        <div>
            {
              gadegetData.map(product=><Card key={product.id} product={product}></Card>)
            }
        </div>
    );
};

export default GadgetContainer;