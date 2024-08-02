import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const hero = ['karim', 'rahim', 'kalam']
  const products = [
    { name: 'Alu', price: '20Tk' },
    { name: 'Dal', price: '25TK' },
    { name: 'Chal', price: '60Tk' }
  ]
  const productNames = products.map(product => product)
  console.log(productNames)
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Loadeed</p>
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            hero.map(hero => <li>{hero}</li>)
          }
        </ul>
        <Person prodcut={products[0]}></Person>
        <Person prodcut={products[1]}></Person>
        <Person prodcut={products[2]}></Person>
      </header>

    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))

  },[])
  console.log(users)
  return (<div>
    <h3>Dynamic use: {users.length}</h3>
    <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </ul>
  </div>)
}

function Person(props) {
  const personStyle = {
    border: '1px solid red',
    borderRadius: '5px',
    margin: '10px',
    width: '200px',
    height: '200px',
    float: 'left',
    backgroundColor: 'white',
    color: 'black'
  }
  const { name, price } = props.prodcut
  return (<div style={personStyle}>
    <h5>{name}</h5>
    <h4>{price}</h4>
    <button>Buy Now</button>
  </div>);
}

function Counter() {
  const [count, setCount] = useState(0);
  const increaseUpdate = () => setCount(count + 1)
  return (<div>
    <h1>{count}</h1>
    <button onClick={increaseUpdate}>Click Me</button>
  </div>)
}

export default App;
