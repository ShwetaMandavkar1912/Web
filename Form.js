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


