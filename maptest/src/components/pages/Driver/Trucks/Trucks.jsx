import React, { useState,Fragment } from 'react'
 
import '../../../../assets/styles/Trucks.css';
import AddTrucks from './AddTrucks';

const Trucks = ({ title, tabs = [] }) => {


    const [activeTabIndex, setActiveTabIndex] = useState(0);
    
    const [allTabs, setAllTabs] = useState(tabs);

    const [showModal, setShowModal] =useState(false);


    const activateTab = (index) => {
        setActiveTabIndex(index);
      };

  return (
    <Fragment>
    <div className="TabView">
    {title && <h4 className="title text-lg font-bold capitalize text-center underline">{title}</h4>}
    <div class="flex flex-col items-end justify-end">
    <button class="bg-black hover:bg-black text-white font-bold py-2 px-4 pl-2 rounded
   mb-4   " onClick={()=> setShowModal(true)}>

 Add Truck
</button>
  </div>
    <div className="body">
      {allTabs.length === 0 ? (
        <div className="tabs">
          <div>No Tabs</div>
          {/* {editable ? NewTabButton : null} */}
        </div>
      ) : (
        <div>
          <div className="tabs">
            {allTabs.map((tab, index) => (
              <label
                key={index}
                className={index === activeTabIndex ? "active-tab" : "tab"}
                onClick={() => activateTab(index)}
              >
                {tab.name}
              </label>
            ))}
            {/* {editable ? NewTabButton : null} */}
          </div>
          <div className="content">{allTabs[activeTabIndex].content}</div>
        </div>
      )}
    </div>
  </div>
    <AddTrucks isVisible={showModal} onClose={()=> setShowModal(false)} >
    <div className='py-6 px-6 lg:px-8 text-left' >
       <h3 className='mb-4 text-xl font-medium text-gray-900'>Upload Your Vehicle Information</h3>
       <form className='space-y-6' action='#'>
          <div>
            <label for="name" className='block mb-2 text-sm font-medium text-gray-900'>
               Vehicle Name
            </label>
             <input type='text' name='name' id='name'
             className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
             placeholder='Name of a truck'
             required />
              
          </div>
           
           <div>
           <label for="Model" className='block mb-2 text-sm font-medium text-gray-900'>
               Model Of the Truck
            </label>
             <input type='text' name='Model' id='Model'
             className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
             placeholder='Kind of a car'
             required />
           </div>
           <div>
           <label for="type" className='block mb-2 text-sm font-medium text-gray-900'>
               Type Of the Truck
            </label>
             <input type='text' name='type' id='type'
             className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
             placeholder='Type of a car'
             required />
           </div>
           <div>
           <label for="regplate" className='block mb-2 text-sm font-medium text-gray-900'>
               Regplate Of the Truck
            </label>
             <input type='text' name='regplate' id='regplate'
             className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
             placeholder='Number plate of the truck'
             required />
           </div>

           <div>
           <label for="papers" className='block mb-2 text-sm font-medium text-gray-900'>
              Vechicle Papers
            </label>
             <input type='file' name='papers' id='papers'
             className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
             placeholder=''
             required />
           </div>
           <button 
           type='submit'
           className='w-full text-white bg-black  focus:ring focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
              Submit
           </button>
       </form>
    </div>
   </AddTrucks>
   </Fragment>
  )
}

export default Trucks