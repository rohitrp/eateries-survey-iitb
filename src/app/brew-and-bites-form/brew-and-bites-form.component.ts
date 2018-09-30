import { Component, OnInit } from '@angular/core';
import {
  name,
  email,
  ratingOptions,
  phoneNumber,
  frequency,
  frequencyOptions,
  vegStarters,
  nonVegStarters,
  regularCoffee,
  blackCoffee,
  milkshakes,
  sundaes,
  nonVegPizzas,
  vegPizzas,
  sandwiches,
  paninis,
  wraps,
  pastas,
  burgers,
  extraToppingsOrDips,
  regularTea,
  greenTea,
  infusionTea,
  mojito,
  slush,
  iceTea,
  frappe,
  brewtastic,
  onTheRocks,
  hygieneOfItems,
  absenceMenuItemTimes,
  absenceMenuItemTimesOptions,
  otherParameters,
  otherSuggestions
} from './variables/variables';
import { surveyOptionsMappings } from './variables/mapping';
import { BrewAndBitesSurveyModel } from './model/model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-brew-and-bites-form',
  templateUrl: './brew-and-bites-form.component.html',
  styleUrls: ['./brew-and-bites-form.component.css']
})
export class BrewAndBitesFormComponent implements OnInit {
  apiBaseUrl = environment.apiBaseUrl;
  apiUrl = `${this.apiBaseUrl}/brewandbites`;

  surveyOptionsMapping = surveyOptionsMappings;

  surveyModel = new BrewAndBitesSurveyModel(
    name,
    email,
    phoneNumber,
    frequency,
    vegStarters,
    nonVegStarters,
    regularCoffee,
    blackCoffee,
    milkshakes,
    sundaes,
    nonVegPizzas,
    vegPizzas,
    sandwiches,
    paninis,
    wraps,
    pastas,
    burgers,
    extraToppingsOrDips,
    regularTea,
    greenTea,
    infusionTea,
    mojito,
    slush,
    iceTea,
    frappe,
    brewtastic,
    onTheRocks,
    hygieneOfItems,
    absenceMenuItemTimes,
    otherParameters,
    otherSuggestions
  );

