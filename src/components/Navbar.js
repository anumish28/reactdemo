import React from 'react'
import '../App.css';
import {SidebarData} from './SidebarData';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';


const Nav = styled.div `
    background: #15171c;
    height: 80px;
    width: 400vw;
    display: flex;
    justify-content: flext-start;
    align-items: center;
`;


const NavIcon = styled(Link)`
    margin-left: 3rem;
    font-size: 2rem;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SideIcon = styled(Link)`
    margin-left: 70rem;
    font-size: 2rem;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav `
    background: #15171c;
    width: 250px;
    height: 480vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    Z-index: 10;
`;

const SidebarWrap = styled.div `
    width: 100%;
`;

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
          <Nav>
            <NavIcon to='#'>
                <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
            <SideIcon>
                <FaIcons.FaExpandArrowsAlt />
            </SideIcon>
           </Nav>
           <SidebarNav sidebar={sidebar}>
             <SidebarWrap>
                <NavIcon to='#'>
                    <AiIcons.AiOutlineClose onClick={showSidebar}/>
                </NavIcon>
                {SidebarData.map((item, index) => {
                  return <SubMenu item={item} key={index} />;
                })}
              </SidebarWrap>
            </SidebarNav>
            </IconContext.Provider>
        </>    
            
    );
};

export default Navbar;
