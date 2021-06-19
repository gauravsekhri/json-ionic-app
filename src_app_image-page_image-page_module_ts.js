(self["webpackChunkscratch"] = self["webpackChunkscratch"] || []).push([["src_app_image-page_image-page_module_ts"],{

/***/ 36:
/*!*********************************************************!*\
  !*** ./src/app/image-page/image-page-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagePagePageRoutingModule": () => (/* binding */ ImagePagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _image_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-page.page */ 8871);




const routes = [
    {
        path: '',
        component: _image_page_page__WEBPACK_IMPORTED_MODULE_0__.ImagePagePage
    }
];
let ImagePagePageRoutingModule = class ImagePagePageRoutingModule {
};
ImagePagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ImagePagePageRoutingModule);



/***/ }),

/***/ 4292:
/*!*************************************************!*\
  !*** ./src/app/image-page/image-page.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagePagePageModule": () => (/* binding */ ImagePagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _image_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-page-routing.module */ 36);
/* harmony import */ var _image_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-page.page */ 8871);







let ImagePagePageModule = class ImagePagePageModule {
};
ImagePagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _image_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImagePagePageRoutingModule
        ],
        declarations: [_image_page_page__WEBPACK_IMPORTED_MODULE_1__.ImagePagePage]
    })
], ImagePagePageModule);



/***/ }),

/***/ 8871:
/*!***********************************************!*\
  !*** ./src/app/image-page/image-page.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagePagePage": () => (/* binding */ ImagePagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_image_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./image-page.page.html */ 7318);
/* harmony import */ var _image_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-page.page.scss */ 7397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ImagePagePage = class ImagePagePage {
    constructor() {
        this.data2 = {
            imgpath: "E:\ionic1\scratch\src\assets\sec5.png"
        };
    }
    ngOnInit() {
    }
};
ImagePagePage.ctorParameters = () => [];
ImagePagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-image-page',
        template: _raw_loader_image_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_image_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ImagePagePage);



/***/ }),

/***/ 7397:
/*!*************************************************!*\
  !*** ./src/app/image-page/image-page.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap);\nion-content {\n  --ion-background-color: #c0bfbf;\n  font-family: \"Poppins\", sans-serif !important;\n}\n.container {\n  max-width: 70%;\n  margin: 60px auto 0px auto;\n  background-color: #fff;\n  padding: 50px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);\n}\nimg {\n  width: 50%;\n  height: 50%;\n  margin-left: 10%;\n}\nh2 {\n  margin: 0px;\n}\nion-footer {\n  padding-right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHVGQUFBO0FBS1I7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FBSEY7QUFNQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUVBLHNCQUFBO0VBRUEsYUFBQTtFQUVBLCtDQUFBO0FBTkY7QUFTQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFORjtBQVNBO0VBQ0UsV0FBQTtBQU5GO0FBU0E7RUFDRSxtQkFBQTtBQU5GIiwiZmlsZSI6ImltYWdlLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANTAwOzcwMCZkaXNwbGF5PXN3YXApO1xyXG5cclxuJHBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuXHJcblxyXG5pb24tY29udGVudHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjYzBiZmJmO1xyXG4gIGZvbnQtZmFtaWx5OiAkcG9wcGlucyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIG1heC13aWR0aDogNzAlO1xyXG4gIG1hcmdpbjogNjBweCBhdXRvIDBweCBhdXRvO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzgsIDIzMCwgMTg0KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNjMGJmYmY7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4zKTtcclxufVxyXG5cclxuaW1ne1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuaDJ7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbmlvbi1mb290ZXJ7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 7318:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/image-page/image-page.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>image-page</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"container\">\n    <h2>Image</h2>\n    <br/>\n    <!-- <ion-item *ngFor=\"let x of data2.imgpath\"> -->\n      <!-- <ion-thumbnail slot=\"start\"> -->\n        <!-- <img src=\"https://img.mobiscroll.com/demos/card_2.png\"></img> -->\n        <img src=\"https://els-jbs-prod-cdn.jbs.elsevierhealth.com/cms/attachment/ef4a8372-424c-4190-8feb-13fe46ecebe3/gr1_lrg.jpg\">\n      <!-- </ion-thumbnail> -->\n      <!-- <ion-label>{{item.text}}</ion-label> -->\n    <!-- </ion-item> -->\n  </div>\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button slot=\"end\" color=\"medium\" routerLink=\"/image-page\">Next <ion-icon name=\"arrow-forward-outline\"></ion-icon></ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_image-page_image-page_module_ts.js.map