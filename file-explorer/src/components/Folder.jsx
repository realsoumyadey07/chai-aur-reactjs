import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput ] = useState({
    visible: false,
    isFolder: null
  });
  const handleNewFolder = (e, isFolder)=>{
    e.stopPropagation();
    setShowInput({
      visible: true,
      isFolder
    })
  }
  console.log(explorer);
  if(explorer.isFolder){
     return (
          <div style={{cursor: 'pointer', width: '300px'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}} onClick={()=>setExpand(!expand)}>
              <span>📁 {explorer.name}</span>
              <div>
                <button onClick={(e)=>handleNewFolder(e, true)}>Add folder+</button>
                <button onClick={(e)=>handleNewFolder(e, false)}>Add file+</button>
              </div>
            </div>
            <div style={{display: expand? "block": "none", paddingLeft:'10px'}}>
              {
                showInput.visible && (
                  <div>
                    <span>{showInput.isFolder? "📁": "📄"}</span>
                    <input type="text" />
                  </div>
                )
              }
                {
                     explorer.items.map((exp)=>{
                          return <Folder key={exp.id} explorer={exp}/>
                     })
                }
            </div>
          </div>
        );
  }else{
     return <div>📄{explorer.name}</div>
  }
  
};

export default Folder;
