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
        
      }
}
export {getStoredGadgetList,addtoStoredGadgetList}