import { SkipSelf } from '@angular/core';

export interface Producto {
    key$?: string,
    sku: string,
    nombre: string,
    moneda: string,
    precio: number
}
