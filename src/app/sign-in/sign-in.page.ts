import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController, LoadingController } from "@ionic/angular";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.page.html",
  styleUrls: ["./sign-in.page.scss"],
})
export class SignInPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.credentials = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(4)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(4)]]
      /*confirmPassword: ["", [Validators.required]]*/
    }/*, {validators: this.checkPasswords}*/);
  }

  async register() {
    console.log('aqui toi');
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.register(this.credentials.value).subscribe(
      async (res) => {
        await loading.dismiss();
        this.router.navigateByUrl("/places", { replaceUrl: true });
      },
      async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: "Register failed",
          message: res.error.error,
          buttons: ["OK"],
        });
        await alert.present();
      }
    );
  }

  get username() {
    return this.credentials.get("username");
  }
  get email() {
    return this.credentials.get("email");
  }
  get password() {
    return this.credentials.get("password");
  }

  /*checkPasswords(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
    return password === confirmPassword ? null : { notSame: true }     
  }*/

  login() {
    this.router.navigate(["./log-in"]);
  }
}
