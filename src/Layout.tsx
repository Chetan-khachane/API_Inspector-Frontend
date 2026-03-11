import { Outlet } from "react-router-dom"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import Menu from "./components/Menu"
import axios from "axios"
import React from "react"
import { useState,useEffect } from "react"

export default function Layout() {
    const [history,setHistory] = useState({})

  const fetchHistory = async() =>{
     const response =  await axios.get("http://127.0.0.1:5001/api/history")
     setHistory(response.data)
  }

  useEffect(()=>{
      fetchHistory()
  },[])
     console.log(history)

  return (
    <SidebarProvider>
      <Menu history={history}/>

      <SidebarInset>
        <div className="p-6">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}