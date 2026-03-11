import { SidebarProvider } from "@/components/ui/sidebar"
import { Sidebar } from "@/components/ui/sidebar"
import Menu from "./components/Menu"
import Home from "./pages/Home"
import LoadTest from "./pages/LoadTest"
import { Routes, Route } from "react-router-dom"

import History from "./pages/History"
import Layout from "./Layout"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/load_test" element={<LoadTest/>}/>
        <Route path="/history" element={<History/>}/>
      </Route>
    </Routes>
  )
}