import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [wishes, setWishes] = useState(data);

  const removeWish = (id) => {
    let newWishes = wishes.filter((wish) => wish.id !==id);
    setWishes(newWishes);
  }

  return (<div>
    <div className='container'>
      <h1>Мои {wishes.length} рождественских желания</h1>
    </div>
    {wishes.map((wish => {
      const {id, name, description, image, link} = wish;
      return (<div key={id}>
        <div className='container'>
          <h2>{id} - {name}</h2>
        </div>
        <div className='container'>
          <p>{description}</p>
        </div>
        <div className='container'>
          <img class="image" src={image} width="350px" alt="wish"/>
        </div>
        <div className='container'>
          <p> 🌐 {link}</p>
        </div>
        <div className='container'>
          <button className='btn' onClick={()=> removeWish(id)}>Удалить</button>
        </div>


      </div>

      )
    }))}




    </div>
      )
}

export default App;