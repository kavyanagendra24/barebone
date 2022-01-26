import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  template: `
    <p>
      feature bare bone works!
    </p>
  `,
  styles: [
  ]
})
export class featureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
