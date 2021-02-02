import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react';

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 10px; 
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #9B9B9B;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span `
    margin-left: 16px; 
`;

const DropdownLink = styled(Link)`
    background: #0E7140;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
        background: #1070A6;
        cursor: pointer;
    }
`;

const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false)

    const ShowSubnav = () => setSubnav(!subnav);
    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && ShowSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav 
                    ? item.iconOpened 
                    : item.subNav 
                    ? item.iconClosed 
                    : null }
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    );
};

export default SubMenu;