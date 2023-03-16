import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Saved Hikes',
        path: '/myhikes',
        icon: <FaIcons.FaHiking />,
        cName: 'nav-text'
    },
    {
        title: 'Villages',
        path: '/villages',
        icon: <MdIcons.MdHolidayVillage />,
        cName: 'nav-text'
    },
    {
        title: 'Ski',
        path: '/ski',
        icon: <FaIcons.FaSkiing />,
        cName: 'nav-text'
    },
    {
        title: 'Account',
        path: '/account',
        icon: <MdIcons.MdAccountBox />,
        cName: 'nav-text'
    },
]