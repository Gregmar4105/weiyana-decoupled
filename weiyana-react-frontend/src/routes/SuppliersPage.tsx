import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Phone, Mail, Award } from 'lucide-react';

export const SuppliersPage: React.FC = () => {
  const suppliers = [
    { name: 'Elite Silk & Textiles', contact: 'Sarah Jenkins', email: 'sarah@elitetextiles.com', phone: '+1 (555) 234-5678', performance: 'Excellent', leadTime: '5-7 days' },
    { name: 'Knits & Yarn Ltd.', contact: 'David Vane', email: 'd.vane@knitsyarn.com', phone: '+1 (555) 876-5432', performance: 'Good', leadTime: '8-12 days' },
    { name: 'Blue Indigo Fabric Group', contact: 'Marcus Chen', email: 'chen@indigo-fabric.com', phone: '+1 (555) 345-6789', performance: 'Exceptional', leadTime: '3-5 days' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">Suppliers Directory</h2>
          <p className="text-sm text-muted-foreground">
            Manage wholesale supplier agreements, procurement contacts, and fulfillment efficiency.
          </p>
        </div>
        <Button className="rounded-sm bg-orange-600 hover:bg-orange-500 text-white font-semibold cursor-pointer shadow-sm flex items-center gap-2">
          <Award className="h-4 w-4" /> Add Vendor
        </Button>
      </div>

      <div className="space-y-4">
        {suppliers.map((supplier, i) => (
          <Card key={i} className="rounded-sm border-border bg-card p-6 hover:border-foreground/20 transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-orange-500/20 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-sm">
                  <Truck className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-base text-foreground">{supplier.name}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5" /> {supplier.email}</span>
                    <span className="flex items-center gap-1"><Phone className="h-3.5 w-3.5" /> {supplier.phone}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center border-t lg:border-t-0 pt-4 lg:pt-0 border-border">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground font-heading mb-1">Lead Time</span>
                  <span className="text-sm font-semibold text-foreground">{supplier.leadTime}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground font-heading mb-1">Performance</span>
                  <span className={`inline-flex items-center rounded-sm px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider border w-fit ${
                    supplier.performance === 'Exceptional' || supplier.performance === 'Excellent'
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                      : 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400'
                  }`}>
                    {supplier.performance}
                  </span>
                </div>
                <div className="flex items-center justify-end col-span-2 sm:col-span-1">
                  <button className="text-xs text-orange-600 hover:text-orange-500 dark:text-orange-400 font-semibold cursor-pointer border border-border px-3 py-1.5 rounded-sm bg-background hover:bg-accent transition-colors">
                    View Contracts
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
