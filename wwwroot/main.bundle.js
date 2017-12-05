webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workouts_workouts_component__ = __webpack_require__("../../../../../src/app/workouts/workouts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_workout_create_workout_component__ = __webpack_require__("../../../../../src/app/create-workout/create-workout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_exercise_create_exercise_component__ = __webpack_require__("../../../../../src/app/create-exercise/create-exercise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: 'workouts', pathMatch: 'full' },
    { path: 'create-workout', component: __WEBPACK_IMPORTED_MODULE_3__create_workout_create_workout_component__["a" /* CreateWorkoutComponent */] },
    { path: 'create-exercise', component: __WEBPACK_IMPORTED_MODULE_4__create_exercise_create_exercise_component__["a" /* CreateExerciseComponent */] },
    { path: 'workouts', component: __WEBPACK_IMPORTED_MODULE_2__workouts_workouts_component__["a" /* WorkoutsComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\r\n<nav>\r\n  <a routerLink=\"/\" routerLinkActive=\"active\" type=\"button\" class=\"btn btn-primary\">Home</a>\r\n  <a *ngIf=\"isLoggedIn()\" routerLink=\"/create-workout\" routerLinkActive=\"active\" type=\"button\" class=\"btn btn-success\">Create Workout</a>\r\n  <a *ngIf=\"isLoggedIn()\" routerLink=\"/create-exercise\" routerLinkActive=\"active\" type=\"button\" class=\"btn btn-success\">Create Exercise</a>\r\n  <a *ngIf=\"!isLoggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\" type=\"button\" class=\"btn btn-default\">Login</a>\r\n  <button *ngIf=\"isLoggedIn()\" (click)=\"logout()\" type=\"button\" class=\"btn btn-danger\">Logout</button>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.title = 'Fitness application - Grp 19';
    }
    AppComponent.prototype.logout = function () {
        this.auth.logout();
        window.location.reload();
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.auth.isLoggedIn();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workouts_workouts_component__ = __webpack_require__("../../../../../src/app/workouts/workouts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__workouts_service__ = __webpack_require__("../../../../../src/app/workouts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_workout_create_workout_component__ = __webpack_require__("../../../../../src/app/create-workout/create-workout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__create_exercise_create_exercise_component__ = __webpack_require__("../../../../../src/app/create-exercise/create-exercise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__workouts_workouts_component__["a" /* WorkoutsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__create_workout_create_workout_component__["a" /* CreateWorkoutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__create_exercise_create_exercise_component__["a" /* CreateExerciseComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__workouts_service__["a" /* WorkoutsService */],
            __WEBPACK_IMPORTED_MODULE_11__authentication_authentication_service__["a" /* AuthenticationService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.register = function (email, password) {
        return this.http.post('/api/account/register', {
            email: email,
            password: password
        })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('jwt-token', user.token);
            }
        });
    };
    AuthenticationService.prototype.login = function (email, password) {
        return this.http.post('api/account/login', { email: email, password: password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('jwt-token', user.token);
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('jwt-token');
        console.log('Removing token');
    };
    AuthenticationService.prototype.getToken = function () {
        if (window.localStorage['jwt-token']) {
            return window.localStorage['jwt-token'];
        }
        else {
            return '';
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var token = this.getToken();
        if (token) {
            var payload = JSON.parse(window.atob(token.split('.')[1]));
            return payload.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/create-exercise/create-exercise.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-exercise/create-exercise.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br>\r\n\r\n<div class=\"form-group\">\r\n\r\n  <select #id>\r\n    <option *ngFor=\"let workout of workouts\" value=\"{{workout.id}}\">{{workout.name}}</option>\r\n  </select>\r\n  <br>\r\n  <label>Exercise:</label>\r\n  <input #exercise class=\"form-control\"/>\r\n  <br>\r\n  <label>Description:</label>\r\n  <input #description class=\"form-control\"/>\r\n  <br>\r\n  <label>Set:</label>\r\n  <input #set class=\"form-control\"/>\r\n  <br>\r\n  <label>Rep/Times:</label>\r\n  <input #rep class=\"form-control\"/>\r\n  <br>\r\n  <button (click)=\"createExercise(id.value, exercise.value ,description.value,set.value,rep.value)\" class=\"btn btn-primary\">Save</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/create-exercise/create-exercise.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateExerciseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workouts_service__ = __webpack_require__("../../../../../src/app/workouts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateExerciseComponent = (function () {
    function CreateExerciseComponent(workoutService, router) {
        this.workoutService = workoutService;
        this.router = router;
    }
    CreateExerciseComponent.prototype.getWorkouts = function () {
        var _this = this;
        this.workoutService.getWorkouts()
            .then(function (response) {
            _this.workouts = response;
        });
    };
    CreateExerciseComponent.prototype.ngOnInit = function () {
        this.getWorkouts();
    };
    CreateExerciseComponent.prototype.createExercise = function (id, exercise, description, set, rep) {
        var _this = this;
        this.workoutService.createExercise(id, exercise, description, set, rep).then(function () { return _this.router.navigate(['/']); });
    };
    return CreateExerciseComponent;
}());
CreateExerciseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-exercise',
        template: __webpack_require__("../../../../../src/app/create-exercise/create-exercise.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create-exercise/create-exercise.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__workouts_service__["a" /* WorkoutsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__workouts_service__["a" /* WorkoutsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], CreateExerciseComponent);

var _a, _b;
//# sourceMappingURL=create-exercise.component.js.map

/***/ }),

/***/ "../../../../../src/app/create-workout/create-workout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-workout/create-workout.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br>\r\n\r\n<div class=\"form-group\">\r\n<label>Name:</label>\r\n<input #name class=\"form-control\"/>\r\n<button (click)=\"createWorkout(name.value)\" class=\"btn btn-primary\">Save</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/create-workout/create-workout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateWorkoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workouts_service__ = __webpack_require__("../../../../../src/app/workouts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateWorkoutComponent = (function () {
    function CreateWorkoutComponent(workoutService, router) {
        this.workoutService = workoutService;
        this.router = router;
    }
    CreateWorkoutComponent.prototype.ngOnInit = function () {
    };
    CreateWorkoutComponent.prototype.createWorkout = function (name) {
        var _this = this;
        this.workoutService.createWorkout(name).then(function () { return _this.router.navigate(['/']); });
    };
    return CreateWorkoutComponent;
}());
CreateWorkoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-workout',
        template: __webpack_require__("../../../../../src/app/create-workout/create-workout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create-workout/create-workout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__workouts_service__["a" /* WorkoutsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__workouts_service__["a" /* WorkoutsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], CreateWorkoutComponent);

var _a, _b;
//# sourceMappingURL=create-workout.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"col-md-6 col-md-offset-3\">\r\n  <h2>Login</h2>\r\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n      <label for=\"email\">Email</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\"\r\n             required/>\r\n      <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\r\n             required/>\r\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n      <img *ngIf=\"loading\"\r\n           src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n      <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate(['/workouts']);
        }, function (error) {
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n  <h2>Register</h2>\r\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n      <label for=\"email\">Email</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\r\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n      <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.auth.register(this.model.email, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate(['/workouts']);
        }, function (error) {
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/workouts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Import RxJs required methods


var WorkoutsService = (function () {
    //private apiUrl = 'http://salty-garden-88598.herokuapp.com/api'; // URL to API
    function WorkoutsService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.workoutUrl = 'api/workouts';
        this.exerciseUrl = 'api/exercises';
    }
    WorkoutsService.prototype.getWorkouts = function () {
        return this.http.get(this.workoutUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WorkoutsService.prototype.getWorkout = function (id) {
        var url = this.workoutUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WorkoutsService.prototype.createWorkout = function (name) {
        var headers = this.getHeaders();
        return this.http
            .post(this.workoutUrl, JSON.stringify({ name: name }), {
            headers: headers,
        })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    WorkoutsService.prototype.createExercise = function (id, exercise, description, set, reps) {
        return this.http
            .post(this.exerciseUrl, JSON.stringify({
            id: id,
            exercise: exercise,
            description: description,
            set: set,
            reps: reps
        }), { headers: this.getHeaders() })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    WorkoutsService.prototype.countUp = function (id) {
        var url = this.workoutUrl + "/" + id;
        return this.http.put(url, {}, { headers: this.getHeaders() })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    WorkoutsService.prototype.deleteWorkout = function (id) {
        var url = this.workoutUrl + "/" + id + "}";
        return this.http.delete(url, { headers: this.getHeaders() })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    WorkoutsService.prototype.handleError = function (error) {
        console.error('Error occured', error);
        return Promise.reject(error.message || error);
    };
    WorkoutsService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.auth.getToken());
        return headers;
    };
    return WorkoutsService;
}());
WorkoutsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], WorkoutsService);

var _a, _b;
//# sourceMappingURL=workouts.service.js.map

/***/ }),

/***/ "../../../../../src/app/workouts/workouts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".workouts {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n.workouts li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/workouts/workouts.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let workout of workouts\" >\r\n  <h3>{{workout.name}}</h3>\r\n  <!--<button (click)=\"deleteWorkout(workout._id)\" type='button' class=\"btn btn-danger glyphicon glyphicon-trash\"></button> -->\r\n  <button *ngIf=\"isLoggedIn()\" (click)=\"countUp(workout.id)\" type='button' class=\"btn btn-info glyphicon glyphicon-arrow-up\">  {{workout.count}}</button>\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table\">\r\n      <thead>\r\n      <tr>\r\n        <td>Exercise</td>\r\n        <td>Description</td>\r\n        <td>Set</td>\r\n        <td>Reps/Time</td>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let exercise of workout.exercises\">\r\n        <td>{{exercise.exercise}}</td>\r\n        <td>{{exercise.description}}</td>\r\n        <td>{{exercise.set}}</td>\r\n        <td>{{exercise.reps}}</td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/workouts/workouts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workouts_service__ = __webpack_require__("../../../../../src/app/workouts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkoutsComponent = (function () {
    function WorkoutsComponent(workoutService, ref, auth) {
        this.workoutService = workoutService;
        this.ref = ref;
        this.auth = auth;
    }
    WorkoutsComponent.prototype.getWorkouts = function () {
        var _this = this;
        this.workoutService.getWorkouts()
            .then(function (response) {
            _this.workouts = response;
            _this.ref.markForCheck();
        });
    };
    WorkoutsComponent.prototype.isLoggedIn = function () {
        return this.auth.isLoggedIn();
    };
    WorkoutsComponent.prototype.ngOnInit = function () {
        this.getWorkouts();
    };
    WorkoutsComponent.prototype.countUp = function (id) {
        var _this = this;
        this.workoutService.countUp(id).then(function () { return _this.getWorkouts(); });
    };
    WorkoutsComponent.prototype.deleteWorkout = function (id) {
        var _this = this;
        this.workoutService.deleteWorkout(id).then(function () { return _this.getWorkouts(); });
    };
    return WorkoutsComponent;
}());
WorkoutsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-workouts',
        template: __webpack_require__("../../../../../src/app/workouts/workouts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/workouts/workouts.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__workouts_service__["a" /* WorkoutsService */]],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__workouts_service__["a" /* WorkoutsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__workouts_service__["a" /* WorkoutsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object])
], WorkoutsComponent);

var _a, _b, _c;
//# sourceMappingURL=workouts.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map