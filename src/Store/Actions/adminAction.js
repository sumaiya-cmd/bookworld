
import { ADMIN_REQUEST ,ADMIN_FAIL,ADMIN_SUCCESS,CREATE_ADMIN, UPDATE_PET,CHECK_ADMIN, CREATE_PET, CREATEPET_DETS ,REMOVE_ADMIN , DELETEPET } from "../ActionTypes";

export const loading = () =>(dispatch) =>{
    try {
        dispatch({type:ADMIN_REQUEST})
        
        setTimeout(() => {
            let data =JSON.parse( localStorage.getItem('admin')) || [];

            dispatch({
                type:ADMIN_SUCCESS,
                payload:data
            })
        }, 2000);
    } 
    catch (error) {
        dispatch({
            type:ADMIN_FAIL,
            payload:error
        })
    }
}

export const createadmin =(data) => (dispatch , getstate) =>{
    try {
        let newdata = [...getstate().admin.admindetails , data]
        localStorage.setItem('admin' ,JSON.stringify(newdata))

        dispatch({
            type:CREATE_ADMIN,
            payload:newdata
        })
    } 
    catch (error) {
        dispatch({
            type:ADMIN_FAIL,
            payload:error
        })
    }
}

export const loginadmin =(data) =>(dispatch , getstate) =>{
    try {

        localStorage.setItem('l_admin', JSON.stringify(data))

        dispatch({
            type:CHECK_ADMIN ,
            payload:data
        })
    } 
    catch (error) {
        dispatch({
            type:ADMIN_FAIL ,
            payload :error
        })
    }
}

export const createpets = (data) => (dispatch , getstate) =>{
    try {
        
        let newdata =[...getstate().admin.pets, data]
        localStorage.setItem('pets' , JSON.stringify(newdata))

        dispatch({
            type:CREATE_PET ,
            payload:newdata
        })

    } 
    catch (error) {

        dispatch({type:ADMIN_FAIL,
        payload:error})
    }

}

export const createpetdets = (data, index) => (dispatch, getstate) =>{
    try {
        
        let newdata = [...getstate().admin.pets , data];
        getstate().admin.pets[index] = newdata 
        localStorage.setItem('pets' , JSON.stringify(newdata))

        dispatch({
            type: CREATEPET_DETS ,
            payload:newdata
        })
    } 
    catch (error) {
        dispatch({
            type:ADMIN_FAIL ,
            payload:error
        })
    }
}

export const  updateblog =(data) => (dispatch , getstate) =>{
    try {
        
        let index = getstate().admin.pets.findIndex(e => e.id=== data.id) 
        const copydata = [...getstate().admin.pets]
        copydata[index] = data ;

        localStorage.setItem('pets' ,JSON.stringify(copydata))

        dispatch({
            type:UPDATE_PET,
            payload:copydata
        })

    } 
    catch (error) {
        dispatch({
            type:ADMIN_FAIL,
            payload:error
        })
    }
}

export const removeadmin =() => (dispatch) =>{
    try {
        
        dispatch({type:REMOVE_ADMIN})

    } catch (error) {
        dispatch({
            type:ADMIN_FAIL,
            payload:error
        })
    }
}

export const deletepet =(id)=> (dispatch , getstate) =>{
    try {
        
        let b = getstate().admin.pets.filter((e )=>{
            return e.id !== id
        })
        localStorage.setItem('pets', JSON.stringify(b));

        dispatch({
            type:DELETEPET,
            payload : b
        })

    } catch (error) {
        dispatch({
            type:ADMIN_FAIL,
            payload:error
        })
    }
}