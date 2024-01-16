import React from "react";
import '../../../App.css'
function SidePanel() {
  return (
    <ul className="side-panel-container"> 
        <li>
            <div>
                <p style={{border:'1px solid black', width:'30px',height:'30px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center' }}>1</p>
                <div>
                    <p>step1</p>
                    <h4>Your Info</h4> 
                </div>
            </div>
        </li>
    </ul>
  );
}

export default SidePanel;
