import React from "react";

const Folder = ({ explorer }) => {
  console.log(explorer);
  if(explorer.isFolder){
     return (
          <div>
            <div>
              <span>📁 {explorer.name}</span>
            </div>
            <div>
                {
                     explorer.items.map((exp)=>{
                          return <Folder explorer={exp}/>
                     })
                }
            </div>
          </div>
        );
  }else{
     return <span>📄{exp.name}</span>
  }
  
};

export default Folder;
