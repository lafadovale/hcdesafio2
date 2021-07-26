import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: auto;

  h1 {
    color: #444;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .cart {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  section {
    height: auto;
    width: 100%;
    background: #e2e2;
    border-radius: 15px 15px 0 0;
    display: flex;
    justify-content: space-around;

    .product-content {
      display: grid;
      text-align: center;
      height: 400px;
      background: #fff;
      border-radius: 12px;
      padding: 12px;
      margin: 20px;
    }
  }

  .newsletter {
    height: auto;
    width: 100%;
    background: #666;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .form {
      color: #fff;
      padding: 20px;
    }
  }

  footer {
    height: 40px;
    width: 100%;
    background: #666;
    color: #eee;
    border-radius: 0 0 15px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`