import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const GadgetContainer = () => {
     const obj=useParams();
     const gadets = useLoaderData();
     
     const  gadegetData = gadets.filter(data=>data.category.includes(obj.category))
     
    return (
        <div className="grid justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              gadegetData.map(product=><Card key={product.id} product={product}></Card>)
            }
        </div>
    );
};

export default GadgetContainer;