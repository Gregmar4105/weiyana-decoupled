import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Calendar, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  const details = [
    {
      label: 'Account ID',
      value: user?.id ? `#${user.id}` : 'N/A',
      icon: ShieldCheck,
      color: 'text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/20'
    },
    {
      label: 'Full Name',
      value: user?.name || 'N/A',
      icon: User,
      color: 'text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/20'
    },
    {
      label: 'Email Address',
      value: user?.email || 'N/A',
      icon: Mail,
      color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      label: 'Member Since',
      value: user?.created_at
        ? new Date(user.created_at).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : 'Recently',
      icon: Calendar,
      color: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20'
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto w-full font-sans animate-in fade-in duration-300">
      {/* Welcome banner card */}
      <Card className="rounded-sm border-border bg-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm hover:border-foreground/20 transition-all duration-300">
        <Avatar className="h-16 w-16 rounded-sm border border-border shadow-sm">
          <AvatarFallback className="bg-primary text-primary-foreground font-bold text-2xl font-heading">
            {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-heading">
            Welcome back, {user?.name || 'User'}!
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl">
            You have successfully authenticated via Laravel Sanctum and Fortify. Use this workspace to manage campaigns and monitor performance metrics.
          </p>
        </div>
      </Card>

      {/* Profile / Account details section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-heading">
            Account Details
          </h3>
          <Badge variant="outline" className="rounded-sm text-[10px] border-border bg-muted/50 font-bold uppercase tracking-wider px-2 py-0.5 text-muted-foreground">
            Verifying status
          </Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <Card key={index} className="rounded-sm border-border bg-card shadow-sm hover:border-foreground/20 transition-all duration-300">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center border rounded-sm ${detail.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground leading-none mb-1.5 font-heading">
                      {detail.label}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-foreground truncate">
                      {detail.value}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
