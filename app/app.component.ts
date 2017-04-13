import { Component } from '@angular/core'; //import keyword

//This is the metadata (Angular Component) via Decorator pattern
@Component({ //Component Decorator Declaration
    selector: 'pm-app', //Directive Name used in HTML
    template: `
    <div><h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>` // View Layout in HTML
})
//This is the ES 2015 Module
export class AppComponent { 
    pageTitle: string = 'Acme Product Management'; //Property used in the Decorator as binding
}
