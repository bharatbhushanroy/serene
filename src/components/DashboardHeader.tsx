"use client";

import React from 'react';
import { Search, Bell, Settings, HelpCircle, LogOut } from 'lucide-react'; // Added LogOut import
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-fintech-dashboard-bg border-b border-fintech-dashboard-border">
      <div className="relative w-1/3">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-fintech-dashboard-text-secondary" />
        <Input
          type="text"
          placeholder="Search transactions, accounts..."
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-fintech-dashboard-input-bg border border-fintech-dashboard-border text-fintech-dashboard-text-primary placeholder:text-fintech-dashboard-text-secondary focus:ring-2 focus:ring-fintech-dashboard-accent-blue focus:border-transparent"
        />
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="text-fintech-dashboard-text-secondary hover:bg-fintech-dashboard-border">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-fintech-dashboard-text-secondary hover:bg-fintech-dashboard-border">
          <HelpCircle className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
              <Avatar className="h-9 w-9 border-2 border-fintech-dashboard-accent-blue">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" alt="User Avatar" />
                <AvatarFallback className="bg-fintech-dashboard-accent-blue text-white">JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-fintech-dashboard-card-bg border border-fintech-dashboard-border text-fintech-dashboard-text-primary" align="end" forceMount>
            <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-fintech-dashboard-border">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-fintech-dashboard-border">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center cursor-pointer text-fintech-dashboard-accent-red hover:bg-fintech-dashboard-logout-button-hover hover:text-white">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;