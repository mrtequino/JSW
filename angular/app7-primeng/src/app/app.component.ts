import { Component } from '@angular/core';

import { MenuItem } from 'primeng/primeng';

export class City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulario Prime NG y Angular 5';
  value: Date;

  cities: City[];

  selectedCity: City;

  inputTextAreaValue: String;

  inputTextValue: String;

  checked: Boolean;

  display: Boolean;

  items: MenuItem[];

  prueba: String;

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  onActivarMenu(): void {
    console.log('clickado');
  }


  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'fa-file-o',
        expanded: true,
        items: [{
          label: 'New',
          expanded: true,
          icon: 'fa-plus',
          items: [
            { label: 'Project', icon: 'fa-lock' },
            { label: 'Other', icon: 'fa-list' }
          ]
        },
        { label: 'Open', icon: 'fa-external-link' },
        { separator: true },
        { label: 'Quit', icon: 'fa-close' }
        ]
      },
      {
        label: 'Edit',
        icon: 'fa-edit',
        items: [
          { label: 'Undo', icon: 'fa-mail-forward' },
          { label: 'Redo', icon: 'fa-mail-reply' }
        ]
      },
      {
        label: 'Help',
        icon: 'fa-question',
        items: [
          {
            label: 'Contents',
            icon: 'fa-bars'
          },
          {
            label: 'Search',
            icon: 'fa-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'File',
                icon: 'fa-file',
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'fa-gear',
        items: [
          {
            label: 'Edit',
            icon: 'fa-refresh',
            items: [
              { label: 'Save', icon: 'fa-save' },
              { label: 'Update', icon: 'fa-save' },
            ]
          },
          {
            label: 'Other',
            icon: 'fa-phone',
            items: [
              { label: 'Delete', icon: 'fa-minus' }
            ]
          }
        ]
      }
    ];
  }
}