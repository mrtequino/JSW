import { Component } from '@angular/core';
import { Categoria } from './model/categoria';
import { OnInit } from '@angular/core';
import { MixService } from './service/mix.service';
import { Item } from './model/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  categorias: Categoria[];

  constructor(private mixService: MixService) { }

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias() {
    this.mixService.getCategorias().subscribe(
      data => this.categorias = data,
      error => alert(error)
    );
  }

  seleccionarCategoria(categoriaSeleccionada: Categoria) {
    alert(categoriaSeleccionada.cateNombre);
  }

  seleccionarItem(itemSeleccionado: Item) {
    alert(itemSeleccionado.itemNombre + " " + itemSeleccionado.itemPrecioConIva);
  }

}
