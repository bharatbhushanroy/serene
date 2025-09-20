import React from 'react';
import SidebarNav from './SidebarNav';
import DashboardHeader from './DashboardHeader';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-fintech-dashboard-bg border-2 border-red-500"> {/* Added red border */}
      <SidebarNav />
      <div className="flex flex-col flex-1 border-2 border-blue-500"> {/* Added blue border */}
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-y-auto border-2 border-green-500"> {/* Added green border */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;