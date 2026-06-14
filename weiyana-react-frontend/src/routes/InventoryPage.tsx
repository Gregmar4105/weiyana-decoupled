import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, AlertTriangle, ArrowUpRight, TrendingUp } from 'lucide-react';

export const InventoryPage: React.FC = () => {
  const stats = [
    { label: 'Total SKUs', value: '1,248', icon: Package, change: '+12% this week', color: 'text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/20' },
    { label: 'Low Stock Alerts', value: '14', icon: AlertTriangle, change: 'Requires attention', color: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20' },
    { label: 'Out of Stock', value: '3', icon: AlertTriangle, change: 'Ordering today', color: 'text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/20' },
    { label: 'Inventory Valuation', value: '$245,890.00', icon: TrendingUp, change: '+4.5% vs last month', color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
  ];

  const recentItems = [
    { name: 'Weiyana Premium Silk Dress', sku: 'WYN-SLK-001', stock: 45, status: 'In Stock' },
    { name: 'Cotton Linen Casual Shirt', sku: 'WYN-COT-092', stock: 8, status: 'Low Stock' },
    { name: 'Elegant Velvet Blazer', sku: 'WYN-VEL-431', stock: 0, status: 'Out of Stock' },
    { name: 'Summer Floral Romper', sku: 'WYN-FLR-202', stock: 110, status: 'In Stock' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300 font-sans">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">Inventory Management</h2>
        <p className="text-sm text-muted-foreground">
          Track and organize your warehouse stock, item SKUs, and inventory value.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i} className="rounded-sm border-border bg-card shadow-sm hover:border-foreground/20 transition-all duration-300">
              <CardContent className="p-5 flex items-center gap-4">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center border rounded-sm ${stat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1 font-heading">
                    {stat.label}
                  </span>
                  <span className="text-xl font-bold text-foreground truncate">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-muted-foreground mt-0.5">
                    {stat.change}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-heading">
            Recent Stock Status
          </h3>
          <Badge variant="outline" className="rounded-sm text-[10px] border-border bg-muted/50 font-bold uppercase tracking-wider px-2 py-0.5 text-muted-foreground">
            Realtime
          </Badge>
        </div>

        <Card className="rounded-sm border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40 font-heading text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <th className="p-4">Product Name</th>
                  <th className="p-4">SKU</th>
                  <th className="p-4">Current Stock</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground">
                {recentItems.map((item, i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium">{item.name}</td>
                    <td className="p-4 font-mono text-xs">{item.sku}</td>
                    <td className="p-4">{item.stock} units</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center rounded-sm px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider border ${
                        item.status === 'In Stock'
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                          : item.status === 'Low Stock'
                          ? 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400'
                          : 'bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="inline-flex items-center gap-1 text-xs text-orange-600 hover:text-orange-500 dark:text-orange-400 font-semibold cursor-pointer">
                        Manage <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};
