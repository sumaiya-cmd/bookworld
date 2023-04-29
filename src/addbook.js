import React from 'react';
import './addbook.css'
import { v4 as uuidv4 } from 'uuid';
import { createbooks } from './Store/Actions/adminAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const Addbooks = () => {

    const navigate = useNavigate();
    const dispatch =useDispatch();

    const submithandler =(e) =>{
        e.preventDefault();
        let data ={
            id:uuidv4(),
            booktitle :e.target.booktitle.value ,
            image:e.target.image.value,
            created_at:moment().format("MMM Do YY"),
            updated_at :moment().startOf('hour').fromNow(),
            author:e.target.author.value,
            genre:e.target.genre.value,
        }
        // console.log(data);
        dispatch(createbooks(data))
        navigate('/dashboard')
    }

    return (
        <div className='addp'>
            <div className="adleft">
                <h3>Add Books</h3>
            </div>
            <div className="adright">
                <div className="adform">
                    <form onSubmit={submithandler} className='container' encType='multipart/form-data'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">book title</label>
                    <input type="text" name='booktitle' class="form-control" placeholder='book title' aria-describedby="emailHelp" />
                </div> 
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Upload image</label>
                    <input type="text" name='image' placeholder='book image url' class="form-control"  />
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Author Name</label>
                    <input type="text" class="form-control" name='author'  aria-describedby="emailHelp" placeholder="Author Name" />  
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Genre</label>
                    <input type="text" class="form-control"  name='genre' aria-describedby="emailHelp" placeholder="genre" />  
                </div>
                <button type="submit" class="btn btn-lg btn-warning">Submit</button>
            </form>
                </div>
            </div>
            
        </div>
    )
}

export default Addbooks ;