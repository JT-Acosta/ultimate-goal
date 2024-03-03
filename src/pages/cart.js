import React, { useContext } from 'react';
import { CartContext } from '../components/Context/CartContext'
import { FaBitbucket } from 'react-icons/fa';
import { PageContainer, Logo, CartContainer, CartH2, CartList, CartListItem, CartTotal, CheckoutContainer, CheckoutBtn } from './CartElements';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemove = id => removeFromCart(id);

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  

  return (
    <PageContainer>
        <Link>
            <Logo to='/'>Ultimate Goal</Logo>
        </Link>
        <CartContainer>
            <CartH2> Your Cart</CartH2>
            <CartList>
                {cartItems.map((item) => (
                    <CartListItem key={item.id}>{item.title} - ${item.price}
                    <FaBitbucket onClick={ () => handleRemove(item.id) }></FaBitbucket>
                    </CartListItem>
                ))}
            </CartList>
            <CartTotal>Total: ${totalPrice}</CartTotal>
        </CartContainer>
        <CheckoutContainer>
            <CheckoutBtn>CheckOut</CheckoutBtn>
        </CheckoutContainer>
    </PageContainer>
  );
}

export default Cart;

/*<FormWrap>
        <Icon to='/'>Ultimate Goal</Icon>
        <FormContent>
           <Form action='#'>
            <FormH1>Your Cart</FormH1>

           </Form>
        </FormContent>
</FormWrap>*/