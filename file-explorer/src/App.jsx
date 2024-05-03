
import { useState } from 'react'
import './App.css'
import Folder from './components/Folder'
import explorer from './data/folderData';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  return (
    <>
    <Folder explorer={explorerData}/>
    </>
  )
}

export default App
