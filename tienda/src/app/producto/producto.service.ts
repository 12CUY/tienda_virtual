import { Injectable } from '@angular/core';
import { Producto } from '../producto/producto.models';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto[] = [// Producto de ejemplo
    {
    id: 1,
    nombre: '',
    descripcion: '',
    precio: 10 }
  ];
  // Método para obtener todos los productos
  getProductos(): Producto[] {
    return this.productos;
  }
  // Método para obtener un producto por su ID
  getProducto(id: number): Producto | undefined {
    return this.productos.find(producto => producto.id === id);
  }
  // Método para agregar un nuevo producto
  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }
  // Método para editar un producto existente
  editarProducto(producto: Producto): void {
    const index = this.productos.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      this.productos[index] = producto;
    }
  }
  // Método para eliminar un producto por su ID
eliminarProducto(id: number): void {
  this.productos = this.productos.filter(producto => producto.id !== id);
}

}
