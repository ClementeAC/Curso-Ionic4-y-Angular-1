import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MenusService } from "../../services/menus.service";
import { Menus } from "../menus.model";

@Component({
  selector: "app-menu-details",
  templateUrl: "./menu-details.page.html",
  styleUrls: ["./menu-details.page.scss"],
})
export class MenuDetailsPage implements OnInit {
  menus: Menus;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private menusService: MenusService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get("menuId");
      //this.menus = this.menusService.getMenu(recipeId);
    });
  }
}
