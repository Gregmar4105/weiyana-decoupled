import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Printer, Download } from 'lucide-react';

export const QrBarcodesPage: React.FC = () => {
  const [productCode, setProductCode] = useState('WYN-SLK-001');
  const [productName, setProductName] = useState('Weiyana Premium Silk Dress');
  const [price, setPrice] = useState('$129.90');

  return (
    <div className="space-y-8 animate-in fade-in duration-300 font-sans">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">QR & Barcode Generator</h2>
        <p className="text-sm text-muted-foreground">
          Generate, preview, and export high-resolution scan codes and retail tags for items.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Generator Controls */}
        <Card className="rounded-sm border-border bg-card p-6 lg:col-span-2 space-y-4 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground font-heading border-b border-border pb-2">
            Configure Tag details
          </h3>

          <div className="space-y-1.5">
            <Label htmlFor="prod-name" className="text-xs font-semibold text-muted-foreground">Product Name</Label>
            <Input 
              id="prod-name" 
              value={productName} 
              onChange={(e) => setProductName(e.target.value)} 
              className="rounded-sm border-border bg-background text-foreground text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500" 
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="prod-code" className="text-xs font-semibold text-muted-foreground">Product SKU / Code</Label>
            <Input 
              id="prod-code" 
              value={productCode} 
              onChange={(e) => setProductCode(e.target.value)} 
              className="rounded-sm border-border bg-background text-foreground text-sm font-mono focus:border-orange-500 focus:ring-1 focus:ring-orange-500" 
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="prod-price" className="text-xs font-semibold text-muted-foreground">Retail Price</Label>
            <Input 
              id="prod-price" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              className="rounded-sm border-border bg-background text-foreground text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500" 
            />
          </div>

          <div className="pt-2 flex gap-2">
            <Button className="flex-1 rounded-sm bg-orange-600 hover:bg-orange-500 text-white font-semibold cursor-pointer shadow-sm text-xs py-2">
              Generate Code
            </Button>
          </div>
        </Card>

        {/* Live Tag Preview */}
        <Card className="rounded-sm border-border bg-card p-6 lg:col-span-3 flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground font-heading border-b border-border pb-2 mb-6">
              Print Tag Preview
            </h3>

            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 border-2 border-dashed border-border rounded-sm bg-muted/10 max-w-md mx-auto">
              {/* QR and Barcode Mock Asset */}
              <div className="flex flex-col items-center gap-2 p-3 bg-white text-black border rounded-sm">
                {/* Visual Barcode pattern */}
                <div className="flex items-end h-14 w-40 gap-[2px] bg-white px-2">
                  <div className="h-full w-[2px] bg-black" />
                  <div className="h-full w-[1px] bg-black" />
                  <div className="h-full w-[3px] bg-black" />
                  <div className="h-full w-[1px] bg-black" />
                  <div className="h-full w-[1px] bg-black" />
                  <div className="h-full w-[2px] bg-black" />
                  <div className="h-full w-[4px] bg-black" />
                  <div className="h-full w-[1px] bg-black" />
                  <div className="h-full w-[2px] bg-black" />
                  <div className="h-full w-[3px] bg-black" />
                  <div className="h-full w-[1px] bg-black" />
                  <div className="h-full w-[2px] bg-black" />
                  <div className="h-full w-[1px] bg-black" />
                  <div className="h-full w-[4px] bg-black" />
                  <div className="h-full w-[2px] bg-black" />
                </div>
                <div className="text-[10px] font-mono tracking-widest">{productCode}</div>
              </div>

              <div className="text-center sm:text-left space-y-2 flex-1">
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground block font-heading font-bold">WEiYANA BRANDING</span>
                <h4 className="text-sm font-bold text-foreground leading-tight">{productName}</h4>
                <div className="flex items-center justify-center sm:justify-start gap-3 mt-2">
                  <span className="text-sm font-bold text-foreground">{price}</span>
                  <span className="text-[10px] text-muted-foreground border border-border px-1 rounded-sm uppercase font-mono">Tax Incl.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border flex flex-wrap gap-3 justify-end">
            <Button variant="outline" size="sm" className="rounded-sm flex items-center gap-1.5 text-xs font-semibold cursor-pointer border-border hover:bg-accent text-foreground">
              <Download className="h-3.5 w-3.5" /> Download PNG
            </Button>
            <Button variant="outline" size="sm" className="rounded-sm flex items-center gap-1.5 text-xs font-semibold cursor-pointer border-border hover:bg-accent text-foreground">
              <Printer className="h-3.5 w-3.5" /> Direct Print
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
