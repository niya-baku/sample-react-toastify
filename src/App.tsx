import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const morningTime = [8,9,10,11]
  const afternoon = [12,13,14,15,16,17]
  const endTime = [18,19,20,21,22,23]
 
  const sampleDate = new Date() 
  const sampleDate2 = sampleDate.getHours() 
  const sampleDate3 = 18

  const notify4 = (time: number) => {
    if(morningTime.includes(time)){
      toast("〇〇を投稿しました。今日も１日がんばりましょう！")
    }else if(afternoon.includes(time)){
      toast("〇〇を投稿しました。午後もがんばりましょう！")
    }else if(endTime.includes(time)){
      toast("〇〇を投稿しました。今日も１日お疲れさまでした！")
    }else{
      toast("〇〇を投稿しました")
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <button onClick={() => notify4(sampleDate2)}>please Button notify4</button>
      <ToastContainer />
      </header>
    </div>
  );
}

export default App;
