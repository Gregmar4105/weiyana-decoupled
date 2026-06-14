import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FolderTree, Plus } from 'lucide-react';

export const CategoriesPage: React.FC = () => {
  const categories = [
    { name: 'Dresses', slug: 'dresses', count: 420, description: 'Satin dresses, silk apparel, and evening gowns.' },
    { name: 'Outerwear', slug: 'outerwear', count: 180, description: 'Blazers, coats, knitted cardigans, and jackets.' },
    { name: 'Bottoms', slug: 'bottoms', count: 310, description: 'Denim shorts, pleated skirts, and linen trousers.' },
    { name: 'Accessories', slug: 'accessories', count: 95, description: 'Leather belts, premium handbags, and silk scarves.' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">Product Categories</h2>
          <p className="text-sm text-muted-foreground">
            Structure your catalog taxonomies, tags, and product collection structures.
          </p>
        </div>
        <Button className="rounded-sm bg-orange-600 hover:bg-orange-500 text-white font-semibold cursor-pointer shadow-sm flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Category
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat, i) => (
          <Card key={i} className="rounded-sm border-border bg-card p-5 hover:border-foreground/20 transition-all duration-300 flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-orange-500/20 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-sm">
              <FolderTree className="h-5 w-5" />
            </div>
            <div className="space-y-2 flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-bold text-base text-foreground truncate">{cat.name}</h3>
                <Badge variant="secondary" className="rounded-sm text-[9px] font-bold px-1.5 py-0.5">
                  {cat.count} Items
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">{cat.description}</p>
              <div className="flex items-center gap-2 pt-2 text-[10px] text-muted-foreground font-mono">
                <span>Slug: /{cat.slug}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
