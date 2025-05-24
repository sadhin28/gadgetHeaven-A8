import {  toast } from 'react-toastify';
const getStoredReadList =()=>{
    const storedListr=localStorage.getItem('gadget-list')
    if(storedListr){
        const storedList = JSON.parse(storedListr);
        return storedList;
    }
    else{
        return [];
    }
}   

const addToStoredReadList=(id,n)=>{
     
    const storedList = getStoredReadList();
    if(storedList.includes(id)){

        toast.error(`This Gadget alrady exists in the Dashboard`)
    }
    else{
        incremen(n)
        storedList.push(id);
        const storedListstr = JSON.stringify(storedList);
        localStorage.setItem('gadget-list',storedListstr)
        toast.success('This Gadget is added the dashboard List')
    }
}

const saveCartToLs = cart =>{
    const cartStringyfy = JSON.stringify(cart);
    localStorage.setItem('gadget-list',cartStringyfy)
}

const removeFromLs =id=>{
  const cart = getStoredReadList();
  //removing every id
  const remaining = cart.filter(idx => idx !== id);
   saveCartToLs(remaining);
}

const incremen =id=>{
      alert(id)
}



export {addToStoredReadList,getStoredReadList,removeFromLs,incremen}