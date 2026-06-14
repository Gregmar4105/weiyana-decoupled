import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Plus } from 'lucide-react';

export const RequestOrdersPage: React.FC = () => {
  const requisitions = [
    { id: 'REQ-2026-004', date: 'Jun 11, 2026', total: '$14,500.00', items: 12, status: 'Under Review' },
    { id: 'REQ-2026-003', date: 'Jun 08, 2026', total: '$8,240.00', items: 5, status: 'Approved' },
    { id: 'REQ-2026-002', date: 'Jun 02, 2026', total: '$3,890.00', items: 3, status: 'Rejected' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">Request Orders</h2>
          <p className="text-sm text-muted-foreground">
            Create, submit, and review inventory procurement and purchase requisitions.
          </p>
        </div>
        <Button className="rounded-sm bg-orange-600 hover:bg-orange-500 text-white font-semibold cursor-pointer shadow-sm flex items-center gap-2">
          <Plus className="h-4 w-4" /> Create Requisition
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-sm border-border bg-card p-6 md:col-span-2 space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground font-heading">
            Recent Requisitions
          </h3>
          <div className="divide-y divide-border">
            {requisitions.map((req, i) => (
              <div key={i} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-sm border border-border bg-muted/30 flex items-center justify-center text-muted-foreground">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{req.id}</h4>
                    <p className="text-xs text-muted-foreground">{req.date} • {req.items} items</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-sm font-bold text-foreground">{req.total}</span>
                  </div>
                  <span className={`inline-flex items-center rounded-sm px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider border ${
                    req.status === 'Approved'
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                      : req.status === 'Under Review'
                      ? 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400'
                      : 'bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400'
                  }`}>
                    {req.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="rounded-sm border-border bg-card p-6 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground font-heading">
              Approvals Status
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs border-b border-border pb-2">
                <span className="text-muted-foreground font-medium">Pending Manager Approval</span>
                <span className="text-foreground font-bold font-mono">1</span>
              </div>
              <div className="flex items-center justify-between text-xs border-b border-border pb-2">
                <span className="text-muted-foreground font-medium">Pending Financial Sign-off</span>
                <span className="text-foreground font-bold font-mono">0</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-medium">Processed this month</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold font-mono">12</span>
              </div>
            </div>
          </Card>

          <Card className="rounded-sm border-border bg-card p-6 space-y-3">
            <h4 className="text-sm font-bold tracking-tight text-foreground font-heading">Need help with wholesale?</h4>
            <p className="text-xs text-muted-foreground">
              Review supplier terms and wholesale discounts inside the Suppliers page before creating a new order.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};
