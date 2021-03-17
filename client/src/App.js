import React from 'react';
import {Typography,Icon} from 'antd';
import ChatApp from './components/ChatApp';

const {Title} = Typography;

function App() {
  return (
    <div>
      <div style={{display:'flex', justifyContent:'center', marginTop: '2rem'}}>
        <Title level={2}>Chat App&nbsp;<Icon type="robot"/></Title>
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <ChatApp/>
      </div>
    </div>
  )
}

export default App
