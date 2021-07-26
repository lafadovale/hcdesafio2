import React, { useState, useEffect } from 'react';
import Cart from '../../assets/cart.png';
import { Container } from './styles';
import api from '../../services/api';


interface IProduct{
  id: number;
  photo: string;
  alt: string;
  name: string;
  description: string;
  price: number;
}

const Shop: React.FC = () => {
  const [ data, setData ] = useState<IProduct[]>([]);
  const [ cart, setCart ] = useState<IProduct[]>([]);


  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data);
      }
    )
  }, []);

  const handleCart = (index: number) => {
    let push: any = [...cart, cart.push(data[index])];
    setCart(push);
    const productStore = JSON.stringify(cart);
    localStorage.setItem('@cart', productStore);
  }

  return (
    <Container>
      <div className="nav">
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/VTEX_Logo.svg/320px-VTEX_Logo.svg.png" alt="vtex" width="200px" height="auto"/>
        </div>
        <div className="cart">
          <img src={Cart} alt="cart" width="50px" height="auto"/>
          <span>( {cart.length} ) - Itens</span>
        </div>
      </div>
        <h1>Bota-fora VTEX: produtos usados pelas nossas equipes, em estado de novos.</h1>
      <section>
        { data.map( (prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt={prod.alt} width="200" height="auto" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>{prod.price}</h6>
            <button onClick={() => handleCart(index)}>Tenho interesse!</button>
          </div>
        ))}
      </section>
      <div className="newsletter">
        
      </div>
      <footer>
            <p>©2021 Lafaiete do Vale - Sao Paulo, Brazil - All rights reserved.</p>
      </footer>
    </Container>
  );
}

export default Shop;