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

const addToStoredReadList=(id)=>{
     
    const storedList = getStoredReadList();
    if(storedList.includes(id)){

        toast.error(`This Gadget alrady exists in the Dashboard`)
    }
    else{
        
        storedList.push(id);
        const storedListstr = JSON.stringify(storedList);
        localStorage.setItem('gadget-list',storedListstr)
        toast.success('This Gadget is added the dashboard List')
        handelincrement()
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

  
const handelincrement =()=>{
        counts()
}
const  counts =(count,setcount)=>{
     setcount
}


//wish list
const getStoredwhishesList =()=>{
    const storedListr=localStorage.getItem('whish-list')
    if(storedListr){
        const storedList = JSON.parse(storedListr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredwishesList=(id)=>{
    const storedList =  getStoredwhishesList();
    if(storedList.includes(id)){

        toast.error(`This Gadeget alrady exists in the wishList`)
    }
    else{
        storedList.push(id);
        const storedListstr = JSON.stringify(storedList);
        localStorage.setItem('whish-list',storedListstr)
        toast.success('Wishes The Gadgets')
    }
}

export {addToStoredReadList,getStoredReadList,removeFromLs,addToStoredwishesList,getStoredwhishesList}