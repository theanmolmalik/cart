import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
    return async(dispatch) =>{
        const fetchHandler = async() =>{
            const res = await fetch('https://redux-http-f907b-default-rtdb.firebaseio.com/cartItems.json');
            const data = await res.json();
            return data;
        }
        try{
            const cartData = await fetchHandler();
            dispatch(cartActions.replaceData(cartData));
        }catch(err){
            dispatch(uiActions.showNotification({
                open:true,
                message:"Sending Request Failed.",
                type:"error"
            })); 
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
            open:true,
            message:"Sending Request",
            type:"warning"
        })); 

        const sendRequest = async () => {
      
            const res = await fetch('https://redux-http-f907b-default-rtdb.firebaseio.com/cartItems.json',{
              method: "PUT",
              body: JSON.stringify(cart)
            });
            const data = await res.json();
            console.log(data);
            dispatch(uiActions.showNotification({
              open:true,
              message:"Send Request to Database successfully.",
              type:"success"
            })); 
        }

        try{
            await sendRequest();
        }catch(err){
            dispatch(uiActions.showNotification({
                open:true,
                message:"Sending Request Failed.",
                type:"error"
            })); 
        }
    }
}