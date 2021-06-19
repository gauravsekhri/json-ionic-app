(self["webpackChunkscratch"] = self["webpackChunkscratch"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.json */ 4604);





let HomePage = class HomePage {
    constructor() {
        this.currentIndex = 0;
        this.data1 = _data_json__WEBPACK_IMPORTED_MODULE_2__[0];
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
        this.data2 = {
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
        };
        this.data = this.data2.questions[0];
    }
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
        if ((this.data2.questions.length - 1) <= this.currentIndex) {
            this.currentIndex = this.data2.questions.length - 1;
        }
    }
    previousQuestion() {
        this.currentIndex--;
        this.setQuestion(this.currentIndex);
        console.log(this.currentIndex);
        this.data = this.data2.questions[this.currentIndex];
        if (this.currentIndex <= 0) {
            this.currentIndex = 0;
        }
    }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap);\nion-content {\n  --ion-background-color: #c0bfbf;\n  font-family: \"Poppins\", sans-serif !important;\n}\n.grid-outer {\n  max-width: 70%;\n  margin: 60px auto 0px auto;\n  background-color: #fff;\n  padding: 50px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);\n}\nion-radio {\n  background-color: #fff;\n}\n.grid-radio-label {\n  padding: 18% 38%;\n}\n.item-native {\n  background-color: #fff;\n}\nion-col {\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 7px;\n  margin: 1.5px;\n  background-color: #fff;\n  border: 1px solid #000;\n  padding: auto;\n}\nion-label {\n  display: flex;\n  justify-content: center;\n}\n.question-text {\n  font-size: 20px;\n  margin-bottom: 40px;\n}\n.rowhead {\n  text-align: center;\n  background-color: #e4e4e4;\n}\n.columnhead {\n  background-color: #e4e4e4;\n  font-size: 21px;\n}\n.rowheadtext {\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 21px;\n}\ninput[type=checkbox], input[type=radio] {\n  height: 22px;\n  width: 22px;\n}\ninput[type=text], input[type=number] {\n  font-size: 20px;\n}\nion-footer {\n  padding-right: 30px;\n}\nion-button {\n  font-size: 20px;\n  font-weight: 700;\n  height: 40px;\n}\nion-button:hover {\n  background-color: #5d5d5d;\n}\n.right-arrow {\n  margin-left: 10px;\n}\n.thank-box {\n  border: 1px solid grey;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n.thank-text {\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 0px;\n  vertical-align: middle;\n  width: auto;\n}\n.shield-icon {\n  font-size: 45px;\n  color: #39bb39;\n  vertical-align: middle;\n  margin-left: 15px;\n}\nion-icon {\n  pointer-events: none;\n}\n.next-middle {\n  position: absolute;\n  top: 45%;\n  right: 5%;\n  font-size: 55px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);\n}\n.next-middle:hover, .back-middle:hover {\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.63);\n}\n.back-middle {\n  position: absolute;\n  top: 45%;\n  left: 5%;\n  font-size: 55px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);\n}\nbutton {\n  display: flex;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHVGQUFBO0FBS1I7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FBSEY7QUFNQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUVBLHNCQUFBO0VBRUEsYUFBQTtFQUVBLCtDQUFBO0FBTkY7QUFTQTtFQUNFLHNCQUFBO0FBTkY7QUFTQTtFQUNFLGdCQUFBO0FBTkY7QUFTQTtFQUNFLHNCQUFBO0FBTkY7QUFTQTtFQUtFLFlBQUE7RUFFQSxhQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBWkY7QUFtQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFoQkY7QUFtQkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFoQkY7QUFtQkE7RUFDRSxrQkFBQTtFQUVBLHlCQUFBO0FBakJGO0FBb0JBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBakJGO0FBb0JBO0VBRUUsa0JBQUE7RUFFQSxrQ0E5RVE7RUErRVIsZUFBQTtBQW5CRjtBQXNCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBbkJGO0FBc0JBO0VBQ0UsZUFBQTtBQW5CRjtBQXNCQTtFQUNFLG1CQUFBO0FBbkJGO0FBc0JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQW5CRjtBQXVCQTtFQUNFLHlCQUFBO0FBcEJGO0FBdUJBO0VBQ0UsaUJBQUE7QUFwQkY7QUF1QkE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQXBCRjtBQXVCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBcEJGO0FBdUJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBcEJGO0FBdUJBO0VBQ0Usb0JBQUE7QUFwQkY7QUF1QkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLCtDQUFBO0FBcEJGO0FBdUJBO0VBQ0UsZ0RBQUE7QUFwQkY7QUF1QkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLCtDQUFBO0FBcEJGO0FBdUJBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUFwQkYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XG5cbiRwb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG5cblxuaW9uLWNvbnRlbnR7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNjMGJmYmY7XG4gIGZvbnQtZmFtaWx5OiAkcG9wcGlucyAhaW1wb3J0YW50O1xufVxuXG4uZ3JpZC1vdXRlcntcbiAgbWF4LXdpZHRoOiA3MCU7XG4gIG1hcmdpbjogNjBweCBhdXRvIDBweCBhdXRvO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM4LCAyMzAsIDE4NCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNjMGJmYmY7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4zKTtcbn1cblxuaW9uLXJhZGlve1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uZ3JpZC1yYWRpby1sYWJlbHtcbiAgcGFkZGluZzogMTglIDM4JTtcbn1cblxuLml0ZW0tbmF0aXZle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5pb24tY29se1xuICAvLyBkaXNwbGF5OiBmbGV4O1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLy8gZGlzcGxheTogYmxvY2s7XG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA3MHB4O1xuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICAvLyBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG1hcmdpbjogMS41cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIHBhZGRpbmc6IGF1dG87XG59XG5cbi8vIGlvbi1jb2w6aG92ZXJ7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICM4MzgzODM7XG4vLyB9XG5cbmlvbi1sYWJlbHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5xdWVzdGlvbi10ZXh0e1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5yb3doZWFke1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8vIGhlaWdodDoyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xufVxuXG4uY29sdW1uaGVhZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuXG4ucm93aGVhZHRleHR7XG4gIC8vIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvLyBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LWZhbWlseTogJHBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0sIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMjJweDtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1udW1iZXJde1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlvbi1mb290ZXJ7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbmlvbi1idXR0b257XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAvLyBwYWRkaW5nOiAzMHB4IDIwcHg7XG59XG5cbmlvbi1idXR0b246aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDVkNWQ7XG59XG5cbi5yaWdodC1hcnJvd3tcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi50aGFuay1ib3h7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGhhbmstdGV4dHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogYXV0bztcbn1cblxuLnNoaWVsZC1pY29ue1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGNvbG9yOiByZ2IoNTcsIDE4NywgNTcpO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuaW9uLWljb24ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm5leHQtbWlkZGxle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDUlO1xuICByaWdodDogNSU7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMyk7XG59XG5cbi5uZXh0LW1pZGRsZTpob3ZlciwgLmJhY2stbWlkZGxlOmhvdmVye1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC42Myk7XG59XG5cbi5iYWNrLW1pZGRsZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ1JTtcbiAgbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMyk7XG59XG5cbmJ1dHRvbntcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLy8gLmJ1dHRvbi1uYXRpdmV7XG4vLyAgIHBhZGRpbmc6IDEwcHghaW1wb3J0YW50O1xuLy8gICAvLyBkaXNwbGF5OiBmbGV4O1xuLy8gfSJdfQ== */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <b>Grid</b>\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<!-- <ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank</ion-title>\n    </ion-toolbar>\n  </ion-header>\n</ion-content> -->\n\n  <!-- <div id=\"container\">\n    <strong>Ready to create an app????????</strong>\n    <p>Start with Ionic <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n  </div> -->\n\n<!-- <ion-content>\n  <ion-grid style=\"border: 1px solid #000;\">\n\n    <ion-row style=\"border: 1px solid #000;\">\n      <ion-col style=\"border: 1px solid #000;\">\n        <div style=\"border: 1px solid #000;\">\n          1 of 3\n        </div>\n      </ion-col>\n\n      <ion-col style=\"border: 1px solid #000;\">\n        <div>\n          Variable width content\n        </div>\n      </ion-col>\n\n      <ion-col style=\"border: 1px solid #000;\">\n        <div>\n          3 of 3\n        </div>\n      </ion-col>\n\n      <ion-col style=\"border: 1px solid #000;\">\n        <div>\n          3 of 3\n        </div>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col style=\"border: 1px solid #000;\">\n        <div>\n          1 of 4\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          2 of 4\n        </div>\n      </ion-col>\n      <ion-col size=\"auto\" style=\"border: 1px solid #000;\">\n        <div>\n          <ion-input placeholder=\"Variable width input\"></ion-input>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          4 of 4\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content> -->\n\n<!-- <ion-content>\n  <ion-header-bar class=\"bar-stable\">\n    <h1 class=\"title\">Service Provider Details</h1>\n</ion-header-bar>\n<ion-content>\n    <div class=\"row header\">\n      <div class=\"col\">Utility Company Name</div>\n      <div class=\"col\">Service Code</div>\n      <div class=\"col\">Pay Limit</div>\n      <div class=\"col\">Account Number to Use</div>\n      <div class=\"col\"></div>\n    </div>\n    <div class=\"row\" ng-repeat=\"data in ctrl.data\">\n      <div class=\"col\">{{data.name}}</div>\n      <div class=\"col\">{{data.code}}</div>\n      <div class=\"col\">LK {{data.limit}}</div>\n      <div class=\"col\">{{data.account}}</div>\n      <div class=\"col\"><button class=\"button\" ng-click=\"ctrl.add($index)\">Add</button></div>\n    </div>\n</ion-content>\n</ion-content> -->\n\n\n\n\n\n\n\n\n  <ion-content *ngIf=\"data.type == 'radio' \">\n\n  <div class=\"grid-outer\">\n\n    <ion-row>\n\n      <ion-col col-4 style=\"border: groove;\">\n        <ion-label></ion-label>\n      </ion-col>\n\n      <ion-col col-4 style=\"border: groove;\" *ngFor=\"let x of data.columns\">\n        <ion-label>{{x}}</ion-label>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-radio-group value=\"abc\">\n\n      <ion-row *ngFor=\"let c of data.rows; let i = index\">\n\n        <ion-col col-4 style=\"border: groove;\">\n          <ion-label class=\"rowhead\"><span class=\"rowheadtext\">{{data.rows[i]}}</span></ion-label>\n        </ion-col>\n\n        <ion-col col-4 style=\"border: groove;\" *ngFor=\"let x of data.columns\">\n          <ion-item>\n            <ion-radio></ion-radio>\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n    </ion-radio-group>\n\n  </div>\n\n  </ion-content>\n\n  <ion-content *ngIf=\"data.type == 'checkbox' \">\n\n    <div class=\"grid-outer\">\n    \n      <div class=\"question-text\">{{data.questiontext}}</div>\n\n      <ion-row>\n    \n        <ion-col col-4 style=\"border: groove;\">\n          <ion-label></ion-label>\n        </ion-col>\n    \n        <ion-col col-4 style=\"border: groove;\" *ngFor=\"let x of data.columns\">\n          <ion-label>{{x}}</ion-label>\n        </ion-col>\n    \n      </ion-row>\n    \n        <ion-row *ngFor=\"let c of data.rows; let i = index\">\n    \n          <ion-col col-4 style=\"border: groove;\">\n            <ion-label>{{data.rows[i]}}</ion-label>\n          </ion-col>\n    \n          <ion-col col-4 style=\"border: groove;\" *ngFor=\"let x of data.columns\">\n            <ion-item>\n              <ion-checkbox slot=\"start\"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n    \n        </ion-row>\n    \n    </div>\n    \n    </ion-content>\n\n  <ion-content *ngIf=\"data.type == 'dropdown' \">\n\n    <div class=\"grid-outer\">\n    \n      <div class=\"question-text\">{{data.questiontext}}</div>\n\n      <ion-row>\n    \n        <ion-col col-4 style=\"border: groove;\">\n          <ion-label></ion-label>\n        </ion-col>\n    \n        <ion-col col-4 style=\"border: groove;\" *ngFor=\"let x of data.columns\">\n          <ion-label>{{x}}</ion-label>\n        </ion-col>\n    \n      </ion-row>\n    \n        <ion-row *ngFor=\"let c of data.rows; let i = index\">\n    \n          <ion-col col-4 style=\"border: groove;\">\n            <ion-label>{{data.rows[i]}}</ion-label>\n          </ion-col>\n    \n          <!-- <ion-col col-4 style=\"border: groove;\" *ngFor=\"let x of data.columns\">\n            <ion-item>\n              <ion-label>Select</ion-label>\n              <ion-select interface=\"popover\">\n                <ion-select-option value=\"nes\">Helicopter</ion-select-option>\n                <ion-select-option value=\"n64\">Aeroplane</ion-select-option>\n                <ion-select-option value=\"ps\">Jet</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col> -->\n\n          <ion-col col-4 style=\"border: groove;\" *ngFor=\"let x of data.columns\">\n            <ion-item>\n              <ion-select interface=\"popover\">\n                <ion-select-option *ngFor=\"let opt of data.options\">{{opt}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n    \n        </ion-row>\n    \n    </div>\n    \n  </ion-content>\n\n  <ion-content *ngIf=\"data.type == 'grid-radio' && data.direction == 'rowwise' \">\n\n    <div class=\"grid-outer\">\n\n      <div class=\"question-text\">{{data.questiontext}}</div>\n    \n      <ion-row>\n    \n        <ion-col col-4 class=\"columnhead\">\n          <ion-label></ion-label>\n        </ion-col>\n    \n        <ion-col col-4 *ngFor=\"let x of data.columns\" class=\"columnhead\">\n          <ion-label>{{x}}</ion-label>\n        </ion-col>\n    \n      </ion-row>\n    \n        <ion-row *ngFor=\"let c of data.rows; let i = index\">\n    \n          <ion-col col-4 class=\"rowhead\">\n            <ion-label><span class=\"rowheadtext\">{{data.rows[i]}}</span></ion-label>\n          </ion-col>\n    \n          <ion-col col-4 *ngFor=\"let x of data.columns\">\n              <label class=\"grid-radio-label\"><input type=\"radio\" name={{i}}></label>\n          </ion-col>\n    \n        </ion-row>\n    \n    </div>\n    \n    </ion-content>\n\n  <ion-content *ngIf=\"data.type == 'grid-radio' && data.direction == 'columnwise' \">\n\n    <div class=\"grid-outer\">\n    \n      <div class=\"question-text\">{{data.questiontext}}</div>\n\n      <ion-row>\n    \n        <ion-col col-4 class=\"columnhead\">\n          <ion-label></ion-label>\n        </ion-col>\n    \n        <ion-col col-4 *ngFor=\"let x of data.columns\"  class=\"columnhead\">\n          <ion-label>{{x}}</ion-label>\n        </ion-col>\n    \n      </ion-row>\n    \n        <ion-row *ngFor=\"let s of data.rows; let i = index\">\n    \n          <ion-col col-4  class=\"rowhead\">\n            <ion-label><span class=\"rowheadtext\">{{data.rows[i]}}</span></ion-label>\n          </ion-col>\n    \n          <ion-col col-4 *ngFor=\"let t of data.columns\">\n              <label class=\"grid-radio-label\"><input type=\"radio\" name={{t}}></label>\n          </ion-col>\n    \n        </ion-row>\n    \n    </div>\n    \n    </ion-content>\n\n  <ion-content *ngIf=\"data.type == 'grid-checkbox' && ( data.direction == 'rowwise' || data.direction == 'columnwise' ) \">\n\n    <div class=\"grid-outer\">\n\n      <div class=\"question-text\">{{data.questiontext}}</div>\n    \n      <ion-row>\n    \n        <ion-col col-4 class=\"columnhead\">\n          <ion-label></ion-label>\n        </ion-col>\n    \n        <ion-col col-4 *ngFor=\"let x of data.columns\" class=\"columnhead\">\n          <ion-label>{{x}}</ion-label>\n        </ion-col>\n    \n      </ion-row>\n    \n    \n        <ion-row *ngFor=\"let c of data.rows; let i = index\">\n    \n          <ion-col col-4 class=\"rowhead\">\n            <ion-label><span class=\"rowheadtext\">{{data.rows[i]}}</span></ion-label>\n          </ion-col>\n    \n          <ion-col col-4 *ngFor=\"let x of data.columns\">\n              <label class=\"grid-radio-label\"><input type=\"checkbox\" name={{i}}></label>\n          </ion-col>\n    \n        </ion-row>\n    \n    </div>\n    \n    </ion-content>\n\n  <ion-content *ngIf=\"data.type == 'grid-custom' && data.direction == 'rowwise' \">\n\n    <div class=\"grid-outer\">\n\n      <div class=\"question-text\">{{data.questiontext}}</div>\n    \n      <ion-row>\n    \n        <ion-col col-4 class=\"columnhead\">\n          <ion-label></ion-label>\n        </ion-col>\n    \n        <ion-col col-4 *ngFor=\"let x of data.columns\" class=\"columnhead\">\n          <ion-label>{{x}}</ion-label>\n        </ion-col>\n    \n      </ion-row>\n    \n    \n        <ion-row *ngFor=\"let c of data.rows; let i = index\">\n    \n          <ion-col col-4 class=\"rowhead\">\n            <ion-label><span class=\"rowheadtext\">{{c.rowtitle}}</span></ion-label>\n          </ion-col>\n    \n          <ion-col col-4 *ngFor=\"let x of data.columns\">\n              <label *ngIf=\"c.rowtype == 'checkbox' \"><input type=\"checkbox\" name={{i}}></label>\n              <label *ngIf=\"c.rowtype == 'radio' \"><input type=\"radio\" name={{i}}></label>\n              <label *ngIf=\"c.rowtype == 'text' \">\n                <input type=\"text\" name={{i}} style=\"max-width: 90px;\">\n              </label>\n              <label *ngIf=\"c.rowtype == 'number' \">\n                <input type=\"number\" name={{i}} style=\"max-width: 90px;\">\n              </label>\n              <label *ngIf=\"c.rowtype == 'dropdown' \">\n                <ion-select interface=\"popover\">\n                  <ion-select-option *ngFor=\"let opt of c.options\">{{opt}}</ion-select-option>\n                </ion-select>\n              </label>\n          </ion-col>\n    \n        </ion-row>\n    \n    </div>\n    \n    </ion-content>\n\n  <ion-content *ngIf=\"data.type == 'grid-custom' && data.direction == 'columnwise' \">\n\n    <div class=\"grid-outer\">\n\n      <div class=\"question-text\">{{data.questiontext}}</div>\n    \n      <ion-row>\n    \n        <ion-col col-4 class=\"columnhead\">\n          <ion-label></ion-label>\n        </ion-col>\n    \n        <ion-col col-4 *ngFor=\"let x of data.columns\"  class=\"columnhead\">\n          <ion-label>{{x.coltitle}}</ion-label>\n        </ion-col>\n    \n      </ion-row>\n    \n    \n        <ion-row *ngFor=\"let s of data.rows; let i = index\">\n    \n          <ion-col col-4  class=\"rowhead\">\n            <ion-label><span class=\"rowheadtext\">{{data.rows[i]}}</span></ion-label>\n          </ion-col>\n    \n          <ion-col col-4 *ngFor=\"let t of data.columns\">\n              <label *ngIf=\"t.coltype == 'checkbox' \"><input type=\"checkbox\" name={{t}}></label>\n              <label *ngIf=\"t.coltype == 'radio' \"><input type=\"radio\" name={{t}}></label>\n              <label *ngIf=\"t.coltype == 'text' \">\n                <input type=\"text\" name={{t}} style=\"max-width: 90px;\">\n              </label>\n              <label *ngIf=\"t.coltype == 'number' \">\n                <input type=\"number\" name={{t}} style=\"max-width: 90px;\">\n              </label>\n              <label *ngIf=\"t.coltype == 'dropdown' \">\n                <ion-select interface=\"popover\">\n                  <ion-select-option *ngFor=\"let opt of t.options\">{{opt}}</ion-select-option>\n                </ion-select>\n              </label>\n          </ion-col>\n    \n        </ion-row>\n    \n    </div>\n    \n    </ion-content>\n\n  <ion-content *ngIf=\"data.type == 'thank-you' \">\n\n    <div class=\"grid-outer\">\n    \n      <!-- <ion-row> -->\n    \n        <div col-4 class=\"thank-box\">\n          <span class=\"thank-text\">Survey Complete</span><ion-icon class=\"shield-icon\" name=\"shield-checkmark\"></ion-icon>\n          <br/>\n          <br>\n          <h3>Thank you for completing the survey.</h3>\n        </div>\n    \n      <!-- </ion-row> -->\n    \n    </div>\n    \n    </ion-content>\n\n\n  \n\n\n    <button slot=\"end\" color=\"medium\" class=\"next-middle\" (click)=\"nextQuestion()\"><ion-icon name=\"chevron-forward-circle\"></ion-icon></button>\n\n    <button slot=\"end\" color=\"medium\" class=\"back-middle\" (click)=\"previousQuestion()\"><ion-icon name=\"chevron-back-circle\"></ion-icon></button>\n\n\n\n    \n\n    <!-- <ion-content *ngFor=\"let q of data.questions\">\n\n      <div class=\"grid-outer\" *ngIf=\"q.type == 'thank-you' \">\n\n        <ion-row>\n      \n          <ion-col col-4 style=\"border: groove;\">\n            <ion-label>Thank you</ion-label>\n          </ion-col>\n      \n        </ion-row>\n      \n      </div>\n\n      <div class=\"grid-outer\" *ngIf=\"q.type == 'grid-radio' \">\n\n        <ion-row>\n      \n          <ion-col col-4 style=\"border: groove;\">\n            <ion-label>Thank you</ion-label>\n          </ion-col>\n      \n          <ion-col col-4 style=\"border: groove;\" *ngFor=\"let x of q.columns\">\n            <ion-label>{{x}}</ion-label>\n          </ion-col>\n      \n        </ion-row>\n      \n        <ion-radio-group value=\"abc\">\n      \n          <ion-row *ngFor=\"let c of q.rows; let i = index\">\n      \n            <ion-col col-4 style=\"border: groove;\">\n              <ion-label class=\"rowhead\"><span class=\"rowheadtext\">{{data.rows[i]}}</span></ion-label>\n            </ion-col>\n      \n            <ion-col col-4 style=\"border: groove;\" *ngFor=\"let x of q.columns\">\n              <ion-item>\n                <ion-radio></ion-radio>\n              </ion-item>\n            </ion-col>\n      \n          </ion-row>\n        </ion-radio-group>\n      \n      </div>\n\n\n      <div class=\"grid-outer\" *ngIf=\"q.type == 'dropdown' \">\n    \n        <ion-row>\n      \n          <ion-col col-4 style=\"border: groove;\">\n            <ion-label></ion-label>\n          </ion-col>\n      \n          <ion-col col-4 style=\"border: groove;\" *ngFor=\"let x of q.columns\">\n            <ion-label>{{x}}</ion-label>\n          </ion-col>\n      \n        </ion-row>\n      \n          <ion-row *ngFor=\"let c of q.rows; let i = index\">\n      \n            <ion-col col-4 style=\"border: groove;\">\n              <ion-label>{{data.rows[i]}}</ion-label>\n            </ion-col>\n      \n            <ion-col col-4 style=\"border: groove;\" *ngFor=\"let x of q.columns\">\n              <ion-item>\n                <ion-label>Select</ion-label>\n                <ion-select interface=\"popover\">\n                  <ion-select-option value=\"nes\">Helicopter</ion-select-option>\n                  <ion-select-option value=\"n64\">Aeroplane</ion-select-option>\n                  <ion-select-option value=\"ps\">Jet</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n      \n          </ion-row>\n      \n      </div>\n\n      <div class=\"grid-outer\" *ngIf=\"q.type == 'grid-radio' && q.direction == 'rowwise' \">\n    \n        <ion-row>\n      \n          <ion-col col-4 class=\"columnhead\">\n            <ion-label></ion-label>\n          </ion-col>\n      \n          <ion-col col-4 *ngFor=\"let x of q.columns\" class=\"columnhead\">\n            <ion-label>{{x}}</ion-label>\n          </ion-col>\n      \n        </ion-row>\n      \n      \n          <ion-row *ngFor=\"let c of q.rows; let i = index\">\n      \n            <ion-col col-4 class=\"rowhead\">\n              <ion-label><span class=\"rowheadtext\">{{data.rows[i]}}</span></ion-label>\n            </ion-col>\n      \n            <ion-col col-4 *ngFor=\"let x of q.columns\">\n                <label class=\"grid-radio-label\"><input type=\"radio\" name={{i}}></label>\n            </ion-col>\n      \n          </ion-row>\n      \n      </div>\n\n      <div class=\"grid-outer\" *ngIf=\"q.type == 'grid-radio' && q.direction == 'columnwise' \">\n      \n        <ion-row>\n      \n          <ion-col col-4 class=\"columnhead\">\n            <ion-label></ion-label>\n          </ion-col>\n      \n          <ion-col col-4 *ngFor=\"let x of q.columns\"  class=\"columnhead\">\n            <ion-label>{{x}}</ion-label>\n          </ion-col>\n      \n        </ion-row>\n      \n      \n          <ion-row *ngFor=\"let s of q.rows; let i = index\">\n      \n            <ion-col col-4  class=\"rowhead\">\n              <ion-label><span class=\"rowheadtext\">{{data.rows[i]}}</span></ion-label>\n            </ion-col>\n      \n            <ion-col col-4 *ngFor=\"let t of q.columns\">\n                <label class=\"grid-radio-label\"><input type=\"radio\" name={{t}}></label>\n            </ion-col>\n      \n          </ion-row>\n      \n      </div>\n\n      <div class=\"grid-outer\" *ngIf=\"q.type == 'grid-checkbox' && ( q.direction == 'rowwise' || q.direction == 'columnwise' ) \">\n      \n        <ion-row>\n      \n          <ion-col col-4 class=\"columnhead\">\n            <ion-label></ion-label>\n          </ion-col>\n      \n          <ion-col col-4 *ngFor=\"let x of q.columns\" class=\"columnhead\">\n            <ion-label>{{x}}</ion-label>\n          </ion-col>\n      \n        </ion-row>\n      \n      \n          <ion-row *ngFor=\"let c of q.rows; let i = index\">\n      \n            <ion-col col-4 class=\"rowhead\">\n              <ion-label><span class=\"rowheadtext\">{{data.rows[i]}}</span></ion-label>\n            </ion-col>\n      \n            <ion-col col-4 *ngFor=\"let x of q.columns\">\n                <label class=\"grid-radio-label\"><input type=\"checkbox\" name={{i}}></label>\n            </ion-col>\n      \n          </ion-row>\n      \n      </div>\n\n      <div class=\"grid-outer\" *ngIf=\"q.type == 'grid-custom' && q.direction == 'rowwise' \">\n      \n        <ion-row>\n      \n          <ion-col col-4 class=\"columnhead\">\n            <ion-label></ion-label>\n          </ion-col>\n      \n          <ion-col col-4 *ngFor=\"let x of q.columns\" class=\"columnhead\">\n            <ion-label>{{x}}</ion-label>\n          </ion-col>\n      \n        </ion-row>\n      \n      \n          <ion-row *ngFor=\"let c of q.rows; let i = index\">\n      \n            <ion-col col-4 class=\"rowhead\">\n              <ion-label><span class=\"rowheadtext\">{{c.rowtitle}}</span></ion-label>\n            </ion-col>\n      \n            <ion-col col-4 *ngFor=\"let x of q.columns\">\n                <label *ngIf=\"c.rowtype == 'checkbox' \"><input type=\"checkbox\" name={{i}}></label>\n                <label *ngIf=\"c.rowtype == 'radio' \"><input type=\"radio\" name={{i}}></label>\n                <label *ngIf=\"c.rowtype == 'text' \">\n                  <input type=\"text\" name={{i}} style=\"max-width: 90px;\">\n                </label>\n                <label *ngIf=\"c.rowtype == 'number' \">\n                  <input type=\"number\" name={{i}} style=\"max-width: 90px;\">\n                </label>\n                <label *ngIf=\"c.rowtype == 'dropdown' \">\n                  <ion-select interface=\"popover\">\n                    <ion-select-option *ngFor=\"let opt of c.options\">{{opt}}</ion-select-option>\n                  </ion-select>\n                </label>\n            </ion-col>\n      \n          </ion-row>\n      \n      </div>\n\n      <div class=\"grid-outer\" *ngIf=\"q.type == 'grid-custom' && q.direction == 'columnwise' \">\n      \n        <ion-row>\n      \n          <ion-col col-4 class=\"columnhead\">\n            <ion-label></ion-label>\n          </ion-col>\n      \n          <ion-col col-4 *ngFor=\"let x of q.columns\" class=\"columnhead\">\n            <ion-label>{{x.coltitle}}</ion-label>\n          </ion-col>\n      \n        </ion-row>\n      \n      \n          <ion-row *ngFor=\"let s of q.rows; let i = index\">\n      \n            <ion-col col-4  class=\"rowhead\">\n              <ion-label><span class=\"rowheadtext\">{{q.rows[i]}}</span></ion-label>\n            </ion-col>\n      \n            <ion-col col-4 *ngFor=\"let t of q.columns\">\n                <label *ngIf=\"t.coltype == 'checkbox' \"><input type=\"checkbox\" name={{t}}></label>\n                <label *ngIf=\"t.coltype == 'radio' \"><input type=\"radio\" name={{t}}></label>\n                <label *ngIf=\"t.coltype == 'text' \">\n                  <input type=\"text\" name={{t}} style=\"max-width: 90px;\">\n                </label>\n                <label *ngIf=\"t.coltype == 'number' \">\n                  <input type=\"number\" name={{t}} style=\"max-width: 90px;\">\n                </label>\n                <label *ngIf=\"t.coltype == 'dropdown' \">\n                  <ion-select interface=\"popover\">\n                    <ion-select-option *ngFor=\"let opt of t.options\">{{opt}}</ion-select-option>\n                  </ion-select>\n                </label>\n            </ion-col>\n      \n          </ion-row>\n\n        <button (click)=\"nextQuestion()\">Next</button>\n      \n      </div>\n      \n    </ion-content> -->\n\n\n\n    <!-- <span *ngIf=\"data.type == 'checkbox' \">\n      <ion-col col-4 style=\"border: groove;\" *ngFor=\"let x of data.columns\">\n        <ion-item>\n          <ion-checkbox color=\"primary\"></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </span> -->\n\n      <!-- <ion-col col-4 style=\"border: groove;\" ng-repeat=\"y in data.rows\">\n        <ion-label>{{data.rows[5]}}</ion-label>\n      </ion-col> -->\n   \n      <!-- <ion-col col-4 style=\"border: groove;\">\n        <ion-item>\n          <ion-label>Select</ion-label>\n          <ion-select interface=\"popover\">\n            <ion-select-option value=\"nes\">Helicopter</ion-select-option>\n            <ion-select-option value=\"n64\">Aeroplane</ion-select-option>\n            <ion-select-option value=\"ps\">Jet</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-4 style=\"border: groove; font-size: 32px;\">\n        <ion-item>\n          <ion-input placeholder=\"Enter Input\"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-4 style=\"border: groove;\">\n        <ion-item>\n          <ion-label>Car</ion-label>\n          <ion-radio slot=\"start\"></ion-radio>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-4 style=\"border: groove;\">\n        <ion-item >\n          <ion-label>Bike</ion-label>\n          <ion-radio slot=\"start\"></ion-radio>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-4 style=\"border: groove;\">\n        <ion-item >\n          <ion-label>Scooty</ion-label>\n          <ion-radio slot=\"start\"></ion-radio>\n        </ion-item>\n      </ion-col> -->\n\n\n\n\n      <!-- <ion-footer>\n        <ion-toolbar>\n          <ion-button slot=\"end\" color=\"medium\" routerLink=\"/image-page\">Next <ion-icon name=\"arrow-forward-outline\"></ion-icon></ion-button>\n\n        </ion-toolbar>\n      </ion-footer> -->\n\n      <!-- <ion-footer>\n        <ion-toolbar>\n          <ion-button slot=\"end\" color=\"medium\" (click)=\"nextQuestion()\">Next <ion-icon class=\"right-arrow\" name=\"arrow-forward-outline\"></ion-icon></ion-button>\n\n        </ion-toolbar>\n      </ion-footer> -->\n\n\n\n\n<!-- <ion-list>\n  <ion-radio-group>\n    <ion-list-header>\n      <ion-label>\n        Auto Manufacturers\n      </ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Cord</ion-label>\n      <ion-radio value=\"cord\"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Duesenberg</ion-label>\n      <ion-radio value=\"duesenberg\"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Hudson</ion-label>\n      <ion-radio value=\"hudson\"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Packard</ion-label>\n      <ion-radio value=\"packard\"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Studebaker</ion-label>\n      <ion-radio value=\"studebaker\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n</ion-list> -->");

/***/ }),

/***/ 4604:
/*!********************************!*\
  !*** ./src/app/home/data.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"questions":[{"questiontext":"Q1. Choose as pr your requirements","type":"grid-custom","direction":"columnwise","columns":[{"coltitle":"One","coltype":"checkbox"},{"coltitle":"Two","coltype":"text"},{"coltitle":"Three","coltype":"radio"},{"coltitle":"Four","coltype":"number"},{"coltitle":"Five","coltype":"dropdown","options":["Car","bike","scooty","Jet"]},{"coltitle":"Six","coltype":"dropdown","options":["Car1","bike1","scooty1","Jet1"]}],"rows":["January","Febuary","March","April","May","June"]},{"questiontext":"Q2. Choose as pr your requirements","type":"grid-custom","direction":"columnwise","columns":[{"coltitle":"One","coltype":"checkbox"},{"coltitle":"Two","coltype":"text"},{"coltitle":"Three","coltype":"radio"},{"coltitle":"Four","coltype":"number"},{"coltitle":"Five","coltype":"dropdown","options":["Car","bike","scooty","Jet"]},{"coltitle":"Six","coltype":"dropdown","option":["Car1","bike1","scooty1","Jet1"]}],"rows":["January","Febuary","March","April","May","June"]}]}');

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map