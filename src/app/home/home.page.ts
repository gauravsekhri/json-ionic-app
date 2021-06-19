import { Component } from '@angular/core';
import question from './data.json';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  constructor() {}

  question: [];
  currentIndex: number = 0;
  data1 = question[0];
  // data = this.data2.questions[this.currentIndex];
  // data = [];

  // setQuestion(i) {
  //   const data = this.data.questions[i];
  //   console.log(data);
  // }

  // nextQuestion() {
  //   // this.answerBtnPress = false;
  //   this.currentIndex++;
  //   this.setQuestion(this.currentIndex);
  //   console.log(this.currentIndex);
  //   // console.log(this.data.questions);
  // }
  // data = {
  //   columns: [
  //     "One",
  //     "Two",
  //     "Three",
  //     "Four",
  //     "Five",
  //     "Six"
  //   ],
  //   rows: [
  //     "January", 
  //     "Febuary",
  //     "March",
  //     "April",
  //     "May",
  //     "June"
  //   ],
  //   type: "grid-radio",
  //   direction: "rowwise"
  // }


  // data = {
  //   columns: [
  //     "One",
  //     "Two",
  //     "Three"
  //   ],
  //   rows: [
  //     {
  //       rowtitle: "January",
  //       rowtype: "radio"
  //     },
  //     {
  //       rowtitle: "Febuary",
  //       rowtype: "checkbox"
  //     },
  //     {
  //       rowtitle: "March",
  //       rowtype: "text"
  //     },
  //     {
  //       rowtitle: "April",
  //       rowtype: "number"
  //     },
  //     {
  //       rowtitle: "May",
  //       rowtype: "radio"
  //     },
  //     {
  //       rowtitle: "June",
  //       rowtype: "dropdown",
  //       options: ["Apple", "Mango", "Grape", "Banana"]
  //     }
  //   ],
  //   type: "grid-custom",
  //   direction: "rowwise"
  // }


  data2 = {
    questions: [
      {
        questiontext: "Q1. Row-wise",
        type: "grid-radio",
        direction: "rowwise",
        columns: [
          "One",
          "Two",
          "Three",
          "Four",
          "Five",
          "Six"
        ],
        rows: [
          "January", 
          "Febuary",
          "March",
          "April",
          "May",
          "June"
        ],
      },
      {
        questiontext: "Q2. Column-wise",
        type: "grid-radio",
        direction: "columnwise",
        columns: [
          "One",
          "Two",
          "Three",
          "Four",
          "Five",
          "Six"
        ],
        rows: [
          "January", 
          "Febuary",
          "March",
          "April",
          "May",
          "June"
        ],
      },
      {
        questiontext: "Q3. Checkbox Grid",
        type: "grid-checkbox",
        direction: "rowwise",
        columns: [
          "One",
          "Two",
          "Three",
          "Four",
          "Five",
          "Six"
        ],
        rows: [
          "January", 
          "Febuary",
          "March",
          "April",
          "May",
          "June"
        ],
      },
      {
        questiontext: "Q4. Dropdown Grid",
        type: "dropdown",
        direction: "rowwise",
        columns: [
          "One",
          "Two",
          "Three"
        ],
        rows: [
          "January", 
          "Febuary",
          "March",
          "April",
          "May",
          "June"
        ],
        options: ["Apple", "Mango", "Grape", "Banana"],
      },
      {
        questiontext: "Q5. Row-wise Custom Grid",
        type: "grid-custom",
        direction: "rowwise",
        columns: [
          "One",
          "Two",
          "Three"
        ],
        rows: [
          {
            rowtitle: "January",
            rowtype: "radio"
          },
          {
            rowtitle: "Febuary",
            rowtype: "checkbox"
          },
          {
            rowtitle: "March",
            rowtype: "text"
          },
          {
            rowtitle: "April",
            rowtype: "number"
          },
          {
            rowtitle: "May",
            rowtype: "radio"
          },
          {
            rowtitle: "June",
            rowtype: "dropdown",
            options: ["Apple", "Mango", "Grape", "Banana"]
          }
        ],
      },
      {
        questiontext: "Q6. Column-wise Custom Grid",
        type: "grid-custom",
        direction: "columnwise",
        columns: [
          {
            coltitle: "One",
            coltype: "checkbox"
          },
          {
            coltitle: "Two",
            coltype: "text"
          },
          {
            coltitle: "Three",
            coltype: "radio"
          },
          {
            coltitle: "Four",
            coltype: "number"
          },
          {
            coltitle: "Five",
            coltype: "dropdown",
            options: ["Car", "bike", "scooty", "Jet"]
          },
          {
            coltitle: "Six",
            coltype: "dropdown",
            options: ["Car1", "bike1", "scooty1", "Jet1"]
          }
        ],
        rows: [
          "January", 
          "Febuary",
          "March",
          "April",
          "May",
          "June"
        ],
      },
      {
        type: "thank-you",
      },
    ],

  }


  
  data = this.data2.questions[0];

  setQuestion(i) {
    const data = this.data2.questions[i];
    console.log(data);
  }

  nextQuestion() {
    this.currentIndex++;
    this.setQuestion(this.currentIndex);
    console.log(this.currentIndex);
    this.data = this.data2.questions[this.currentIndex];
    console.log(this.data2.questions.length);
    if((this.data2.questions.length - 1) <= this.currentIndex) {
      this.currentIndex = this.data2.questions.length - 1;
    }
  }

  previousQuestion() {
    this.currentIndex--;
    this.setQuestion(this.currentIndex);
    console.log(this.currentIndex);
    this.data = this.data2.questions[this.currentIndex];
    if(this.currentIndex <= 0) {
      this.currentIndex = 0;
    }
  }

}
