import React, { useState }  from 'react'
// import AddOrder from './AddOrder'
// import TableScroll from './TableScroll'

import '../../../assets/styles/Bookings.css';

 

const Orders = ({ title, tabs = [] }) => {

    const [activeTabIndex, setActiveTabIndex] = useState(0);
    
    const [allTabs, setAllTabs] = useState(tabs);


    const activateTab = (index) => {
        setActiveTabIndex(index);
      };


  return (
    // <div className='content-center'>
    //     <h1>uige</h1>
    //     {/* <TableScroll/> */}
    //     {/* <AddOrder/> */}
    // </div>
    <div className="TabView">
    {title && <h4 className="title">{title}</h4>}
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

export default Orders