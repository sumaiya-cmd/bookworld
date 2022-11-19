import React from 'react';
import './addpet.css'
import { v4 as uuidv4 } from 'uuid';
import { createpets } from './Store/Actions/adminAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const Addpets = () => {

    const navigate = useNavigate();
    const dispatch =useDispatch();

    const submithandler =(e) =>{
        e.preventDefault();
        let data ={
            id:uuidv4(),
            petname :e.target.petname.value ,
            image:e.target.image.value,
            created_at:moment().format("MMM Do YY"),
            updated_at :moment().startOf('hour').fromNow(),
            milk:e.target.milk.value ,
            temp:e.target.temp.value,
            infect:e.target.infect.value,
            health:e.target.health.value,
        }
        // console.log(data);
        dispatch(createpets(data))
        navigate('/dashboard')
    }

    return (
        <div className='addp'>
            <div className="adleft">
                <h3>Add your animal</h3>
            </div>
            <div className="adright">
                <div className="adform">
                    <form onSubmit={submithandler} className='container' encType='multipart/form-data'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">pet name</label>
                    <input type="text" name='petname' class="form-control" placeholder='pet name' aria-describedby="emailHelp" />
                </div> 
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Upload image</label>
                    <input type="text" name='image' placeholder='image url' class="form-control"  />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Milk production </label>
                    <input type="number" class="form-control" name='milk'  aria-describedby="emailHelp" placeholder="mild production /L" />  
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Temperature regulation</label>
                    <input type="number" class="form-control" name='temp' aria-describedby="emailHelp" placeholder="check the temperature" />  
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Any infection rate</label>
                    <input type="text" class="form-control" name='infect'  aria-describedby="emailHelp" placeholder="infection rate" />  
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Other health issues</label>
                    <input type="text" class="form-control"  name='health' aria-describedby="emailHelp" placeholder="health issues" />  
                </div>
                <button type="submit" class="btn btn-lg btn-warning">Submit</button>
            </form>
                </div>
            </div>
            
        </div>
    )
}

export default Addpets ;