import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, Clock, ArrowRight } from 'lucide-react';

export const ReordersPage: React.FC = () => {
  const queue = [
    { name: 'Satin Pleated Skirt', sku: 'WYN-SAT-882', status: 'Pending Approval', quantity: 150, supplier: 'Elite Silk Co.' },
    { name: 'Cropped Knit Vest', sku: 'WYN-KNT-011', status: 'Processing', quantity: 80, supplier: 'Knits & Yarn Ltd.' },
    { name: 'Denim High-Rise Shorts', sku: 'WYN-DNM-201', status: 'Shipped', quantity: 200, supplier: 'Blue Indigo Fabric' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300 font-sans">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">Reorders Monitor</h2>
        <p className="text-sm text-muted-foreground">
          Monitor automated reorder cycles, review stock thresholds, and submit restock orders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-sm border-border bg-card p-6 md:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground font-heading">
              Current Reorder Queue
            </h3>
            <Badge variant="outline" className="rounded-sm border-border text-[9px] font-bold px-2 py-0.5">
              3 active reorders
            </Badge>
          </div>

          <div className="space-y-4">
            {queue.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-border bg-muted/20 rounded-sm hover:border-foreground/10 transition-colors gap-3">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-foreground">{item.name}</h4>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span className="font-mono text-[10px]">{item.sku}</span>
                    <span>•</span>
                    <span>Supplier: {item.supplier}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-4">
                  <div className="text-right">
                    <span className="text-xs font-bold text-foreground block">{item.quantity} Units</span>
                    <span className="text-[10px] text-muted-foreground">Reorder size</span>
                  </div>
                  <span className={`inline-flex items-center rounded-sm px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider border ${
                    item.status === 'Shipped'
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                      : item.status === 'Processing'
                      ? 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400'
                      : 'bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="rounded-sm border-border bg-card p-6 space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-orange-500/20 bg-orange-500/10 text-orange-600 dark:text-orange-400">
              <RefreshCw className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold tracking-tight text-foreground font-heading">Auto-Restock System</h4>
              <p className="text-xs text-muted-foreground">
                Automatic reorders trigger when stock falls below 15% of target volume.
              </p>
            </div>
            <div className="pt-2 border-t border-border flex items-center justify-between text-xs">
              <span className="text-muted-foreground font-medium">Status</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                Active <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </span>
            </div>
          </Card>

          <Card className="rounded-sm border-border bg-card p-6 space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Clock className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold tracking-tight text-foreground font-heading">Next Delivery Cycle</h4>
              <p className="text-xs text-muted-foreground">
                Expected batch arrivals from blue flag carriers scheduled.
              </p>
            </div>
            <div className="pt-2 border-t border-border flex items-center justify-between text-xs">
              <span className="text-muted-foreground font-medium">ETA Date</span>
              <span className="text-foreground font-semibold flex items-center gap-1">
                June 18, 2026 <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
