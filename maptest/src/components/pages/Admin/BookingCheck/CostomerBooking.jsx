

import React, { useState } from 'react'
 
import '../../../../assets/styles/Customerbook.css';

const CostomerBooking = ({ title, tabs = [] }) => {


    const [activeTabIndex, setActiveTabIndex] = useState(0);
    
    const [allTabs, setAllTabs] = useState(tabs);


    const activateTab = (index) => {
        setActiveTabIndex(index);
      };

  return (
    <div className="TabView">
    {title && <h4 className="title text-lg text-center underline">{title}</h4>}
    <div className="body shadow-xl shadow-slate-900">
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

export default CostomerBooking