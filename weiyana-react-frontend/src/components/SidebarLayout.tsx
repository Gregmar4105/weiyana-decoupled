import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import {
  LayoutDashboard,
  Settings,
  LogOut,
  Sun,
  Moon,
  Loader2,
  Package,
  RefreshCw,
  FileSpreadsheet,
  ArrowLeftRight,
  FolderTree,
  Bookmark,
  Truck,
  QrCode,
  BarChart3,
  User
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export const SidebarLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [loggingOut, setLoggingOut] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      setLoggingOut(true);
      await logout();
    } catch (err) {
      setLoggingOut(false);
    }
  };

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/inventory', label: 'Inventory', icon: Package },
    { path: '/reorders', label: 'Reorders', icon: RefreshCw },
    { path: '/request-orders', label: 'Request Orders', icon: FileSpreadsheet },
    { path: '/transfers', label: 'Transfers', icon: ArrowLeftRight },
    { path: '/categories', label: 'Categories', icon: FolderTree },
    { path: '/brands', label: 'Brands', icon: Bookmark },
    { path: '/suppliers', label: 'Suppliers', icon: Truck },
    { path: '/qr-barcodes', label: 'Generate QR and Barcodes', icon: QrCode },
    { path: '/reports', label: 'Reports and Analytics', icon: BarChart3 },
  ];

  const getPageTitle = () => {
    if (location.pathname === '/settings') return 'Settings';
    const currentItem = navItems.find((item) => item.path === location.pathname);
    return currentItem ? currentItem.label : 'Workspace';
  };

  return (
    <TooltipProvider>
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-background text-foreground">
          {/* Sidebar */}
          <Sidebar collapsible="icon" className="border-r border-border bg-card">
            <SidebarHeader className="h-16 flex flex-row items-center justify-between px-4 border-b border-border">
              <Link to="/dashboard" className="flex items-center gap-3 font-semibold text-foreground">
                <div className="flex h-9 w-9 items-center justify-center bg-transparent rounded-sm overflow-hidden">
                  <img src="/Weiyana_no_bg.png" alt="Weiyana Logo" className="h-full w-full object-contain" />
                </div>
                <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                  <span className="font-heading font-bold tracking-tight text-base leading-none">
                    weiyana
                  </span>
                  <span className="text-[9px] text-muted-foreground font-semibold tracking-wider uppercase mt-1">
                    Workspace
                  </span>
                </div>
              </Link>
            </SidebarHeader>

            <SidebarContent className="py-4">
              <SidebarMenu className="px-2 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <SidebarMenuItem key={item.path}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        tooltip={item.label}
                        className={`w-full justify-start gap-3 px-3 py-2 h-10 rounded-sm font-medium transition-all ${
                          isActive
                            ? 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground font-semibold shadow-sm'
                            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                        }`}
                      >
                        <Link to={item.path} className="flex items-center w-full">
                          <Icon className="h-5 w-5 shrink-0" />
                          <span className="group-data-[collapsible=icon]:hidden font-heading text-sm">
                            {item.label}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarContent>

            <SidebarFooter className="p-4 border-t border-border space-y-3">
              <SidebarMenu className="px-0 space-y-1">
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === '/settings'}
                    tooltip="Settings"
                    className={`w-full justify-start gap-3 px-3 py-2 h-10 rounded-sm font-medium transition-all ${
                      location.pathname === '/settings'
                        ? 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground font-semibold shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    <Link to="/settings" className="flex items-center w-full">
                      <Settings className="h-5 w-5 shrink-0" />
                      <span className="group-data-[collapsible=icon]:hidden font-heading text-sm">
                        Settings
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>

              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  disabled={loggingOut}
                  className="w-full justify-start gap-3 h-9 px-3 rounded-sm text-destructive hover:bg-destructive/10 hover:text-destructive border-border group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:justify-center"
                  title="Sign Out"
                >
                  {loggingOut ? (
                    <Loader2 className="h-4 w-4 shrink-0 animate-spin" />
                  ) : (
                    <LogOut className="h-4 w-4 shrink-0" />
                  )}
                  <span className="group-data-[collapsible=icon]:hidden text-xs font-heading">
                    {loggingOut ? 'Signing Out...' : 'Sign Out'}
                  </span>
                </Button>
              </div>
            </SidebarFooter>
          </Sidebar>

          {/* Main Content Area */}
          <SidebarInset className="flex flex-col flex-1 min-h-screen overflow-hidden bg-background">
            {/* Top Header */}
            <header className="h-16 flex items-center justify-between px-6 border-b border-border bg-card">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="h-9 w-9 rounded-sm border border-border bg-background text-foreground hover:bg-accent cursor-pointer" />
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground font-medium hidden sm:inline">Workspace</span>
                  <span className="text-muted-foreground hidden sm:inline">/</span>
                  <h1 className="text-sm sm:text-base font-bold text-foreground tracking-tight font-heading">
                    {getPageTitle()}
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-3">

                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleTheme}
                  className="h-9 w-9 rounded-sm border border-border bg-background text-foreground hover:bg-accent cursor-pointer flex items-center justify-center"
                  title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                >
                  {theme === 'light' ? (
                    <Moon className="h-4 w-4 shrink-0" />
                  ) : (
                    <Sun className="h-4 w-4 shrink-0" />
                  )}
                </Button>

                {user && (
                  <div className="relative">
                    <Button
                      variant="ghost"
                      className="h-9 w-9 rounded-sm p-0 border border-border cursor-pointer overflow-hidden flex items-center justify-center"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      title="User menu"
                    >
                      <Avatar className="h-full w-full rounded-sm">
                        <AvatarFallback className="bg-primary text-primary-foreground font-bold text-xs h-full w-full flex items-center justify-center">
                          {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                    
                    {dropdownOpen && (
                      <>
                        <div 
                          className="fixed inset-0 z-40 cursor-default" 
                          onClick={() => setDropdownOpen(false)} 
                        />
                        <div className="absolute right-0 mt-2 w-56 rounded-sm border border-border bg-popover p-1 text-popover-foreground shadow-md z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                          <div className="px-3 py-2 border-b border-border mb-1">
                            <div className="text-sm font-semibold truncate">{user.name}</div>
                            <div className="text-xs text-muted-foreground truncate">{user.email}</div>
                          </div>
                          <div className="space-y-0.5">
                            <Link
                              to="/profile"
                              className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                              onClick={() => setDropdownOpen(false)}
                            >
                              <User className="h-4 w-4 shrink-0 text-muted-foreground" />
                              <span>Profile</span>
                            </Link>
                            <Link
                              to="/settings"
                              className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                              onClick={() => setDropdownOpen(false)}
                            >
                              <Settings className="h-4 w-4 shrink-0 text-muted-foreground" />
                              <span>Settings</span>
                            </Link>
                            <div className="h-px bg-border my-1" />
                            <button
                              onClick={() => {
                                setDropdownOpen(false);
                                handleLogout();
                              }}
                              className="w-full flex items-center gap-2 px-3 py-1.5 text-sm rounded-sm text-destructive hover:bg-destructive/10 hover:text-destructive transition-colors cursor-pointer text-left"
                            >
                              <LogOut className="h-4 w-4 shrink-0" />
                              <span>Sign Out</span>
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </header>

            {/* Page Content */}
            <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-background">
              <div className="max-w-6xl mx-auto w-full">
                <Outlet />
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
};
