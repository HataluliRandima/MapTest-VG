import React, { useState,Fragment } from 'react'
 
import '../../../../assets/styles/Trucks.css';
 

const OrdersDriver = ({ title, tabs = [] }) => {


    const [activeTabIndex, setActiveTabIndex] = useState(0);
    
    const [allTabs, setAllTabs] = useState(tabs);

    const [showModal, setShowModal] =useState(false);


    const activateTab = (index) => {
        setActiveTabIndex(index);
      };

  return (
     
    <div className="TabView">
    {title && <h4 className="title text-lg font-bold capitalize text-center underline">{title}</h4>}
    <div class="flex flex-col items-end justify-end">
    {/* <button class="bg-black hover:bg-black text-white font-bold py-2 px-4 pl-2 rounded
   mb-4   " >

 Add Truck
</button> */}
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
   
  )
}

export default OrdersDriver