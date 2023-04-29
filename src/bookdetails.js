import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import './bookdetails.css';
import moment  from 'moment';
import { createbookdets } from "./Store/Actions/adminAction";
import { useParams, useNavigate } from 'react-router-dom';

const bookdetails = () => {

    const { bookid } = useParams();
    const { books } = useSelector(state => state.admin)
    const dispatch =useDispatch();

    const data = books.find(e => e.id === bookid)
    const index =books.findIndex(e => e.id === bookid);


    const submithandler =(e)=>{
        e.preventDefault();
        let newdata ={
            ...data,
            details :{
                booktitle :e.target.value ,
                author :e.target.value ,
                genre :e.target.value ,
                upadated_at :moment().startOf('hour').fromNow(),
                health :e.target.health.value
            }
             
        }

        dispatch(createbookdets(newdata,index) ) ;
        
    }

    const renderlist = books[index].details.map((e,id) =>{
        return <div key={id} className="details">
            booktitle:{e.booktitle}
            author:{e.author}
            genre:{e.genre}            
            upadated_at :{e.upadated_at}
        </div>
    })

    console.log(books[0].details);
    return (
        <div className='bookdets'>
            <div className="dethead">
                <div className="detimg">
                <img src={data.image} alt="" />
                </div>
                <div className="dettxt">
                    <h3>{data.bookname}</h3>
                </div>
            </div>
            {data.bookname}
            {books[index].details !==[] ? renderlist : ''}
            <div className="detform">
            <form onSubmit={submithandler}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Book title</label>
                    <input type="text" class="form-control" name='booktitle'  aria-describedby="emailHelp" placeholder="book title" />  
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Author</label>
                    <input type="text" class="form-control"  name='author' aria-describedby="emailHelp" placeholder="Author" />  
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Genre</label>
                    <input type="text" class="form-control"  name='genre' aria-describedby="emailHelp" placeholder="genre" />  
                </div>
                <button type="submit" class="btn btn-warning btn-lg text-light">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default bookdetails ;