import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bookmark, Plus, ExternalLink } from 'lucide-react';

export const BrandsPage: React.FC = () => {
  const brands = [
    { name: 'Weiyana Couture', items: 620, status: 'Active', website: 'weiyana.com' },
    { name: 'Studio Knitwear', items: 215, status: 'Active', website: 'studioknitwear.net' },
    { name: 'Indigo Denim Co.', items: 340, status: 'Inactive', website: 'indigodenim.com' },
    { name: 'Velvet & Lace', items: 120, status: 'Active', website: 'velvetlace.co' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">Brands Directory</h2>
          <p className="text-sm text-muted-foreground">
            Manage your brand assets, designer labels, and catalog distribution.
          </p>
        </div>
        <Button className="rounded-sm bg-orange-600 hover:bg-orange-500 text-white font-semibold cursor-pointer shadow-sm flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Brand
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {brands.map((brand, i) => (
          <Card key={i} className="rounded-sm border-border bg-card p-5 hover:border-foreground/20 transition-all duration-300 flex flex-col justify-between h-44">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center border border-orange-500/20 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-sm">
                  <Bookmark className="h-4 w-4" />
                </div>
                <Badge variant={brand.status === 'Active' ? 'default' : 'outline'} className={`rounded-sm text-[9px] font-bold px-1.5 py-0.5 border ${
                  brand.status === 'Active' 
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400' 
                    : 'bg-muted/50 border-border text-muted-foreground'
                }`}>
                  {brand.status}
                </Badge>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-base text-foreground truncate">{brand.name}</h3>
                <span className="text-xs text-muted-foreground block">{brand.items} Products registered</span>
              </div>
            </div>

            <div className="pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-mono text-[10px] truncate">{brand.website}</span>
              <ExternalLink className="h-3 w-3 text-muted-foreground cursor-pointer hover:text-foreground" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
