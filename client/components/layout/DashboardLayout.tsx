import { ReactNode, useState } from "react";
import {
  Bell,
  Search,
  User,
  Home,
  TrendingUp,
  BookOpen,
  Target,
  Award,
  FileText,
  Users,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface DashboardLayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: "Dashboard", href: "/", icon: Home, current: true },
  {
    name: "Progress Tracker",
    href: "/progress",
    icon: TrendingUp,
    current: false,
  },
  { name: "Courses", href: "/courses", icon: BookOpen, current: false },
  { name: "GPA Booster", href: "/gpa-booster", icon: Target, current: false },
  { name: "Activities", href: "/activities", icon: Award, current: false },
  { name: "Research", href: "/research", icon: FileText, current: false },
  { name: "Network", href: "/network", icon: Users, current: false },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container flex h-12 items-center justify-between px-3 md:px-4">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden h-8 w-8 p-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>

          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-7 w-7 rounded-md bg-primary flex items-center justify-center">
                <Target className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">
                GradPrep
              </span>
            </div>
          </div>

          {/* Search */}
          <div className="hidden sm:flex flex-1 max-w-sm mx-4 md:mx-6">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-8 pr-3 h-8 text-sm w-full"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-2">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative h-8 w-8 p-0">
              <Bell className="h-4 w-4" />
              <Badge
                variant="destructive"
                className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full p-0 text-[10px] leading-none flex items-center justify-center"
              >
                3
              </Badge>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full p-0"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback className="text-xs">
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">Alex Johnson</p>
                    <p className="text-xs text-muted-foreground">
                      Computer Science, Junior
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help & Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Mobile Sidebar Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`
          fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-56 md:flex md:flex-col
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <div className="flex grow flex-col gap-y-4 overflow-y-auto bg-card px-4 pb-3 pt-12 md:pt-4">
            <nav className="flex flex-1 flex-col pt-4">
              <ul role="list" className="flex flex-1 flex-col gap-y-5">
                <li>
                  <ul role="list" className="-mx-1 space-y-0.5">
                    {navigation.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className={`group flex gap-x-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors ${
                              item.current
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground hover:text-foreground hover:bg-accent"
                            }`}
                          >
                            <Icon className="h-4 w-4 shrink-0" />
                            {item.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>

                {/* Quick Stats */}
                <li>
                  <div className="text-xs font-semibold text-muted-foreground">
                    Quick Stats
                  </div>
                  <div className="mt-1.5 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Current GPA</span>
                      <span className="font-semibold text-success">3.7</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        Admit Probability
                      </span>
                      <span className="font-semibold text-primary">78%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Activities</span>
                      <span className="font-semibold">12</span>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 xl:overflow-hidden w-full md:w-auto">
          {/* Mobile Search */}
          <div className="sm:hidden p-4 border-b bg-card">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search courses, activities, research..."
                className="pl-10 pr-4 h-9"
              />
            </div>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
