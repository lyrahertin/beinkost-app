import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import {BsFillGrid1X2Fill} from 'react-icons/bs';  
import {MdMapsHomeWork} from 'react-icons/md'


export const SidebarData = [
    {
        title: "Dashboard",
        icon: <BsFillGrid1X2Fill/>,
        link: "/"
    },
    {
        title: "Data Kos",
        icon: <MdMapsHomeWork/>,
        link: "/Data_Kos"
    },
    {
        title: "Karyawan",
        icon: <DashboardIcon/>,
        link: "/Karyawan"
    },
    {
        title: "Tamu",
        icon: <DashboardIcon/>,
        link: "/Tamu"
    },
    {
        title: "Manajemen Kontrak",
        icon: <DashboardIcon/>,
        link: "/Manajemen_Kontrak"
    },
    {
        title: "Manajemen Plan",
        icon: <DashboardIcon/>,
        link: "/Manajemen_Plan"
    },
    {
        title: "Invoice",
        icon: <DashboardIcon/>,
        link: "/Invoice"
    }
]
