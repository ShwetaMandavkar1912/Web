format.component.html;

//  <p>template-form works!</p>

// <form #myform="ngForm" (ngSubmit)="onSubmit()">
//   Name:
//   <input type="text" id="name" name="name" [(ngModel)]="user.name" />
//   <br />

//   Email:
//   <input type="email" name="email" id="email" [(ngModel)]="user.email" />
//   <br />

//   Password:
//   <input
//     type="password"
//     name="password"
//     id="password"
//     [(ngModel)]="user.password"
//   />
//   <br />

//   <button type="submit">Login</button>
// </form>

format.component.ts;
// export class TemplateFormComponent {
//     user = {
//       name: '',
//       email: '',
//       password: '',
//     };

//     onSubmit() {
//       alert('Hello' + this.user.name + '!');
//       this.resetForm();
//     }
//     resetForm() {
//       this.user = {
//         name: '',
//         email: '',
//         password: '',
//       };
//    }

// for a single page applicattion create a new folder in app then crete a new component
// ng  g c com_name
// ng g s service_name
// npm install -g @angular/cli
// ng new Folder_name
// cd Folder_name
// ng serve -o



directives

<form #myForm="ngForm" (ngSubmit)="onSubmit()">
  Name:
  <input type="text" id="name" name="name" [(ngModel)]="user.name" />
  <br />
  Email
  <input type="email" id="email" name="email" [(ngModel)]="user.email" />
  <br />
  <button type="submit">Login</button>
</form>


.ts
 user = {
    name: '',
    email: '',
  };

  onSubmit() {
    console.log('this.user');
    alert('hello' + this.user.name);
  }

binding
{{ uname }}
<br />

<button (click)="add()">Click me!!!</button>
<br />

<img [src]="imgdata" alt="" height="100" width="100" />
<br />

Name:
<input type="text" [(ngModel)]="username" name="username" />{{ username }}

.ts

  uname: string = 'tom';

  add() {
    alert('helloo');
  }
  imgdata = './assets/image/download.jpg';

  username: string = '';


filters syntax


{{ 'hello' | uppercase }} <!-- Output: HELLO -->
{{ 'WORLD' | lowercase }} <!-- Output: world -->
{{ price | currency:'USD':'symbol':'1.2-2' }}
{{ currentDate | date:'short' }}

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ul>
      <li *ngFor="let item of items | sortBy:'propertyName'">{{ item.name }}</li>
    </ul>
  `,
})
export class ExampleComponent {
  items = [
    { name: 'John', propertyName: 3 },
    { name: 'Alice', propertyName: 1 },
    { name: 'Bob', propertyName: 2 },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <h3>Ordered List</h3>
    <ul>
      <li *ngFor="let item of sortedItems">{{ item.name }}</li>
    </ul>
  `,
})
export class ExampleComponent {
  items = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
  ];

  // Sorting the items based on the 'name' property
  sortedItems = this.items.sort((a, b) => (a.name > b.name ? 1 : -1));
}



directives ngif
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <div *ngIf="isUserLoggedIn">
      <p>Welcome, User!</p>
    </div>

    <div *ngIf="!isUserLoggedIn">
      <p>Please log in to access the content.</p>
    </div>
  `,
})
export class ExampleComponent {
  isUserLoggedIn: boolean = true; // You can toggle this value based on your application logic
}


ngfor
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ul>
      <li *ngFor="let item of items">{{ item.name }}</li>
    </ul>
  `,
})
export class ExampleComponent {
  items = [
    { name: 'John' },
    { name: 'Alice' },
    { name: 'Bob' },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <div [ngStyle]="{'color': textColor, 'font-size': fontSize + 'px', 'font-weight': isBold ? 'bold' : 'normal'}">
      Dynamic Styling Example
    </div>
  `,
})
export class ExampleComponent {
  textColor: string = 'blue';
  fontSize: number = 16;
  isBold: boolean = false;
}

//event emitter

ng generate component child

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button (click)="sendMessage()">Send Message to Parent</button>
  `,
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from Child!');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Parent Component</h2>
    <app-child (messageEvent)="receiveMessage($event)"></app-child>
    <p>{{ messageFromChild }}</p>
  `,
})
export class ParentComponent {
  messageFromChild: string = '';

  receiveMessage(message: string) {
    this.messageFromChild = message;
  }
}
import in app.component.ts module
ng serve-o




component ==controller
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ greeting }}</h1>
    <button (click)="changeGreeting()">Change Greeting</button>
  `,
  styles: [`
    h1 {
      color: blue;
    }
  `]
})
export class AppComponent {
  greeting: string = 'Hello, Angular!';

  changeGreeting(): void {
    this.greeting = 'New Greeting!';
  }
}

node module,events,function

  // math.js
exports.add = function (a, b) {
  return a + b;
};

exports.subtract = function (a, b) {
  return a - b;
};


// app.js
const math = require('./math');

const resultAdd = math.add(5, 3);
console.log('Addition Result:', resultAdd);

const resultSubtract = math.subtract(8, 3);
console.log('Subtraction Result:', resultSubtract);


// eventEmitterExample.js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('customEvent', () => {
  console.log('Custom event emitted!');
});

myEmitter.emit('customEvent');

// functionExample.js
function greet(name) {
  return `Hello, ${name}!`;
}

const greeting = greet('John');
console.log(greeting);


Implementation of Create, Insert, Delete Operations in AngularJS.


  <!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
  <meta charset="UTF-8">
  <title>AngularJS CRUD Example</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.9/angular.min.js"></script>
</head>
<body>
  <div ng-controller="MainController">
    <h1>AngularJS CRUD Example</h1>

    <!-- Display the list of items -->
    <ul>
      <li ng-repeat="item in items">
        {{ item }}
        <button ng-click="deleteItem($index)">Delete</button>
      </li>
    </ul>

    <!-- Input for adding new item -->
    <input type="text" ng-model="newItem" placeholder="Type a new item">
    <button ng-click="addItem()">Add Item</button>
  </div>

  <script src="app.js"></script>
</body>
</html>


// app.js
var app = angular.module('myApp', []);

app.controller('MainController', function ($scope) {
  // Initial list of items
  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  // Function to add a new item
  $scope.addItem = function () {
    if ($scope.newItem) {
      $scope.items.push($scope.newItem);
      $scope.newItem = ''; // Clear the input field
    }
  };

  // Function to delete an item
  $scope.deleteItem = function (index) {
    $scope.items.splice(index, 1);
  };
});



