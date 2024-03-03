import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Icon1 from '../../images/img-3.jpeg';
import Icon2 from '../../images/img-4.jpeg';
import Icon3 from '../../images/img-5.jpeg';
import Icon4 from '../../images/img-6.jpg';
import Icon5 from '../../images/img-7.jpg'
import { PackagesContainer, PackagesH1, PackagesWrapper, PackagesCard, PackagesIcon, PackagesH2, PackagesP } from './PackagesElements';

const Packages = () => {

    const { addToCart } = useContext(CartContext);

    const packageData = [
        {
          id: 1,
          icon: Icon1,
          title: 'Package 1',
          description: '10 Sessions With 2 Free Group Sessions',
          price: 375.0
        },
        {
          id: 2,
          icon: Icon2,
          title: 'Package 2',
          description: '8 Sessions With 1 Free Group Session',
          price: 325.0
        },
        {
          id: 3,
          icon: Icon3,
          title: 'Package 3',
          description: '6 Sessions With Paid Group Sessions',
          price: 250.0
        },
        {
          id: 4,
          icon: Icon4,
          title: 'Group Session',
          description: 'Individual Group Session',
          price: 30.0
        },
        {
          id: 5,
          icon: Icon5,
          title: 'Individual Session',
          description: '1-On-1 Training',
          price: 50.0
        }
      ];

      const handleClick = item => addToCart(item);

  return (
    <PackagesContainer id='packages'>
      <PackagesH1>I'll Help You Reach Your Ultimate Goal</PackagesH1>
      <PackagesWrapper>
        { packageData.map((item) => (
            <PackagesCard key={ item.id } onClick={ () => handleClick(item) }>
                <PackagesIcon src={ item.icon }/>
                <PackagesH2>{ item.title }</PackagesH2>
                <PackagesP>{ item.description }</PackagesP>
                <PackagesP>${ item.price }</PackagesP>
            </PackagesCard>
        ))}
      </PackagesWrapper>
    </PackagesContainer>
  );
}

export default Packages;