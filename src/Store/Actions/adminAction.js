
import { ADMIN_REQUEST ,ADMIN_FAIL,ADMIN_SUCCESS,CREATE_ADMIN, UPDATE_book,CHECK_ADMIN, CREATE_book, CREATEbook_DETS ,REMOVE_ADMIN , DELETEbook } from "../ActionTypes";

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

export const createbooks = (data) => (dispatch , getstate) =>{
    try {
        
        let newdata =[...getstate().admin.books, data]
        localStorage.setItem('books' , JSON.stringify(newdata))

        dispatch({
            type:CREATE_book ,
            payload:newdata
        })

    } 
    catch (error) {

        dispatch({type:ADMIN_FAIL,
        payload:error})
    }

}

export const createbookdets = (data, index) => (dispatch, getstate) =>{
    try {
        
        let newdata = [...getstate().admin.books , data];
        getstate().admin.books[index] = newdata 
        localStorage.setItem('books' , JSON.stringify(newdata))

        dispatch({
            type: CREATEbook_DETS ,
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
        
        let index = getstate().admin.books.findIndex(e => e.id=== data.id) 
        const copydata = [...getstate().admin.books]
        copydata[index] = data ;

        localStorage.setItem('books' ,JSON.stringify(copydata))

        dispatch({
            type:UPDATE_book,
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

export const deletebook =(id)=> (dispatch , getstate) =>{
    try {
        
        let b = getstate().admin.books.filter((e )=>{
            return e.id !== id
        })
        localStorage.setItem('books', JSON.stringify(b));

        dispatch({
            type:DELETEbook,
            payload : b
        })

    } catch (error) {
        dispatch({
            type:ADMIN_FAIL,
            payload:error
        })
    }
}