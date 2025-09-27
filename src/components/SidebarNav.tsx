"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Wallet, Repeat, BarChart, Target, Settings, LogOut, User } from 'lucide-react'; // Added LogOut import
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import QickyLogo from './QickyLogo';

const navItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Accounts',
    href: '/dashboard/accounts',
    icon: Wallet,
  },
  {
    name: 'Transactions',
    href: '/dashboard/transactions',
    icon: Repeat,
  },
  {
    name: 'Analytics',
    href: '/dashboard/analytics',
    icon: BarChart,
  },
  {
    name: 'Goals',
    href: '/dashboard/goals',
    icon: Target,
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

const SidebarNav = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-fintech-main-bg text-fintech-dashboard-text-primary h-screen flex flex-col p-6 border-r border-fintech-dashboard-border shadow-lg">
      <div className="mb-10 flex items-center justify-center">
        <QickyLogo size="lg" className="text-fintech-dashboard-text-primary" />
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              "flex items-center p-3 rounded-lg text-fintech-dashboard-text-secondary hover:bg-fintech-dashboard-border hover:text-fintech-dashboard-text-primary transition-colors",
              location.pathname === item.href && "bg-fintech-dashboard-accent-blue text-white hover:text-white"
            )}
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-fintech-dashboard-border">
        <div className="flex items-center space-x-3 mb-6">
          <Avatar className="h-10 w-10 border-2 border-fintech-dashboard-accent-blue">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" alt="User Avatar" width={40} height={40} />
            <AvatarFallback className="bg-fintech-dashboard-accent-blue text-white">JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-fintech-dashboard-text-primary">John Doe</p>
            <p className="text-sm text-fintech-dashboard-text-secondary">Premium User</p>
          </div>
        </div>
        <Button
          variant="ghost"
          className="w-full justify-start text-fintech-dashboard-text-secondary hover:bg-fintech-dashboard-logout-button-hover hover:text-white bg-fintech-dashboard-logout-button-bg"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default SidebarNav;