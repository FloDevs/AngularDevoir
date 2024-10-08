import { Component } from "@angular/core";
import { RouterOutlet, RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RouterModule, FooterComponent],
  template: `
    <app-header></app-header>
    <router-outlet />
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {}
