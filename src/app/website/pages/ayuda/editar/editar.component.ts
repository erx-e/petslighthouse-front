import { Component } from "@angular/core";

@Component({
  selector: "app-editarAyuda",
  template: ` <app-editar [stateId]="stateId"></app-editar>`,
})
export class EditarComponent {
  stateId = "B";
}
