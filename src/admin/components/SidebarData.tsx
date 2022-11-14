import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';
import * as GrIcons from 'react-icons/gr';
import * as CiIcons from 'react-icons/ci';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        className: 'nav-text',
    },
    
    {
        title: 'Users',
        path: '/users',
        icon: <FiIcons.FiUsers/>,
        className: 'nav-text',
    },

    {
        title: 'User view',
        path: '/user-view',
        icon: <GrIcons.GrView/>,
        className: 'nav-text',
    },

    {
        title: 'Repertoirs',
        path: '/repertoirs',
        icon: <CiIcons.CiViewTimeline/>,
        className: 'nav-text',
    },
    
    {
        title: 'Performances',
        path: '/performances',
        icon: <MdIcons.MdOutlineEventSeat/>,
        className: 'nav-text',
    },

    {
        title: 'Compositions',
        path: '/compositions',
        icon: <BsIcons.BsBook/>,
        className: 'nav-text',
    },

    {
        title: 'Workers',
        path: '/workers',
        icon: <BsIcons.BsPeople/>,
        className: 'nav-text',
    },

    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle/>,
        className: 'nav-text',
    },

    {
        title: 'CourseworkQueries',
        path: '/coursework-queries',
        icon: <BsIcons.BsListTask/>,
        className: 'nav-text',
    },
]
