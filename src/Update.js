import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams , useNavigate } from 'react-router-dom';
import moment from 'moment'
import { updateblog } from "./Store/Actions/adminAction";

const Update = () => {

    const {books} = useSelector(state => state.admin)
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate =useNavigate();

    const data = books.find(e => e.id === id);

    const submithandler = (e) =>{
        e.preventDefault() ;

        const datablog = {
            ...data,
            booktitle :e.target.booktitle.value ,
            author:e.target.author.value ,
            genre :e.target.genre.value ,
            updated_at :moment().startOf('hour').fromNow(),
        }

        dispatch(updateblog(datablog))
        navigate('/dashboard')
    } 

  return data ?
        (<div>
            <form onSubmit={submithandler} className='container'>
                <div className="mb-3 mt-4">
                    <label  for="exampleInputEmail1" className="form-label">Book title</label>
                    <input name='booktitle' type="text" defaultValue={data.booktitle} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">author</label>
                    <input name='author' type="text" defaultValue={data.author} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Genre
                    </label>
                    <input name='genre' type="text" defaultValue={data.genre} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>) :''
  
}

export default Update