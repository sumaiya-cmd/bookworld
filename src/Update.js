import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams , useNavigate } from 'react-router-dom';
import moment from 'moment'
import { updateblog } from "./Store/Actions/adminAction";

const Update = () => {

    const {pets} = useSelector(state => state.admin)
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate =useNavigate();

    const data = pets.find(e => e.id === id);

    const submithandler = (e) =>{
        e.preventDefault() ;

        const datablog = {
            ...data,
            milk :e.target.milk.value ,
            temp :e.target.temp.value ,
            infect:e.target.infect.value ,
            health :e.target.health.value ,
            updated_at :moment().startOf('hour').fromNow(),
        }

        dispatch(updateblog(datablog))
        navigate('/dashboard')
    } 

  return data ?
        (<div>
            <form onSubmit={submithandler} className='container'>
                <div className="mb-3 mt-4">
                    <label  for="exampleInputEmail1" className="form-label">Temperature</label>
                    <input name='temp' type="text" defaultValue={data.temp} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Milk production</label>
                    <input name='milk' type="text" defaultValue={data.milk} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> 
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Infection rates</label>
                    <input name='infect' type="text" defaultValue={data.infect} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Other health issues
                    </label>
                    <input name='health' type="text" defaultValue={data.health} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>) :''
  
}

export default Update