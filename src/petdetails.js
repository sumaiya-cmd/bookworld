import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import './petdetails.css';
import moment  from 'moment';
import { createpetdets } from "./Store/Actions/adminAction";
import { useParams, useNavigate } from 'react-router-dom';

const Petdetails = () => {

    const { petid } = useParams();
    const { pets } = useSelector(state => state.admin)
    const dispatch =useDispatch();

    const data = pets.find(e => e.id === petid)
    const index =pets.findIndex(e => e.id === petid);


    const submithandler =(e)=>{
        e.preventDefault();
        let newdata ={
            ...data,
            details :{
                milk:e.target.milk.value ,
                temp:e.target.temp.value ,
                infect :e.target.value ,
                upadated_at :moment().startOf('hour').fromNow(),
                health :e.target.health.value
            }
             
        }

        dispatch(createpetdets(newdata,index) ) ;
        
    }

    const renderlist = pets[index].details.map((e,id) =>{
        return <div key={id} className="details">
            milk: {e.milk}
            temp :{e.temp}
            infect:{e.infect}
            health:{e.health}
            upadated_at :{e.upadated_at}
        </div>
    })

    console.log(pets[0].details);
    return (
        <div className='petdets'>
            <div className="dethead">
                <div className="detimg">
                <img src={data.image} alt="" />
                </div>
                <div className="dettxt">
                    <h3>{data.petname}</h3>
                </div>
            </div>
            {data.petname}
            {pets[index].details !==[] ? renderlist : ''}
            <div className="detform">
            <form onSubmit={submithandler}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Milk production </label>
                    <input type="text" class="form-control" name='milk'  aria-describedby="emailHelp" placeholder="mild production /L" />  
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Temperature regulation</label>
                    <input type="text" class="form-control" name='temp' aria-describedby="emailHelp" placeholder="check the temperature" />  
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Any infection rate</label>
                    <input type="text" class="form-control" name='infect'  aria-describedby="emailHelp" placeholder="infection rate" />  
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Other health issues</label>
                    <input type="text" class="form-control"  name='health' aria-describedby="emailHelp" placeholder="health issues" />  
                </div>
                <button type="submit" class="btn btn-warning btn-lg text-light">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Petdetails