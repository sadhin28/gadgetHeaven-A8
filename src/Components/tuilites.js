import { toast } from "react-toastify";

//getdataFromLocalStorage
const getStoredGadgetList =()=>{
    const storedcardlist = localStorage.setItem('gadget-list')
    if(storedcardlist){
        const storedList = JSON.parse(storedcardlist);
        return storedList;
    }else{
        return [];
    }
}

const addtoStoredGadgetList =(id)=>{
      const storedList=getStoredGadgetList();
      if(storedList.includes(id)){
          toast.error("This Product Is exist in the Dashboard")
      }else{
        storedList.push(id);
        const storedLists=JSON.stringify(storedList);
        localStorage.setItem('gadget-list',storedLists)
      }
}

const saveCartToLs = cart =>{
    const cartStringyfy = JSON.stringify(cart);
    localStorage.setItem('gadget-list',cartStringyfy)
}

const removeFromLs= id =>{
    const card = getStoredGadgetList();
    const remaining = card.filter(idx=> idx !== id)
    saveCartToLs (remaining)
}
export {getStoredGadgetList,addtoStoredGadgetList,removeFromLs}