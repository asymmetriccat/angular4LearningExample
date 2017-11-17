import { Component } from "@angular/core";
import {Cart} from "../model/cart.model";
@Component({
    moduleId: module.id,
    template: "cartDetail.component.html"
})
export class CartDetailComponent {
    constructor(public cart: Cart){}
}