import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './dashboard.css'
import { useNavigate } from 'react-router-dom';
import { GrUpdate } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { removeadmin , deletepet } from "../Store/Actions/adminAction";

const Dashboard = () => {

  const { pets } = useSelector(state => state.admin)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { logindetails } = useSelector(state => state.admin);

  const clickhandler = () => {
    navigate(`/addpets/${logindetails.name}`)
  }

  const logouthandler =() =>{
    navigate('/login');
    // dispatch(removeadmin)
  }

  const updatehandler=(id) =>{
    navigate(`/Update/${id}`)
  }

  const deletehandler = (id) => {
    // console.log(id);
    dispatch(deletepet(id));
}

  const renderlist = pets.map((e) => {
    return <div key={e.id} class="card" style={{ width: 18 + "rem" }}>
      <img class="card-img-top" src={e.image} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title " style={{color :"#F27203"}}>{e.petname}</h5> 
        <h6 class="card-title" >Temperature : <span style={{opacity :0.6}}>{e.temp}</span> </h6>
        <h6 class="card-title" >Milk production : <span style={{opacity :0.6}}>{e.milk}</span> </h6>
        <h6 class="card-title" >Infection rate : <span style={{opacity :0.6}}>{e.infect}</span> </h6>
        <h6 class="card-title" >Other health issues : <span style={{opacity :0.6}}>{e.health}</span> </h6> <br /> 
        <p class="card-text">created at {e.created_at}</p>
        <p class="card-text">last seen{e.updated_at}</p>
        
        <span onClick={() => updatehandler(e.id)} ><GrUpdate /></span>
        <span style={{fontSize :'20px' , marginLeft : '10px'}} onClick={() => deletehandler(e.id)} ><AiOutlineDelete /></span>
      </div>
      <div class="card-body">
      </div>
    </div>
  })

  return (
    <div className='dashboard'>
      <nav class=" navbar navbar-expand-lg navbar-warning bg-warning">
        <a class="navbar-brand text-light" href="#">Animal world</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <button onClick={logouthandler} class="btn btn-outline-danger my-4 my-sm-0" type="button">log out</button>
        </div>
      </nav>
      <div className="dhead">

        {
          logindetails ? <h1>Hi {logindetails.name} ! we'r excited to see you again</h1> : ''
        }
      </div>

       <div className="pets">
       {
        pets !== [] ? renderlist : <h2>No pets yet</h2>
      }
         </div> 
      <br />
      <button className='btnpet' onClick={clickhandler}>+ Add Another </button>
    </div >
  )
}

export default Dashboard;