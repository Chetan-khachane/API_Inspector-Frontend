import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"


import {
  FlaskConical,
  Gauge,
  History,
  BarChart3,
  Brain,
  Wrench,
} from "lucide-react"
import { Link } from "react-router-dom"

const items = [
  { title: "Test APIs", icon: FlaskConical , endpoint : "/"},
  { title: "Run Load Tests", icon: Gauge ,endpoint : "/load_test"},
  { title: "Request History", icon: History ,endpoint : "/history"},
  { title: "Analytics", icon: BarChart3,endpoint: "/" },
  { title: "AI Analysis", icon: Brain ,endpoint : "/"
  },
]

type menuProp = {
  history : any
}
export default function Menu({history}:menuProp) {


  return (
    <Sidebar>
      <SidebarContent>
        <div className="flex items-center gap-2 px-4 py-3 font-semibold">
          <Wrench className="text-green-500" size={20} />
          API Inspector
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <Link key={item.title} to={item.endpoint}  state={item.title === "Request History" ? { history } : undefined} >
                <SidebarMenuItem >
                  
                      <SidebarMenuButton className="rounded-full">
                        
                    <item.icon className="text-green-500"/>
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                  </Link>

              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  )
}