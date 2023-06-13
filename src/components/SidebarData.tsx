import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
        title: 'Domov',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Obľúbené',
        path: '/myhikes',
        icon: <FaIcons.FaHiking />,
        cName: 'nav-text'
    },
    {
        title: 'Dediny',
        path: '/villages',
        icon: <MdIcons.MdHolidayVillage />,
        cName: 'nav-text'
    }
]