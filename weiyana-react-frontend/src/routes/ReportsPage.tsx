import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, TrendingUp, DollarSign, Percent } from 'lucide-react';

export const ReportsPage: React.FC = () => {
  const kpis = [
    { label: 'Sales Revenue', value: '$54,200.00', icon: DollarSign, change: '+18.4%', color: 'text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/20' },
    { label: 'Inventory Turnover', value: '4.2x', icon: BarChart3, change: 'Optimal rate', color: 'text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/20' },
    { label: 'Purchase Costs', value: '$18,450.00', icon: DollarSign, change: '-4.2% budget', color: 'text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/20' },
    { label: 'Average Margin', value: '65.8%', icon: Percent, change: '+2.1% growth', color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
  ];

  const chartData = [
    { month: 'Jan', value: 40 },
    { month: 'Feb', value: 55 },
    { month: 'Mar', value: 75 },
    { month: 'Apr', value: 60 },
    { month: 'May', value: 90 },
    { month: 'Jun', value: 110 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300 font-sans">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">Reports & Analytics</h2>
        <p className="text-sm text-muted-foreground">
          Gain realtime insights on procurement value, stock movements, and sales performance metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <Card key={i} className="rounded-sm border-border bg-card shadow-sm hover:border-foreground/20 transition-all duration-300">
              <CardContent className="p-5 flex items-center gap-4">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center border rounded-sm ${kpi.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1 font-heading">
                    {kpi.label}
                  </span>
                  <span className="text-xl font-bold text-foreground truncate">
                    {kpi.value}
                  </span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5 font-bold">
                    {kpi.change}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Custom Premium CSS Bar Chart */}
        <Card className="rounded-sm border-border bg-card p-6 md:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground font-heading">
              Sales Performance Trend
            </h3>
            <Badge variant="outline" className="rounded-sm border-border text-[9px] font-bold px-2 py-0.5">
              H1 2026
            </Badge>
          </div>

          <div className="h-64 flex items-end gap-3 sm:gap-6 pt-4 border-b border-l border-border px-4 pb-2">
            {chartData.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                {/* Bar */}
                <div 
                  className="w-full bg-orange-500/80 hover:bg-orange-500 rounded-t-sm transition-all duration-300 relative"
                  style={{ height: `${(d.value / 120) * 100}%` }}
                >
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover border border-border text-popover-foreground text-[10px] font-bold font-mono px-1.5 py-0.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm pointer-events-none">
                    ${d.value}k
                  </div>
                </div>
                {/* Label */}
                <span className="text-[10px] text-muted-foreground font-heading font-medium">
                  {d.month}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Dynamic Insights card */}
        <Card className="rounded-sm border-border bg-card p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold tracking-tight text-foreground font-heading">Turnover Efficiency</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Inventory velocity is up by 12% compared to Q1. High demand categories like <strong>Dresses</strong> are turning over once every 14 days, leading margins.
              </p>
            </div>
          </div>
          <div className="pt-4 border-t border-border flex items-center justify-between text-xs">
            <span className="text-muted-foreground font-medium">Efficiency Index</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              Top 10%
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
};
