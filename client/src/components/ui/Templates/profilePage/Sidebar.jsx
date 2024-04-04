import { Link, Outlet } from "react-router-dom"
import {
  Home,
  Package2,
  MessageSquare
} from "lucide-react"




import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "../../tooltip"



function Sidebar() {
  return (
<>
    <aside className="fixed inset-y-0 left-0 z-10  w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          to="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/profile"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Profile</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/profile/chat"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">Chat</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Chat</TooltipContent>
          </Tooltip>
        </TooltipProvider>

      </nav>
    </aside>
<Outlet></Outlet>
</>
  )
}

export default Sidebar

