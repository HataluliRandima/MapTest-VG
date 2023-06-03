import React, { useState,useEffect } from 'react'

 
 
import countrydata from './Countrydata.json';
import { Link ,useNavigate  } from 'react-router-dom'

 


  

const TestSelect = () => {

    const[countries, setCountries]=useState(null);

    useEffect(() => {
        fetch("https://localhost:7012/api/Rooms/getallrooms")
          .then((res) => res.json())
          .then((data) => {
             setCountries(data);
            console.log(data);
          });
      }, []);

    const navigate = useNavigate();

    
    

 const[countryid, setCountryid]=useState('');
 const[state, setState]=useState([]);
 const[stateid, setStateid]= useState('');

 const[roomid, setRoomid]=useState('');

 //handle country from api
 const handlecountyAPIAPI=(e)=>{

    fetch("https://localhost:7012/api/Rooms/getallrooms")
    .then((res) => res.json())
    .then((data) => {
       setCountries(data);
      console.log(data);
    });
    const getroomId= e.target.value;
//     const getStatedata= countrydata.find(country=>country.rId===getcountryId).states;
//     setState(getStatedata);
setRoomid(getroomId);
   console.log(getroomId);
  }

 

  const handlecounty=(e)=>{
    const getcountryId= e.target.value;
    const getStatedata= countrydata.find(country=>country.country_id===getcountryId).states;
    setState(getStatedata);
    setCountryid(getcountryId);
  console.log(getcountryId);
  }

  const handlestate = (e)=>{
    const stateid= e.target.value;
    console.log(stateid);
    setStateid(stateid);

  }
const handleSubmit=(e)=>{
e.preventDefault();
alert("Get Country id"+countryid+ " And "+ roomid);
navigate('country/'+roomid);
}




  return (
    <div className="row">
    <div className="col-sm-12">
   <h3 className='mt-3'>Select Country and State from JSON file in React js</h3>
   <form className="row g-3" onSubmit={handleSubmit}>

        <div className="col-md-3">
          <label  className="form-label"> Country</label>            
              <div className="text-dark"> 
                 <select name='country' className='form-control' onChange={(e)=>handlecounty(e)}>
                  <option value="">--Select Country--</option>
                  {
                  countrydata.map( (getcountry,index)=>(
                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option> 
                  ))

                  }
            
              
                  </select>           
              </div>


              <div className="text-dark "> 
                 <select name='country' className='form-control bg-white w-full p-2 flex items-center justify-between rounded' onChange={(e)=>handlecountyAPIAPI(e)}>
                  <option className='p-2 text-sm hover:bg-black hover:text-white' value="">--Select Country--</option>
                  {
                  countries?.map( (getcountry,index)=>(
                    <option className='p-2 text-sm hover:bg-black hover:text-white' value={getcountry.rId} key={index}>{getcountry.rName}</option> 
                  ))

                  }
            
              
                  </select>           
              </div>
              </div>
              

      
              <div className="col-md-2" style={{padding:'9px'}}>
                <label  className="form-label"> </label>            
              <div className="text-white"> 
                <button name='submit' className='btn btn-success bg-black'>Submit</button>
               </div>
              </div>

  </form>
  </div>
  </div>
  )
}

export default TestSelect