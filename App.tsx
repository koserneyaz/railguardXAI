import { useState } from 'react';
import { SidebarProvider } from './components/ui/sidebar';
import { RailwaySidebar } from './components/RailwaySidebar';
import { Header } from './components/Header';
import { StationOverview } from './components/StationOverview';
import { PlaceholderView } from './components/PlaceholderView';
import { Map, Train, AlertTriangle, BarChart3, TrendingUp } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('station-overview');

  const renderContent = () => {
    switch (currentView) {
      case 'station-overview':
        return <StationOverview />;
      case 'live-map':
        return (
          <PlaceholderView
            title="Live Railway Network Map"
            description="Real-time visualization of train movements across the railway network with live tracking and route optimization."
            icon={<Map className="w-8 h-8 text-muted-foreground" />}
          />
        );
      case 'train-tracking':
        return (
          <PlaceholderView
            title="Individual Train Tracking"
            description="Detailed tracking of individual trains with real-time location, speed, and estimated arrival times."
            icon={<Train className="w-8 h-8 text-muted-foreground" />}
          />
        );
      case 'alerts':
        return (
          <PlaceholderView
            title="System Alerts & Notifications"
            description="Comprehensive alert management for safety issues, delays, equipment failures, and operational disruptions."
            icon={<AlertTriangle className="w-8 h-8 text-muted-foreground" />}
          />
        );
      case 'analytics':
        return (
          <PlaceholderView
            title="Performance Analytics"
            description="Historical performance data, KPI dashboards, and operational efficiency metrics for continuous improvement."
            icon={<BarChart3 className="w-8 h-8 text-muted-foreground" />}
          />
        );
      case 'predictive-analytics':
        return (
          <PlaceholderView
            title="AI-Powered Predictive Analytics"
            description="Advanced machine learning models for delay prediction, capacity optimization, and intelligent decision support."
            icon={<TrendingUp className="w-8 h-8 text-muted-foreground" />}
          />
        );
      default:
        return <StationOverview />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex">
        <RailwaySidebar currentView={currentView} onViewChange={setCurrentView} />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-auto">
            {renderContent()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}