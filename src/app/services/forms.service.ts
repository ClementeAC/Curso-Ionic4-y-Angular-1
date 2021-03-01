import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Forms } from "../main-menu/forms/forms.model";

@Injectable({
  providedIn: "root",
})
export class FormsService {
  forms: Forms[] = [];
  constructor(private http: HttpClient) {}

  getForm(formId: string) {
    return this.http.get<any>(
      "https://api-rest-s.herokuapp.com/api/forms/question/" + formId
    );
  }

  submitAnswer(formId: string, answers: object) {
    console.log(formId + "\n" + answers);
    /*return this.http.post(
      "https://api-rest-s.herokuapp.com/api/forms/answer/" + formId,
      answers
    );*/
  }
}