import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={ isOpen } onClick={ toggle }>
      <Icon onClick= { toggle }>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to='about' onClick={ toggle }>About</SidebarLink>
            <SidebarLink to='contact' onClick={ toggle }>Contact</SidebarLink>
            <SidebarLink to='packages' onClick={ toggle }>Packages</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/cart'>Cart</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
