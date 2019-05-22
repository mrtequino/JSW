import { Component } from '@angular/core';

import { Apollo } from 'apollo-angular'
import gql from 'graphql-tag'

import { map } from "rxjs/operators";

class Libro {
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private lista: Array<Libro>;


  constructor(private apollo: Apollo) {
    let info1 = apollo
      .query({
        query: gql`
          {
              books1{
                title,
                author
              }
            }
        `,
      });
    let info2 = info1.pipe(
      map(info2 => info2.data),
      map(info2 => info2["books1"])
    );

    info2.subscribe(data => this.lista = data);
  }

  agregarLibro() {
    let info1 = this.apollo
      .mutate({
        mutation: gql`
        mutation{
  addBook {
    title
    author
    paginas
    descripcion
  }
}
        `,
      });
    info1.subscribe(data => console.log(data), err => console.log(err));
  }

}
