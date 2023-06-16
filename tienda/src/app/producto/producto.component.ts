import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto/producto.models';
import { ProductoService } from '../producto/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = []; // Array de productos
  nuevoProducto: Producto = { // nuevo producto en vista
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0
  };
  edicionProducto: Producto | undefined; // Producto en editar
  edicionPrecio: number | undefined;// precio de editar

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    // Obtener la lista de productos al inicializar el componente
    this.productos = this.productoService.getProductos();
  }
//agrega un nuevo producto
  agregarProducto(): void {
    //obtiene el ultimo id
    const ultimoId = this.productos.length > 0 ? this.productos[this.productos.length - 1].id : 0;
    const nuevoId = ultimoId + 1;

    this.nuevoProducto.id = nuevoId;
    this.productoService.agregarProducto(this.nuevoProducto); // Llamar al servicio para agregar el producto
    this.nuevoProducto = { // Reiniciar el objeto nuevoProducto
      id: 0,
      nombre: '',
      descripcion: '',
      precio: 0
    };
  }
  // Prepara los datos para editar un producto
  editarProducto(producto: Producto): void {
    this.edicionProducto = { ...producto };// Crear una copia del producto en edición
    this.edicionPrecio = producto.precio; // Asignar el precio en edición
  }
  // Guarda los cambios realizados en la edición de un producto
  guardarEdicionProducto(): void {
    if (this.edicionProducto && this.edicionPrecio !== undefined) {
      this.edicionProducto.precio = this.edicionPrecio;
      this.productoService.editarProducto(this.edicionProducto);
      this.edicionProducto = undefined;
      this.edicionPrecio = undefined;
    }
  }
  // Cancela la edición de un producto
  cancelarEdicionProducto(): void {
    this.edicionProducto = undefined;
    this.edicionPrecio = undefined;
  }
  // Elimina un producto
  eliminarProducto(id: number): void {
    this.productoService.eliminarProducto(id);// Llamar al servicio para eliminar el producto
    this.productos = this.productoService.getProductos(); // Actualiza la lista de productos después de eliminar
  }
}