  form = [
    {
      type: 'input',
      model: 'name',
      label: 'Name',
      required: true,
      formRequired: true,
    },
    {
      type: 'input',
      model: 'phoneNumber',
      label: 'Mobile Number',
      required: true,
      formRequired: true
    },
    {
      type: 'input',
      model: 'email',
      label: 'Email Address',
      pattern: '[^ @]*@[^ @]*',
      required: true,
      formRequired: true
    },
    {
      type: 'radio-group',
      model: 'frequency',
      label: 'How frequently do you visit B&B?',
      options: frequencyOptions.map(x => this.surveyOptionsMapping['frequencies'][x]),
      values: frequencyOptions,
      required: true,
      formRequired: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'vegStarters',
      label: 'Rate the quality of Veg Starters in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: vegStarters.map(x => this.surveyOptionsMapping['vegStarters'][x.id]),
      rowValues: vegStarters.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Veg Starters'
    },
    {
      type: 'multiple-choice-grid',
      model: 'nonVegStarters',
      label: 'Rate the quality of Non-Veg Starters in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: nonVegStarters.map(x => this.surveyOptionsMapping['nonVegStarters'][x.id]),
      rowValues: nonVegStarters.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Non Veg Starters'
    },
    {
      type: 'multiple-choice-grid',
      model: 'regularCoffee',
      label: 'Rate the quality of Regular Coffee in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: regularCoffee.map(x => this.surveyOptionsMapping['regularCoffee'][x.id]),
      rowValues: regularCoffee.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Regular Coffee'
    },
    {
      type: 'multiple-choice-grid',
      model: 'blackCoffee',
      label: 'Rate the quality of Black Coffee in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: blackCoffee.map(x => this.surveyOptionsMapping['blackCoffee'][x.id]),
      rowValues: blackCoffee.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Black Coffee'
    },
    {
      type: 'multiple-choice-grid',
      model: 'milkshakes',
      label: 'Rate the quality of Milkshakes in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: milkshakes.map(x => this.surveyOptionsMapping['milkshakes'][x.id]),
      rowValues: milkshakes.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Milkshakes'
    },
    {
      type: 'multiple-choice-grid',
      model: 'sundaes',
      label: 'Rate the quality of Sundaes in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: sundaes.map(x => this.surveyOptionsMapping['sundaes'][x.id]),
      rowValues: sundaes.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Sundaes'
    },
    {
      type: 'multiple-choice-grid',
      model: 'nonVegPizzas',
      label: 'Rate the quality of Non-Veg Pizzas in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: nonVegPizzas.map(x => this.surveyOptionsMapping['nonVegPizzas'][x.id]),
      rowValues: nonVegPizzas.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Non-Veg Pizzas'
    },
    {
      type: 'multiple-choice-grid',
      model: 'vegPizzas',
      label: 'Rate the quality of Veg Pizzas in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: vegPizzas.map(x => this.surveyOptionsMapping['vegPizzas'][x.id]),
      rowValues: vegPizzas.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Veg Pizzas'
    },
    {
      type: 'multiple-choice-grid',
      model: 'sandwiches',
      label: 'Rate the quality of Sanwiches in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: sandwiches.map(x => this.surveyOptionsMapping['sandwiches'][x.id]),
      rowValues: sandwiches.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Sanwiches'
    },
    {
      type: 'multiple-choice-grid',
      model: 'paninis',
      label: 'Rate the quality of Paninis in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: paninis.map(x => this.surveyOptionsMapping['paninis'][x.id]),
      rowValues: paninis.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Paninis'
    },
    {
      type: 'multiple-choice-grid',
      model: 'wraps',
      label: 'Rate the quality of Wraps in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: wraps.map(x => this.surveyOptionsMapping['wraps'][x.id]),
      rowValues: wraps.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Wraps'
    },
    {
      type: 'multiple-choice-grid',
      model: 'pastas',
      label: 'Rate the quality of Pastas in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: pastas.map(x => this.surveyOptionsMapping['pastas'][x.id]),
      rowValues: pastas.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Pastas'
    },
    {
      type: 'multiple-choice-grid',
      model: 'burgers',
      label: 'Rate the quality of Burgers in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: burgers.map(x => this.surveyOptionsMapping['burgers'][x.id]),
      rowValues: burgers.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Burgers'
    },
    {
      type: 'multiple-choice-grid',
      model: 'extraToppingsOrDips',
      label: 'Rate the quality of Extra Toppings Or Dips in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: extraToppingsOrDips.map(x => this.surveyOptionsMapping['extraToppingsOrDips'][x.id]),
      rowValues: extraToppingsOrDips.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Extra Toppings Or Dips'
    },
    {
      type: 'multiple-choice-grid',
      model: 'regularTea',
      label: 'Rate the quality of Regular Tea in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: regularTea.map(x => this.surveyOptionsMapping['regularTea'][x.id]),
      rowValues: regularTea.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Regular Tea'
    },
    {
      type: 'multiple-choice-grid',
      model: 'greenTea',
      label: 'Rate the quality of Green Tea in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: greenTea.map(x => this.surveyOptionsMapping['greenTea'][x.id]),
      rowValues: greenTea.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Green Tea'
    },
    {
      type: 'multiple-choice-grid',
      model: 'infusionTea',
      label: 'Rate the quality of Infusion Tea in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: infusionTea.map(x => this.surveyOptionsMapping['infusionTea'][x.id]),
      rowValues: infusionTea.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Infusion Tea'
    },
    {
      type: 'multiple-choice-grid',
      model: 'mojito',
      label: 'Rate the quality of Mojito in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: mojito.map(x => this.surveyOptionsMapping['mojito'][x.id]),
      rowValues: mojito.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Mojito'
    },
    {
      type: 'multiple-choice-grid',
      model: 'slush',
      label: 'Rate the quality of Slush in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: slush.map(x => this.surveyOptionsMapping['slush'][x.id]),
      rowValues: slush.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Slush'
    },
    {
      type: 'multiple-choice-grid',
      model: 'iceTea',
      label: 'Rate the quality of Ice Tea in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: iceTea.map(x => this.surveyOptionsMapping['iceTea'][x.id]),
      rowValues: iceTea.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Ice Tea'
    },
    {
      type: 'multiple-choice-grid',
      model: 'frappe',
      label: 'Rate the quality of Frappe in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: frappe.map(x => this.surveyOptionsMapping['frappe'][x.id]),
      rowValues: frappe.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Frappe'
    },
    {
      type: 'multiple-choice-grid',
      model: 'brewtastic',
      label: 'Rate the quality of Brewtastic in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: brewtastic.map(x => this.surveyOptionsMapping['brewtastic'][x.id]),
      rowValues: brewtastic.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'Brewtastic'
    },
    {
      type: 'multiple-choice-grid',
      model: 'onTheRocks',
      label: 'Rate the quality of On The Rocks in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: onTheRocks.map(x => this.surveyOptionsMapping['onTheRocks'][x.id]),
      rowValues: onTheRocks.map(x => x.id),
      required: true,
      formRequired: false,
      checkboxLabel: 'On The Rocks'
    },
    {
      type: 'multiple-choice-grid',
      model: 'hygieneOfItems',
      label: 'Rate on overall Hygiene level maintained in B&B',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: hygieneOfItems.map(x => this.surveyOptionsMapping['hygieneOfItems'][x.id]),
      rowValues: hygieneOfItems.map(x => x.id),
      required: true,
      formRequired: true
    },
    {
      type: 'radio-group',
      model: 'absenceMenuItemTimes',
      label: 'How often do you encounter with the absence of menu item or any other item?',
      options: absenceMenuItemTimesOptions.map(x => this.surveyOptionsMapping['absenceMenuItemTimes'][x]),
      values: absenceMenuItemTimesOptions,
      required: true,
      formRequired: true
    },
    {
      type: 'multiple-choice-grid',
      model: 'otherParameters',
      label: 'Other Parameters',
      subLabel: '5 - Very Good, 4 - Good, 3 - Satisfactory, 2 - Poor, 1 - Unacceptable',
      columnLabels: ratingOptions.map(x => this.surveyOptionsMapping['ratings'][x]),
      columnValues: ratingOptions,
      rowLabels: otherParameters.map(x => this.surveyOptionsMapping['otherParameters'][x.id]),
      rowValues: otherParameters.map(x => x.id),
      required: true,
      formRequired: true
    },
    {
      type: 'paragraph',
      model: 'otherSuggestions',
      label: 'Other Suggestions/Comments',
      placeholder: 'Your answer'
    }
  ];

  onSubmission() {
    this.surveyModel = new BrewAndBitesSurveyModel(
      name,
      email,
      phoneNumber,
      frequency,
      vegStarters,
      nonVegStarters,
      regularCoffee,
      blackCoffee,
      milkshakes,
      sundaes,
      nonVegPizzas,
      vegPizzas,
      sandwiches,
      paninis,
      wraps,
      pastas,
      burgers,
      extraToppingsOrDips,
      regularTea,
      greenTea,
      infusionTea,
      mojito,
      slush,
      iceTea,
      frappe,
      brewtastic,
      onTheRocks,
      hygieneOfItems,
      absenceMenuItemTimes,
      otherParameters,
      otherSuggestions
    );
  }

  constructor() { }

  ngOnInit() {
  }

}
