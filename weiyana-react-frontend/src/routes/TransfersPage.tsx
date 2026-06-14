import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeftRight, Navigation, MapPin } from 'lucide-react';

export const TransfersPage: React.FC = () => {
  const transfers = [
    { id: 'TR-4809', origin: 'Primary Warehouse A', destination: 'Downtown Outlet', items: 120, status: 'In Transit', carrier: 'FedEx Cargo' },
    { id: 'TR-4808', origin: 'Secondary Warehouse B', destination: 'Uptown Boutique', items: 45, status: 'Delivered', carrier: 'DHL Express' },
    { id: 'TR-4807', origin: 'Primary Warehouse A', destination: 'Westside Showroom', items: 90, status: 'Processing', carrier: 'Weiyana Fleet' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300 font-sans">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">Stock Transfers</h2>
        <p className="text-sm text-muted-foreground">
          Track and schedule inventory movements between retail locations and central warehouses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-sm border-border bg-card p-6 md:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground font-heading">
              Active Transfers
            </h3>
            <Badge variant="outline" className="rounded-sm border-border text-[9px] font-bold px-2 py-0.5">
              Live status
            </Badge>
          </div>

          <div className="space-y-6">
            {transfers.map((item, i) => (
              <div key={i} className="p-4 border border-border bg-muted/20 rounded-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-bold text-sm text-foreground">{item.id}</span>
                    <span className="text-[10px] text-muted-foreground">• Carrier: {item.carrier}</span>
                  </div>
                  <span className={`inline-flex items-center rounded-sm px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider border ${
                    item.status === 'Delivered'
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                      : item.status === 'In Transit'
                      ? 'bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400'
                      : 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-heading">Origin</span>
                      <span className="font-semibold text-foreground text-xs">{item.origin}</span>
                    </div>
                  </div>
                  <div className="flex justify-start sm:justify-center">
                    <div className="h-8 w-8 rounded-full border border-border flex items-center justify-center bg-background">
                      <ArrowLeftRight className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-heading">Destination</span>
                      <span className="font-semibold text-foreground text-xs">{item.destination}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-border flex justify-between items-center text-[10px] text-muted-foreground">
                  <span>Quantity: <strong className="text-foreground">{item.items} units</strong></span>
                  <button className="text-xs text-orange-600 hover:text-orange-500 dark:text-orange-400 font-semibold cursor-pointer">
                    Track Shipment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="rounded-sm border-border bg-card p-6 space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-orange-500/20 bg-orange-500/10 text-orange-600 dark:text-orange-400">
              <Navigation className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold tracking-tight text-foreground font-heading">Intra-Warehouse Routing</h4>
              <p className="text-xs text-muted-foreground">
                Fleet trucks depart daily at 08:00 AM and 02:00 PM for standard inter-city transfers.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
