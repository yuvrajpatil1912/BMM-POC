import { Component, OnInit } from '@angular/core';
import { Parameters } from './parameter';

@Component({
  selector: 'app-parameters-list',
  templateUrl: './parameters-list.component.html',
  styleUrls: ['./parameters-list.component.css'],
})
export class ParametersListComponent {
  ParameterList = Parameters;
  bmm_score: [string, number][];
  adoption_rate_score: number;
  npt_decrease_score: number;
  technology_adoption_score: number;
  roi_score: number;
  digital_drivers: number;
  result_score: number;
  result_category: string;
  result_image: string;

  submitForm(formData) {
    console.log(formData);

    this.bmm_score = formData.value;

    this.adoption_rate_score = this.bmm_score['Adoption_rate'];
    this.npt_decrease_score = this.bmm_score['NPT_decrease'];
    this.technology_adoption_score = this.bmm_score['Technology_Adoption'];
    this.roi_score = this.bmm_score['ROI'];
    this.digital_drivers = this.bmm_score['Digital_Drivers'];

    this.result_score =
      this.adoption_rate_score +
      this.npt_decrease_score +
      this.technology_adoption_score +
      this.roi_score +
      this.digital_drivers;

    if (this.result_score > 0 && this.result_score <= 25) {
      this.result_category = 'Siloed';
      this.result_image = '../../assets/images/siloed.png';
    } else if (this.result_score > 25 && this.result_score <= 40) {
      this.result_category = 'Synchronized';
      this.result_image = '../../assets/images/synchronised.png';
    } else if (this.result_score > 40 && this.result_score <= 65) {
      this.result_category = 'Strategic';
      this.result_image = '../../assets/images/strategic.png';
    } else if (this.result_score > 65 && this.result_score <= 80) {
      this.result_category = 'Integrated';
      this.result_image = '../../assets/images/integrated.png';
    } else {
      this.result_category = 'Agile';
      this.result_image = '../../assets/images/agile.png';
    }
  }

  resetForm() {}
}
