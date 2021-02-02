import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";


export const SidebarData = [
    {
        title: "Dashboard",
        icon: <AiIcons.AiFillHome />,
        path: "/home"
    },
    {
        title: "Test",
        icon: <IoIcons.IoIosDocument />,
        path: "/test",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: "Scenario",
                icon: <IoIcons.IoIosThumbsUp />,
                path: "/test/scenario"
            },
            {
                title: "Moderated test",
                icon: <FaIcons.FaMonero />,
                path: "/test/moderatedtest"
            },
            {
                title: "Survey",
                icon: <BsIcons.BsGraphUp />,
                path: "/test/survey"
            },
            {
                title: "Test product",
                icon: <FaIcons.FaProductHunt />,
                path: "/test/testproduct"
            },
        ]
    },
    {
        title: "Result",
        icon: <AiIcons.AiTwotoneContainer />,
        path: "/result",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: "Analysis",
                icon: <FaIcons.FaCloud />,
                path: "/result/analysis",
            },
            {
                title: "Presentation",
                icon: <AiIcons.AiOutlineFilePpt />,
                path: "/result/presentation",
            },
        ]
    },
    {
        title: "Public Tester",
        icon: <FaIcons.FaLockOpen />,
        path: "/tester",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: "Repertory",
                icon: <RiIcons.RiFolderOpenFill />,
                path: "/tester/repertory",
            },
            {
                title: "Community",
                icon: <BsIcons.BsPeopleFill />,
                path: "/tester/community",
            },
            {
                title: "Test Validation",
                icon: <BsIcons.BsCheckBox />,
                path: "/tester/testvalidation",
            },
            {
                title: "Expert Tester",
                icon: <AiIcons.AiOutlineAudit />,
                path: "/tester/experttester",
            },
        ]
    },

]

