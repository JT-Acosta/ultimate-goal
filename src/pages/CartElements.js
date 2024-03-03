import styled from 'styled-components';

export const PageContainer = styled.div`
  background-color: #01bf71; /* Green background color */
  min-height: 100vh; /* Ensure the container covers the entire viewport height */
  display: flex;
  align-items: center; /* Center items vertically */
  justify-content: center; /* Center items horizontally */
`;

export const Logo = styled.div`
  position: absolute;  
  top: 20px;
  left: 20px;
  font-size: 1.5rem; /* Adjust font size as needed */
  color: #ffffff; /* White text color */
  cursor: pointer; /* Change cursor to pointer on hover for better UX */
  justify-self: flex-start;
  margin-left: 24px; 
  font-weight: bold; 
  text-decoration: none;
`;

export const CartContainer = styled.div`
  background-color: #ffffff; /* White background color for the cart container */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CartH2 = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const CartList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const CartListItem = styled.li`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px; /* Adjust width as needed */
`;

export const TrashIconWrapper = styled.div`
  margin-left: 10px; /* Adjust margin to move the icon closer */
`;

export const CartTotal = styled.div`
  font-size: 20px;
  margin-top: 20px;
`;

export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 10px;
`;

export const CheckoutBtn = styled.button`
    border-radius: 50px;
    background: #fff;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #010606;
        color: #fff;
    }
`;