import { useEffect, useState } from 'react';
import './App.css';
import Quote from './components/quote/quote';


function App() {
  const [realTime, setRealTime] = useState("");
  const [greetings, setGreetings] = useState("");
  const [background, setBackground] = useState();
  

  const times = new Date();
  const hours= times.getHours();
  var amPm = hours > 12 ? "PM" : "AM";

useEffect(() => {
    if( 12 >= hours >= 5 ) {
      setGreetings("Good Morning Man!");
      setBackground("url(https://c4.wallpaperflare.com/wallpaper/982/462/376/dota-demon-shadow-fiend-nevermore-wallpaper-preview.jpg)");
    }
    else if( 18 >= hours >= 22 ) {
      setGreetings("Good Afternoon Sir!");
      setBackground("url(https://c4.wallpaperflare.com/wallpaper/809/348/943/dota-2-shadow-fiend-art-dark-wallpaper-preview.jpg)");
    }
    else if( 24 >= hours >= 18 ) {
      setGreetings("Good Evening Gentleman!");
      setBackground("url(https://7wallpapers.net/wp-content/uploads/1_Dota2-Nyx-Assassin.jpg)");
    }
    else {
      setGreetings("Good Night MyLady!")
      setBackground("url(https://c4.wallpaperflare.com/wallpaper/27/908/974/dota-2-shadow-fiend-video-games-nevermore-wallpaper-preview.jpg)");
    }
}, [])

  const updateTime = () => {
    const times = new Date();

    const hours= times.getHours().toString().padStart(2, "0");
    const minutes= times.getMinutes().toString().padStart(2, "0");
    const seconds= times.getSeconds().toString().padStart(2, "0");

    setRealTime(`${hours}: ${minutes}: ${seconds}`);
  }
  setInterval(updateTime, 1000);
  clearInterval(setInterval);
  
  return (
      <div className='App' style={{backgroundImage: background}}>
        <Quote/>
          <div className='clock_container'>
            <h2 className='greetings'>{greetings}</h2>
            <span className='clock'>{realTime}</span>
            <span className='ampm'>{amPm}</span>
          </div>
      </div>
  );
}

export default App;
