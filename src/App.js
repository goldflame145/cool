import './App.css';
import Nav from './Nav';
import About from './About';
import Applictions from './Applictions';
function App() {
  return (
    <div className="App">
      <br/>
      <div className='Trueapp'>
      <center>
<Nav/>
        <div>
<h2>Welcome to the wonderful world of AI</h2>
<p>Explore ai and it's uses history and potential</p>
<img src='https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg'/>
</div>
</center>
</div>
<br/>
<About/>
<br/>
<Applictions/>
    </div>
 

  );
}

export default App;
