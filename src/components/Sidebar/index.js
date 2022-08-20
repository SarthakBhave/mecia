import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="schedule" onClick={toggle}>Schedule</SidebarLink>
                    <SidebarLink to="problem-statements" onClick={toggle}>Problem Statements</SidebarLink>
                    <SidebarLink to="prizes" onClick={toggle}>Prizes</SidebarLink>
                    <SidebarLink to="sponsors" onClick={toggle}>Sponsors</SidebarLink>
                    <SidebarLink to="judges" onClick={toggle}>Judges</SidebarLink>
                    <SidebarLink to="FAQs" onClick={toggle}>FAQs</SidebarLink>
                    <SidebarLink to="team" onClick={toggle}>Team</SidebarLink>
                </SidebarMenu>
            
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
