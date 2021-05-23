(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"\" role=\"banner\">\n    <div class=\"\">\n      <div>\n        <mat-toolbar class=\"header-toolbar\">\n          <!-- <div class=\"logo\" id=\"basic-logo\">\n            <img class=\"img-logo\" src=\"../assets/img/tv_200.jpeg\" alt=\"logo\">\n          </div> -->\n          <div class=\"header-content\">\n            <div class=\"header-text-wrapper\" [routerLink]=\"['movies']\">\n              <span class=\"header-text-tv\">TV</span>\n              <span class=\"header-text-box\">Box</span>\n            </div>\n            <div class=\"search-wrapper\">\n              <app-search></app-search>\n            </div>\n          </div>\n          \n         \n          <span class=\"fill-space\"></span>\n          <div fxShow=\"true\" fxHide.gt-sm=\"true\">\n            <button mat-icon-button id=\"menu\" (click)=\"sidenav.toggle()\">\n              <mat-icon><i class=\"fas fa-bars fa-2x\"></i></mat-icon>\n            </button>\n          </div>\n          <span class=\"example-spacer\"></span>\n          <nav fxShow=\"true\" fxHide.lt-md=\"true\" role=\"navigation\" class=\"\" id=\"headerLinks\">\n            <ul class=\"headerLinks\">\n  \n              <ng-container>\n                <li class=\"header-link\">\n                  <a mat-button id=\"user\" class=\"\" routerLink=\"/movies\">\n                    <span>Home</span>\n                  </a>\n                </li>\n\n                <li class=\"header-link\">\n                  <a mat-button id=\"newReleases\" class=\"\" routerLink=\"movies/new-releases\">\n                    <span>New Releases</span>\n                  </a>\n                </li>\n\n                <li class=\"header-link\">\n                  <a mat-button id=\"popular\" class=\"nav__link\" routerLink=\"movies/popular\">\n                    <span>Popular</span>\n                  </a>\n                </li>\n\n                <li class=\"header-link\">\n                  <a mat-button id=\"popular\" class=\"nav__link\" routerLink=\"movies/myfavorites\">\n                    <span>My Favorites</span>\n                  </a>\n                </li>\n              </ng-container>\n            </ul>\n          </nav>\n        </mat-toolbar>\n        <mat-sidenav-container fxFlexFill class=\"container\">\n          <mat-sidenav\n          class=\"sidenav\"\n                position=\"end\"\n                color=\"primary\"\n                #sidenav\n                fxLayout=\"column\"\n                mode=\"over\"\n                opened=\"false\"\n                fxHide.gt-sm=\"true\">\n            <nav fxLayout=\"column\">\n              <ul class=\"sidenav-list\">\n  \n                <ng-container>\n                    <li class=\"header-link\">\n                      <a mat-button id=\"home\" class=\"\" routerLink=\"/movies\">\n                        <span>Home</span>\n                      </a>\n                    </li>\n\n                    <li class=\"header-link\">\n                      <a mat-button id=\"newReleases\" class=\"\" routerLink=\"movies/new-releases\">\n                        <span>New Releases</span>\n                      </a>\n                    </li>\n    \n                    <li class=\"header-link\">\n                      <a mat-button id=\"popular\" class=\"nav__link\" routerLink=\"movies/popular\">\n                        <span>Popular</span>\n                      </a>\n                    </li>\n\n                    <li class=\"header-link\">\n                      <a mat-button id=\"popular\" class=\"nav__link\" routerLink=\"movies/myfavorites\">\n                        <span>My Favorites</span>\n                      </a>\n                    </li>\n                  </ng-container>\n              </ul>\n            </nav>\n          </mat-sidenav>\n          <mat-sidenav-content fxFlexFill>\n            <main id=\"main-content\">\n              <router-outlet></router-outlet>\n              <app-footer></app-footer>\n            </main>\n          </mat-sidenav-content>\n        </mat-sidenav-container>\n      </div>\n    </div>\n  </header>\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"main-footer\">Copyright &copy; 2021</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/movie-detail/movie-detail.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/movie-detail/movie-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"movieDetails\" [ngStyle]=\"{width: innerWidth + 'px'}\">\n    <section class=\"image\" *ngIf=\"movieDetails && movieDetails.posterPath\">\n        <div class=\"info-row\" *ngIf=\"innerWidth <= 700\">\n            <div class=\"movie-title\">\n                <h1>{{movieDetails.title}}</h1>\n            </div>\n        </div>\n        <img [src]=\"movieDetails.posterPath\" />\n    </section>\n    <section class=\"info\" *ngIf=\"movieDetails\">\n        <div class=\"info-row\" *ngIf=\"innerWidth > 700\">\n            <div class=\"movie-title\">\n                <h1>{{movieDetails.title}}</h1>\n            </div>\n        </div>\n        <div class=\"info-row info-row-details\">\n            <div class=\"year-info\" *ngIf=\"movieDetails && movieDetails.releaseYear && movieDetails.runTime\">\n                <h2>{{movieDetails.releaseYear}} | {{movieDetails.runTime}}</h2>\n            </div>\n            <div class=\"genres\">\n                <h2>Genres</h2>\n                <div class=\"genres-items\">\n                    <span class=\"genre\" *ngFor=\"let genre of movieDetails.genres\">{{genre.name.toUpperCase()}}</span>\n                </div>\n            </div>\n            <div class=\"add-and-play-block\">\n                <div class=\"favorites\">\n                    <span>\n                        <i class=\"fas fa-heart fa-2x favorites-color\" *ngIf=\"getIsFavorite(movieDetails)\"\n                            (click)=\"removeFromFavorites(movieDetails)\"></i>\n                        <i class=\"far fa-heart fa-2x\" *ngIf=\"!getIsFavorite(movieDetails)\"\n                            (click)=\"addToFavorites(movieDetails)\"></i>\n                    </span>\n                    <h3>Add To Favorites</h3>\n                </div>\n                <div class=\"play\" *ngIf=\"video && video['key']\">\n                    <span>\n                        <i class=\"fab fa-youtube fa-2x\" (click)=\"openVideoModal()\"></i>\n                    </span>\n                    <h3>Play Trailer</h3>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section class=\"info-2\" *ngIf=\"movieDetails\">\n        <div class=\"info-row\">\n            <div class=\"summary-info\">\n                <h2 class=\"summary-header\">Summary</h2>\n                <h3 class=\"summary-details\">{{movieDetails.overview}}</h3>\n            </div>\n        </div>\n    </section>\n</div>\n<div>\n    <h2 class=\"header-title\">Recommeneded For You</h2>\n    <app-swiper-wrapper [movies]=\"recommendedMovies\" (movieClickedEvent)=\"movieClicked($event)\"></app-swiper-wrapper>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/movies-grid/movies-grid.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/movies-grid/movies-grid.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n    <div class=\"trendcard\">\n        <section class=\"movies-grid\" *ngIf=\"sectionMovies && sectionMovies.length > 0; else noSearchResults\">\n            <div *ngFor=\"let movie of sectionMovies\">\n                <div *ngIf=\"movie.posterPath; else noPoster\">\n                    <div class=\"\">\n                        <div class=\"card\" (click)=\"goToMovieDetails(movie)\">\n                            <img [src]=\"movie.posterPath\" />\n                            <ng-template #noPoster>\n                                <img [src]=\"movie.posterPath\" />\n                            </ng-template>\n                            <span class=\"movie_content\">\n                                <h3 class=\"movieTitle\">{{ movie.title }}</h3>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <ng-template #noSearchResults>\n            <h3 class=\"no_results_message\">Bummer - we couldn't find what you were looking for, but we thought you might\n                like these.</h3>\n            <app-swiper-wrapper [movies]=\"sectionMovies\"></app-swiper-wrapper>\n        </ng-template>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/movies/movies.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/movies/movies.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\" *ngIf=\"searchedMovies.length === 0\">\n\n  <!-- New Releases -->\n  <div class=\"movie-header\">\n    <div class=\"\">\n      <a \n        id=\"latestMovieTitle\"\n        class=\"title\"\n        [routerLink]=\"['new-releases']\">New Releases <i class=\"fas fa-angle-double-right\"></i>\n      </a>\n    </div>\n  </div>\n  <app-swiper-wrapper [movies]=\"latestMovies\"></app-swiper-wrapper>\n\n  <!-- Most Popular Movies -->\n  <div class=\"movie-header\">\n    <div class=\"\">\n      <a \n        id=\"popularMovieTitle\"\n        class=\"title\"\n        [routerLink]=\"['popular']\">Most Popular <i class=\"fas fa-angle-double-right\"></i>\n      </a>\n    </div>\n  </div>\n  <app-swiper-wrapper [movies]=\"popularMovies\"></app-swiper-wrapper>\n\n  <!-- coming soon Movies -->\n  <div class=\"movie-header\">\n    <div class=\"\">\n      <a \n        id=\"upcomingMovieTitle\"\n        class=\"title\"\n        [routerLink]=\"['coming-soon']\">Coming Soon <i class=\"fas fa-angle-double-right\"></i>\n      </a>\n    </div>\n  </div>\n  <app-swiper-wrapper [movies]=\"comingSoonMovies\"></app-swiper-wrapper>\n\n  <!-- my Favorite Movies -->\n  <div *ngIf=\"myFavoriteMovies\">\n    <div class=\" movie-header\">\n      <div class=\"\">\n        <a \n          id=\"favoriteMovieTitle\"\n          class=\"title\"\n          [routerLink]=\"['myfavorites']\">My Favorites <i class=\"fas fa-angle-double-right\"></i>\n        </a>\n      </div>\n    </div>\n    <app-swiper-wrapper [movies]=\"myFavoriteMovies\"></app-swiper-wrapper>\n  </div>\n</div>\n<div *ngIf=\"searchedMovies && searchedMovies.length > 0\">\n  <app-movies-grid [sectionMovies]=\"searchedMovies\"></app-movies-grid>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search/search.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-container\">\n    <input\n      matInput\n      class=\"search-field\"\n      #filter\n      (keyup)=\"keyUp.next($event)\"\n      placeholder=\"Search a movie\"\n    />\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/swiper-wrapper/swiper-wrapper.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/swiper-wrapper/swiper-wrapper.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"trendcard\" *ngIf=\"movies\">\n    <swiper [config]=\"config\" class=\"swiper-container\">\n      <div class=\"swiper-wrapper\" id=\"movies\">\n        <div\n          class=\"swiper-slide\"\n          *ngFor=\"let movie of movies\"\n        >\n          <div class=\"swiper_card\" (click)=\"goToMovieDetails(movie)\">\n            <div class=\"swiper_pic\" *ngIf=\"movie.posterPath\">\n              <img [src]=\"movie.posterPath\" />\n            </div>\n            <div class=\"movie_content\">\n              <h3 class=\"movieTitle\">{{ movie.title }}</h3>\n              <p></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- Add Pagination -->\n      <div class=\"swiper-pagination\"></div>\n      <!-- Add Arrows -->\n      <div class=\"swiper-button-next\"></div>\n      <div class=\"swiper-button-prev\"></div>\n    </swiper>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-dialog/video-dialog.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-dialog/video-dialog.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-actions\">\n    <a class=\"cancel\" id=\"cancel\" (click)=\"dialogRef.close(true)\">\n        <i class=\"fa fa-times fa-2x\" aria-hidden=\"true\"></i>\n    </a>\n</div>\n<mat-dialog-content>\n    <section *ngIf=\"videoLink\">\n        <h5 class=\"card-title\">\n            <div class=\"videoWrapper\">\n                <iframe [src]='videoLink' class=\"videoFrame\" frameborder=\"0\" allowfullscreen></iframe>\n            </div>\n        </h5>\n    </section>\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");
/* harmony import */ var _movies_grid_movies_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies-grid/movies-grid.component */ "./src/app/movies-grid/movies-grid.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");






var routes = [
    {
        path: "",
        redirectTo: "/movies",
        pathMatch: "full"
    },
    {
        path: "movies",
        component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"],
        data: {
            title: "Movies"
        }
    },
    {
        path: "movies/new-releases",
        component: _movies_grid_movies_grid_component__WEBPACK_IMPORTED_MODULE_4__["MoviesGridComponent"],
        data: {
            title: "New Releases"
        }
    },
    {
        path: "movies/popular",
        component: _movies_grid_movies_grid_component__WEBPACK_IMPORTED_MODULE_4__["MoviesGridComponent"],
        data: {
            title: "Popular"
        }
    },
    {
        path: "movies/coming-soon",
        component: _movies_grid_movies_grid_component__WEBPACK_IMPORTED_MODULE_4__["MoviesGridComponent"],
        data: {
            title: "Coming Soon"
        }
    },
    {
        path: "movies/myfavorites",
        component: _movies_grid_movies_grid_component__WEBPACK_IMPORTED_MODULE_4__["MoviesGridComponent"],
        data: {
            title: "My Favorites"
        }
    },
    {
        path: "movies/:movieId",
        component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailComponent"],
        data: {
            title: "Movies"
        }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-content {\n  display: grid;\n  grid-template-areas: \"header-text-wrapper search-wrapper\";\n  grid-column-gap: 10px;\n  width: 400px;\n}\n\n.header-text-wrapper {\n  grid-area: header-text-wrapper;\n  color: white;\n  font-size: 3rem;\n  font-weight: 700;\n  padding: 1rem;\n  cursor: pointer;\n}\n\n.header-text-wrapper .header-text-box {\n  color: red;\n}\n\n.search-wrapper {\n  grid-area: search-wrapper;\n  margin: auto;\n}\n\n.headerLinks {\n  color: white;\n  list-style: none;\n  display: -webkit-box;\n  display: flex;\n  margin: 0;\n}\n\n.header-link a {\n  color: white;\n  font-size: larger;\n  font-weight: 700;\n}\n\n.sidenav {\n  background-color: #060208;\n}\n\n.sidenav-list {\n  list-style: none;\n}\n\n@media (max-width: 550px) {\n  .header-content {\n    grid-template-areas: \"header-text-wrapper\" \"search-wrapper\";\n  }\n\n  .header-text-wrapper {\n    padding-left: 0;\n  }\n\n  .search-wrapper {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hbi56YWRvcm92L0Rlc2t0b3AvRGVza3RvcC9Bbmd1bGFyL3NhbXBsZV9wcm9qZWN0cy9tb3ZpZXMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9yb21hbi56YWRvcm92L0Rlc2t0b3AvRGVza3RvcC9Bbmd1bGFyL3NhbXBsZV9wcm9qZWN0cy9tb3ZpZXMvc3JjL3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSx5REFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNERjs7QURFRTtFQUNFLFVBQUE7QUNBSjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsU0FBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLHlCRXhDZ0I7QUR1Q2xCOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTtFQUNFO0lBQ0UsMkRBQ0U7RUNGSjs7RURNQTtJQUNFLGVBQUE7RUNIRjs7RURNQTtJQUNFLGNBQUE7RUNIRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3ZhcnMuc2Nzc1wiO1xyXG5cclxuLmhlYWRlci1jb250ZW50IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyLXRleHQtd3JhcHBlciBzZWFyY2gtd3JhcHBlclwiO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMTBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItdGV4dC13cmFwcGVyIHtcclxuICBncmlkLWFyZWE6IGhlYWRlci10ZXh0LXdyYXBwZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC5oZWFkZXItdGV4dC1ib3gge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtd3JhcHBlciB7XHJcbiAgZ3JpZC1hcmVhOiBzZWFyY2gtd3JhcHBlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5oZWFkZXJMaW5rcyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5oZWFkZXItbGluayBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kQ29sb3I7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWxpc3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gIC5oZWFkZXItY29udGVudCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICBcImhlYWRlci10ZXh0LXdyYXBwZXJcIlxyXG4gICAgICBcInNlYXJjaC13cmFwcGVyXCI7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXRleHQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcbiIsIi5oZWFkZXItY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyLXRleHQtd3JhcHBlciBzZWFyY2gtd3JhcHBlclwiO1xuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLmhlYWRlci10ZXh0LXdyYXBwZXIge1xuICBncmlkLWFyZWE6IGhlYWRlci10ZXh0LXdyYXBwZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVhZGVyLXRleHQtd3JhcHBlciAuaGVhZGVyLXRleHQtYm94IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnNlYXJjaC13cmFwcGVyIHtcbiAgZ3JpZC1hcmVhOiBzZWFyY2gtd3JhcHBlcjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaGVhZGVyTGlua3Mge1xuICBjb2xvcjogd2hpdGU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhlYWRlci1saW5rIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc2lkZW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjAyMDg7XG59XG5cbi5zaWRlbmF2LWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLmhlYWRlci1jb250ZW50IHtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImhlYWRlci10ZXh0LXdyYXBwZXJcIiBcInNlYXJjaC13cmFwcGVyXCI7XG4gIH1cblxuICAuaGVhZGVyLXRleHQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG5cbiAgLnNlYXJjaC13cmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufSIsIiRiYWNrZ3JvdW5kQ29sb3I6ICMwNjAyMDg7XHJcbiRncmV5Q29sb3I6ICMzNTMzMzQ7XHJcbiR3aGl0ZUNvbG9yOiB3aGl0ZTtcclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'movies';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-useful-swiper */ "./node_modules/ngx-useful-swiper/fesm5/ngx-useful-swiper.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _movies_grid_movies_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./movies-grid/movies-grid.component */ "./src/app/movies-grid/movies-grid.component.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");
/* harmony import */ var _video_dialog_video_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./video-dialog/video-dialog.component */ "./src/app/video-dialog/video-dialog.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _swiper_wrapper_swiper_wrapper_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./swiper-wrapper/swiper-wrapper.component */ "./src/app/swiper-wrapper/swiper-wrapper.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"],
                _movies_grid_movies_grid_component__WEBPACK_IMPORTED_MODULE_12__["MoviesGridComponent"], _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_13__["MovieDetailComponent"], _video_dialog_video_dialog_component__WEBPACK_IMPORTED_MODULE_14__["VideoDialogComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _swiper_wrapper_swiper_wrapper_component__WEBPACK_IMPORTED_MODULE_16__["SwiperWrapperComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_6__["NgxUsefulSwiperModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"]
            ],
            entryComponents: [
                _video_dialog_video_dialog_component__WEBPACK_IMPORTED_MODULE_14__["VideoDialogComponent"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.preferencesKey = "preferencesKey";
        this.omdbKey = "91de5c715704fa823e6bd294096efabc";
        this.castLookup = "https://api.themoviedb.org/3/search/multi"; //;?api_key=${omdbKey}&language=en-US&query=`;
        this.genreList = "https://api.themoviedb.org/3/genre/movie/list";
        this.search_api = "https://api.themoviedb.org/3/search/movie?&api_key=" + this.omdbKey + "&query=";
        this.youtubeBaseURL = "https://www.youtube.com/watch?v=";
        this.searchMoviesEmit = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    AppService.prototype.getMovies = function () {
        var _this = this;
        var sessionValues = this.getPreferences();
        var session = { cast: [], genre: [], language: [], writer: [] };
        if (sessionValues) {
            session = JSON.parse(sessionValues);
        }
        var actorIds = session.cast.map(function (item) { return item.preferenceKey; }) || [];
        var writerIds = session.writer.map(function (item) { return item.preferenceKey; }) || [];
        var genereIds = session.genre.map(function (item) { return item.preferenceKey; }) || [];
        var languageOptions = session.language.map(function (item) { return item.preferenceKey; }) || [];
        var ids = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](actorIds, writerIds);
        var formattedIds = "";
        var formattedGenreIds = "";
        var formattedLanguages = "";
        if (ids && ids.length) {
            formattedIds = "with_people=" + ids.join(",");
        }
        if (genereIds && genereIds.length) {
            formattedGenreIds = "with_genres=" + genereIds.join(",");
        }
        if (languageOptions && languageOptions.length) {
            formattedLanguages = "language=" + languageOptions.join(",");
        }
        var urlObj = {
            latest: "https://api.themoviedb.org/3/discover/movie?api_key=" + this.omdbKey + "&primary_release_date.gte=2019-07-01",
            popular: "https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=" + this.omdbKey + "&primary_release_date.gte=2019-07-01",
            comingSoon: "https://api.themoviedb.org/3/movie/upcoming?api_key=" + this.omdbKey + "&page=1",
            criticalReview: "https://api.themoviedb.org/3/movie/top_rated?api_key=" + this.omdbKey + "&page=1&&primary_release_year=2019"
        };
        var urlObservables = Object.keys(urlObj).map(function (key) {
            var url = [
                urlObj[key],
                formattedIds,
                formattedGenreIds,
                formattedLanguages,
            ].join("&");
            return _this.http.get(url);
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(urlObservables);
    };
    AppService.prototype.getPreferences = function () {
        return localStorage.getItem(this.preferencesKey);
    };
    AppService.prototype.setPreferences = function (userPreferences) {
        localStorage.setItem(this.preferencesKey, userPreferences);
    };
    AppService.prototype.lookupCastMember = function (query) {
        return this.http.get(this.castLookup, {
            params: {
                api_key: this.omdbKey,
                language: "en-US",
                query: query,
            },
        });
    };
    AppService.prototype.getGenres = function () {
        return this.http.get(this.genreList, {
            params: {
                api_key: this.omdbKey,
                language: "en-US",
            },
        });
    };
    AppService.prototype.getSectionMovies = function (section) {
        var url = "";
        switch (section) {
            case "new-releases":
                url = "https://api.themoviedb.org/3/discover/movie?api_key=" + this.omdbKey + "&primary_release_date.gte=2020-05-01";
                break;
            case "popular":
                url = "https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=" + this.omdbKey + "&primary_release_date.gte=2019-07-01";
                break;
            case "coming-soon":
                url = "https://api.themoviedb.org/3/movie/upcoming?api_key=" + this.omdbKey + "&page=1";
                break;
            case "alt":
                url = "https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=" + this.omdbKey + "&primary_release_date.gte=2020-01-01";
                break;
        }
        return this.http.get(url);
    };
    AppService.prototype.getMovieBySectionAndName = function (section, query) {
        var url = "";
        url = "https://api.themoviedb.org/3/search/movie?api_key=" + this.omdbKey + "&query=" + query;
        return this.http.get(url);
    };
    AppService.prototype.getMovieDetailsById = function (movieId) {
        var url = "";
        url = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + this.omdbKey;
        return this.http.get(url);
    };
    AppService.prototype.getVideo = function (movieId) {
        var url = "";
        url = "https://api.themoviedb.org/3/movie/" + movieId + "/videos?api_key=" + this.omdbKey + "&language=en-US";
        return this.http.get(url);
    };
    AppService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        })
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");



















var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"]
            ],
            exports: [
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-areas: \"image info\" \"info-2 info-2\";\n  grid-template-columns: 300px 1fr;\n}\n\n.image {\n  grid-area: image;\n  min-height: 300px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: start;\n          justify-content: start;\n  box-shadow: var(--shadow);\n}\n\n.image img {\n  min-width: -webkit-fill-available;\n  max-width: 200px;\n}\n\n.info {\n  grid-area: info;\n  display: grid;\n  grid-gap: 20px;\n  color: white;\n  padding: 1rem;\n  width: inherit;\n}\n\n.info .info-row {\n  width: inherit;\n}\n\n.info .info-row .genres {\n  overflow-wrap: break-word;\n}\n\n.info .info-row .summary-info {\n  width: inherit;\n}\n\n.info .info-row .summary-info .summary-header {\n  width: inherit;\n}\n\n.info .info-row .summary-info .summary-details {\n  word-wrap: break-word;\n}\n\n.info-2 {\n  grid-area: info-2;\n  display: grid;\n  grid-gap: 20px;\n  color: white;\n  padding: 1rem;\n  width: inherit;\n}\n\n.info-2 .info-row {\n  width: inherit;\n}\n\n.info-2 .info-row .genres {\n  overflow-wrap: break-word;\n}\n\n.info-2 .info-row .summary-info {\n  width: inherit;\n}\n\n.info-2 .info-row .summary-info .summary-header {\n  width: inherit;\n}\n\n.info-2 .info-row .summary-info .summary-details {\n  word-wrap: break-word;\n}\n\n.genres {\n  height: -webkit-min-content;\n  height: -moz-min-content;\n  height: min-content;\n  margin: 1.5rem 0 1.5rem 0;\n}\n\n.genres h2 {\n  margin: inherit;\n}\n\n.genres .genres-items {\n  display: -webkit-box;\n  display: flex;\n  width: inherit;\n  flex-flow: wrap;\n}\n\n.genre {\n  padding: 0.5rem;\n  background-color: #353334;\n  border-radius: 22px;\n  margin: 0.5rem 0.5rem 0.5rem 0;\n  font-size: large;\n  font-weight: 700;\n}\n\n.add-and-play-block {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n}\n\n.add-and-play-block h3 {\n  margin-left: 10px;\n}\n\n.add-and-play-block .favorites {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.add-and-play-block .favorites .fa-heart {\n  cursor: pointer;\n}\n\n.add-and-play-block .favorites-color {\n  color: red;\n}\n\n.add-and-play-block .play {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-left: 1rem;\n}\n\n.add-and-play-block .play .fab {\n  color: red;\n  background-image: radial-gradient(at center, white 40%, transparent 40%);\n  cursor: pointer;\n}\n\n.header-title {\n  color: white;\n  margin-top: 2rem;\n}\n\n@media (max-width: 824px) {\n  h1 {\n    font-size: 1.7rem;\n  }\n\n  h2 {\n    font-size: 1.5rem;\n  }\n\n  .wrapper {\n    grid-template-areas: \"image info\" \"info-2 info-2\";\n    grid-template-columns: 200px 580px;\n  }\n\n  .info h1 {\n    font-size: 2rem;\n  }\n\n  .movie-title {\n    font-size: 2rem;\n    color: white;\n  }\n\n  .info {\n    width: initial;\n    padding: 0.5rem;\n  }\n\n  .image img {\n    max-width: 200px;\n    min-width: unset;\n  }\n}\n\n@media (max-width: 769px) {\n  h1 {\n    font-size: 1.7rem;\n  }\n\n  h2 {\n    font-size: 1.5rem;\n  }\n\n  .wrapper {\n    grid-template-areas: \"image info\" \"info-2 info-2\";\n    grid-template-columns: 200px 1fr;\n  }\n\n  .info h1 {\n    font-size: 2rem;\n  }\n\n  .movie-title {\n    font-size: 2rem;\n    color: white;\n  }\n\n  .info {\n    width: initial;\n    padding: 0.5rem;\n  }\n\n  .image img {\n    max-width: 200px;\n    min-width: unset;\n  }\n}\n\n@media (max-width: 700px) {\n  h1 {\n    font-size: 1.7rem;\n  }\n\n  h2 {\n    font-size: 1.5rem;\n  }\n\n  .wrapper {\n    grid-template-areas: \"image info\" \"info-2 info-2\";\n    grid-template-columns: 100px 1fr;\n  }\n\n  .info-row-details {\n    margin: 3rem 1rem 1rem 1rem;\n  }\n\n  .info h1 {\n    font-size: 2rem;\n  }\n\n  .movie-title {\n    font-size: 2rem;\n    color: white;\n  }\n\n  .image img {\n    max-width: 120px;\n    min-width: unset;\n  }\n}\n\n@media (max-width: 500px) {\n  .wrapper {\n    grid-template-areas: \"image info\" \"info-2 info-2\";\n    grid-template-columns: 100px 1fr;\n  }\n}\n\n@media (max-width: 415px) {\n  h1 {\n    font-size: 1.5rem;\n  }\n\n  h2 {\n    font-size: 1rem;\n  }\n\n  h3 {\n    font-size: 0.8rem;\n  }\n\n  .wrapper {\n    grid-template-areas: \"image info\" \"info-2 info-2\";\n    grid-template-columns: 100px 260px;\n  }\n\n  .info-row-details {\n    margin: 1.2rem 0 0 0;\n  }\n\n  .info {\n    width: initial;\n    padding: 0.5rem;\n  }\n\n  .info h1 {\n    font-size: 1.5rem;\n  }\n\n  .movie-title {\n    font-size: 2rem;\n    color: white;\n  }\n\n  .info-2 {\n    padding: 0;\n  }\n\n  .image {\n    min-height: 240px;\n  }\n\n  .image img {\n    max-width: 120px;\n    min-width: unset;\n  }\n\n  .genres {\n    height: -webkit-min-content;\n    height: -moz-min-content;\n    height: min-content;\n    margin: 0.5rem 0;\n  }\n  .genres h2 {\n    margin: inherit;\n  }\n  .genres .genres-items {\n    display: -webkit-box;\n    display: flex;\n    width: inherit;\n    flex-flow: wrap;\n  }\n\n  .genre {\n    padding: 0.3rem;\n    margin: 0.3rem 0.3rem 0 0;\n    font-size: smaller;\n    font-weight: 500;\n  }\n\n  .add-and-play-block {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: start;\n            align-items: start;\n  }\n  .add-and-play-block h3 {\n    margin-left: 10px;\n  }\n  .add-and-play-block .play {\n    margin-left: 0;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n}\n\n@media (max-width: 361px) {\n  h1 {\n    font-size: 1.5rem;\n  }\n\n  h2 {\n    font-size: 1rem;\n  }\n\n  h3 {\n    font-size: 0.8rem;\n  }\n\n  .wrapper {\n    grid-template-areas: \"image info\" \"info-2 info-2\";\n    grid-template-columns: 100px 215px;\n  }\n\n  .info-row-details {\n    margin: 1.2rem 0 0 0;\n  }\n\n  .info h1 {\n    font-size: 1.5rem;\n  }\n\n  .movie-title {\n    font-size: 2rem;\n    color: white;\n  }\n\n  .info-2 {\n    padding: 0;\n  }\n\n  .image {\n    min-height: 240px;\n  }\n\n  .image img {\n    max-width: 120px;\n    min-width: unset;\n  }\n\n  .genres {\n    height: -webkit-min-content;\n    height: -moz-min-content;\n    height: min-content;\n    margin: 0.5rem 0;\n  }\n  .genres h2 {\n    margin: inherit;\n  }\n  .genres .genres-items {\n    display: -webkit-box;\n    display: flex;\n    width: inherit;\n    flex-flow: wrap;\n  }\n\n  .genre {\n    padding: 0.3rem;\n    margin: 0.3rem 0.3rem 0 0;\n    font-size: smaller;\n    font-weight: 500;\n  }\n\n  .add-and-play-block {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: start;\n            align-items: start;\n  }\n  .add-and-play-block h3 {\n    margin-left: 10px;\n  }\n  .add-and-play-block .play {\n    margin-left: 0;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n}\n\n@media (max-width: 321px) {\n  h1 {\n    font-size: 1.5rem;\n  }\n\n  h2 {\n    font-size: 1rem;\n  }\n\n  h3 {\n    font-size: 0.8rem;\n  }\n\n  .wrapper {\n    grid-template-areas: \"image info\" \"info-2 info-2\";\n    grid-template-columns: 100px 170px;\n  }\n\n  .info-row-details {\n    margin: 1.5rem 0 0 0;\n  }\n\n  .info {\n    width: initial;\n    padding: 0.5rem;\n  }\n\n  .info h1 {\n    font-size: 1.5rem;\n  }\n\n  .movie-title {\n    font-size: 2rem;\n    color: white;\n  }\n\n  .info-2 {\n    padding: 0;\n  }\n\n  .image {\n    min-height: 240px;\n  }\n\n  .image img {\n    max-width: 120px;\n    min-width: unset;\n  }\n\n  .genres {\n    height: -webkit-min-content;\n    height: -moz-min-content;\n    height: min-content;\n    margin: 0.5rem 0;\n  }\n  .genres h2 {\n    margin: inherit;\n  }\n  .genres .genres-items {\n    display: -webkit-box;\n    display: flex;\n    width: inherit;\n    flex-flow: wrap;\n  }\n\n  .genre {\n    padding: 0.3rem;\n    margin: 0.3rem 0.3rem 0 0;\n    font-size: smaller;\n    font-weight: 500;\n  }\n\n  .add-and-play-block {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: start;\n            align-items: start;\n  }\n  .add-and-play-block h3 {\n    margin-left: 10px;\n  }\n  .add-and-play-block .play {\n    margin-left: 0;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n}\n\n@media (max-width: 321px) {\n  h1 {\n    font-size: 1.5rem;\n  }\n\n  h2 {\n    font-size: 1rem;\n  }\n\n  h3 {\n    font-size: 0.8rem;\n  }\n\n  .wrapper {\n    grid-template-areas: \"image info\" \"info-2 info-2\";\n    grid-template-columns: 100px 170px;\n  }\n\n  .info-row-details {\n    margin: 1.5rem 0 0 0;\n  }\n\n  .info {\n    width: initial;\n    padding: 0.5rem;\n  }\n\n  .info h1 {\n    font-size: 1.5rem;\n  }\n\n  .movie-title {\n    font-size: 2rem;\n    color: white;\n  }\n\n  .info-2 {\n    padding: 0;\n  }\n\n  .image {\n    min-height: 240px;\n  }\n\n  .image img {\n    max-width: 120px;\n    min-width: unset;\n  }\n\n  .genres {\n    height: -webkit-min-content;\n    height: -moz-min-content;\n    height: min-content;\n    margin: 0.5rem 0;\n  }\n  .genres h2 {\n    margin: inherit;\n  }\n  .genres .genres-items {\n    display: -webkit-box;\n    display: flex;\n    width: inherit;\n    flex-flow: wrap;\n  }\n\n  .genre {\n    padding: 0.3rem;\n    margin: 0.3rem 0.3rem 0 0;\n    font-size: smaller;\n    font-weight: 500;\n  }\n\n  .add-and-play-block {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: start;\n            align-items: start;\n  }\n  .add-and-play-block h3 {\n    margin-left: 10px;\n  }\n  .add-and-play-block .play {\n    margin-left: 0;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hbi56YWRvcm92L0Rlc2t0b3AvRGVza3RvcC9Bbmd1bGFyL3NhbXBsZV9wcm9qZWN0cy9tb3ZpZXMvc3JjL2FwcC9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3JvbWFuLnphZG9yb3YvRGVza3RvcC9EZXNrdG9wL0FuZ3VsYXIvc2FtcGxlX3Byb2plY3RzL21vdmllcy9zcmMvdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxpREFDRTtFQUVGLGdDQUFBO0FDSEY7O0FET0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtBQ0xGOztBRFFBO0VBRUUsaUNBQUE7RUFDQSxnQkFBQTtBQ05GOztBRFNBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUUvQlc7RUZnQ1gsYUFBQTtFQUNBLGNBQUE7QUNORjs7QURPRTtFQUNFLGNBQUE7QUNMSjs7QURNSTtFQUNFLHlCQUFBO0FDSk47O0FETUk7RUFDRSxjQUFBO0FDSk47O0FES007RUFDRSxjQUFBO0FDSFI7O0FES007RUFDRSxxQkFBQTtBQ0hSOztBRFNBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlFdkRXO0VGd0RYLGFBQUE7RUFDQSxjQUFBO0FDTkY7O0FET0U7RUFDRSxjQUFBO0FDTEo7O0FETUk7RUFDRSx5QkFBQTtBQ0pOOztBRE1JO0VBQ0UsY0FBQTtBQ0pOOztBREtNO0VBQ0UsY0FBQTtBQ0hSOztBREtNO0VBQ0UscUJBQUE7QUNIUjs7QURTQTtFQUNFLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLHlCQUFBO0FDTkY7O0FET0U7RUFDRSxlQUFBO0FDTEo7O0FET0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0xKOztBRFNBO0VBQ0UsZUFBQTtFQUNBLHlCRTNGVTtFRjRGVixtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ05GOztBRFNBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMkJBQUE7VUFBQSxxQkFBQTtBQ05GOztBRFFFO0VBQ0UsaUJBQUE7QUNOSjs7QURTRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDJCQUFBO1VBQUEscUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDUEo7O0FEUUk7RUFDRSxlQUFBO0FDTk47O0FEVUU7RUFDRSxVQUFBO0FDUko7O0FEV0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwyQkFBQTtVQUFBLHFCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGlCQUFBO0FDVEo7O0FEVUk7RUFDRSxVQUFBO0VBQ0Esd0VBQUE7RUFDQSxlQUFBO0FDUk47O0FEYUE7RUFDRSxZRXBJVztFRnFJWCxnQkFBQTtBQ1ZGOztBRGFBO0VBQ0U7SUFDRSxpQkFBQTtFQ1ZGOztFRFlBO0lBQ0UsaUJBQUE7RUNURjs7RURXQTtJQUNFLGlEQUNFO0lBRUYsa0NBQUE7RUNWRjs7RURhQTtJQUNFLGVBQUE7RUNWRjs7RURhQTtJQUNFLGVBQUE7SUFDQSxZRTVKUztFRGtKWDs7RURhQTtJQUNFLGNBQUE7SUFDQSxlQUFBO0VDVkY7O0VEYUE7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VDVkY7QUFDRjs7QURhQTtFQUNFO0lBQ0UsaUJBQUE7RUNYRjs7RURhQTtJQUNFLGlCQUFBO0VDVkY7O0VEWUE7SUFDRSxpREFDRTtJQUVGLGdDQUFBO0VDWEY7O0VEY0E7SUFDRSxlQUFBO0VDWEY7O0VEY0E7SUFDRSxlQUFBO0lBQ0EsWUU5TFM7RURtTFg7O0VEY0E7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFQ1hGOztFRGNBO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQ1hGO0FBQ0Y7O0FEY0E7RUFDRTtJQUNFLGlCQUFBO0VDWkY7O0VEY0E7SUFDRSxpQkFBQTtFQ1hGOztFRGFBO0lBQ0UsaURBQ0U7SUFFRixnQ0FBQTtFQ1pGOztFRGVBO0lBQ0UsMkJBQUE7RUNaRjs7RURlQTtJQUNFLGVBQUE7RUNaRjs7RURlQTtJQUNFLGVBQUE7SUFDQSxZRXBPUztFRHdOWDs7RURtQkE7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VDaEJGO0FBQ0Y7O0FEbUJBO0VBQ0U7SUFDRSxpREFDRTtJQUVGLGdDQUFBO0VDbkJGO0FBQ0Y7O0FEc0JBO0VBQ0U7SUFDRSxpQkFBQTtFQ3BCRjs7RURzQkE7SUFDRSxlQUFBO0VDbkJGOztFRHFCQTtJQUNFLGlCQUFBO0VDbEJGOztFRG9CQTtJQUNFLGlEQUNFO0lBRUYsa0NBQUE7RUNuQkY7O0VEc0JBO0lBQ0Usb0JBQUE7RUNuQkY7O0VEc0JBO0lBQ0UsY0FBQTtJQUNBLGVBQUE7RUNuQkY7O0VEc0JBO0lBQ0UsaUJBQUE7RUNuQkY7O0VEc0JBO0lBQ0UsZUFBQTtJQUNBLFlFMVJTO0VEdVFYOztFRHNCQTtJQUNFLFVBQUE7RUNuQkY7O0VEc0JBO0lBQ0UsaUJBQUE7RUNuQkY7O0VEc0JBO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQ25CRjs7RURzQkE7SUFDRSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSxnQkFBQTtFQ25CRjtFRG9CRTtJQUNFLGVBQUE7RUNsQko7RURvQkU7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ2xCSjs7RURzQkE7SUFDRSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VDbkJGOztFRHNCQTtJQUNFLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLHdCQUFBO1lBQUEsa0JBQUE7RUNuQkY7RURvQkU7SUFDRSxpQkFBQTtFQ2xCSjtFRHdCRTtJQUNFLGNBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0VDdEJKO0FBQ0Y7O0FEMEJBO0VBQ0U7SUFDRSxpQkFBQTtFQ3hCRjs7RUQwQkE7SUFDRSxlQUFBO0VDdkJGOztFRHlCQTtJQUNFLGlCQUFBO0VDdEJGOztFRHdCQTtJQUNFLGlEQUNFO0lBRUYsa0NBQUE7RUN2QkY7O0VEMEJBO0lBQ0Usb0JBQUE7RUN2QkY7O0VEMEJBO0lBQ0UsaUJBQUE7RUN2QkY7O0VEMEJBO0lBQ0UsZUFBQTtJQUNBLFlFM1dTO0VEb1ZYOztFRDBCQTtJQUNFLFVBQUE7RUN2QkY7O0VEMEJBO0lBQ0UsaUJBQUE7RUN2QkY7O0VEMEJBO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQ3ZCRjs7RUQwQkE7SUFDRSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSxnQkFBQTtFQ3ZCRjtFRHdCRTtJQUNFLGVBQUE7RUN0Qko7RUR3QkU7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ3RCSjs7RUQwQkE7SUFDRSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VDdkJGOztFRDBCQTtJQUNFLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLHdCQUFBO1lBQUEsa0JBQUE7RUN2QkY7RUR3QkU7SUFDRSxpQkFBQTtFQ3RCSjtFRDRCRTtJQUNFLGNBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0VDMUJKO0FBQ0Y7O0FEOEJBO0VBQ0U7SUFDRSxpQkFBQTtFQzVCRjs7RUQ4QkE7SUFDRSxlQUFBO0VDM0JGOztFRDZCQTtJQUNFLGlCQUFBO0VDMUJGOztFRDRCQTtJQUNFLGlEQUNFO0lBRUYsa0NBQUE7RUMzQkY7O0VEOEJBO0lBQ0Usb0JBQUE7RUMzQkY7O0VEOEJBO0lBQ0UsY0FBQTtJQUNBLGVBQUE7RUMzQkY7O0VEOEJBO0lBQ0UsaUJBQUE7RUMzQkY7O0VEOEJBO0lBQ0UsZUFBQTtJQUNBLFlFamNTO0VEc2FYOztFRDhCQTtJQUNFLFVBQUE7RUMzQkY7O0VEOEJBO0lBQ0UsaUJBQUE7RUMzQkY7O0VEOEJBO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQzNCRjs7RUQ4QkE7SUFDRSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSxnQkFBQTtFQzNCRjtFRDRCRTtJQUNFLGVBQUE7RUMxQko7RUQ0QkU7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQzFCSjs7RUQ4QkE7SUFDRSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VDM0JGOztFRDhCQTtJQUNFLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLHdCQUFBO1lBQUEsa0JBQUE7RUMzQkY7RUQ0QkU7SUFDRSxpQkFBQTtFQzFCSjtFRGdDRTtJQUNFLGNBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0VDOUJKO0FBQ0Y7O0FEa0NBO0VBQ0U7SUFDRSxpQkFBQTtFQ2hDRjs7RURrQ0E7SUFDRSxlQUFBO0VDL0JGOztFRGlDQTtJQUNFLGlCQUFBO0VDOUJGOztFRGdDQTtJQUNFLGlEQUNFO0lBRUYsa0NBQUE7RUMvQkY7O0VEa0NBO0lBQ0Usb0JBQUE7RUMvQkY7O0VEa0NBO0lBQ0UsY0FBQTtJQUNBLGVBQUE7RUMvQkY7O0VEa0NBO0lBQ0UsaUJBQUE7RUMvQkY7O0VEa0NBO0lBQ0UsZUFBQTtJQUNBLFlFdmhCUztFRHdmWDs7RURrQ0E7SUFDRSxVQUFBO0VDL0JGOztFRGtDQTtJQUNFLGlCQUFBO0VDL0JGOztFRGtDQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUMvQkY7O0VEa0NBO0lBQ0UsMkJBQUE7SUFBQSx3QkFBQTtJQUFBLG1CQUFBO0lBQ0EsZ0JBQUE7RUMvQkY7RURnQ0U7SUFDRSxlQUFBO0VDOUJKO0VEZ0NFO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUM5Qko7O0VEa0NBO0lBQ0UsZUFBQTtJQUNBLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQy9CRjs7RURrQ0E7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSx3QkFBQTtZQUFBLGtCQUFBO0VDL0JGO0VEZ0NFO0lBQ0UsaUJBQUE7RUM5Qko7RURvQ0U7SUFDRSxjQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtFQ2xDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uL3ZhcnMuc2Nzc1wiO1xyXG5cclxuLndyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwiaW1hZ2UgaW5mb1wiXHJcbiAgICBcImluZm8tMiBpbmZvLTJcIjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcclxuICAvLyBncmlkLWF1dG8tcm93czogbWlubWF4KDEwMHB4LCBhdXRvKTtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICBncmlkLWFyZWE6IGltYWdlO1xyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcclxufVxyXG5cclxuLmltYWdlIGltZyB7XHJcbiAgLy8gd2lkdGg6IGluaGVyaXQgIWltcG9ydGFudDtcclxuICBtaW4td2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGdyaWQtYXJlYTogaW5mbztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIGNvbG9yOiAkd2hpdGVDb2xvcjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIC5pbmZvLXJvdyB7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIC5nZW5yZXMge1xyXG4gICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgfVxyXG4gICAgLnN1bW1hcnktaW5mbyB7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgICAuc3VtbWFyeS1oZWFkZXIge1xyXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgICB9XHJcbiAgICAgIC5zdW1tYXJ5LWRldGFpbHMge1xyXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmluZm8tMiB7XHJcbiAgZ3JpZC1hcmVhOiBpbmZvLTI7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMjBweDtcclxuICBjb2xvcjogJHdoaXRlQ29sb3I7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICAuaW5mby1yb3cge1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAuZ2VucmVzIHtcclxuICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIH1cclxuICAgIC5zdW1tYXJ5LWluZm8ge1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgLnN1bW1hcnktaGVhZGVyIHtcclxuICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgfVxyXG4gICAgICAuc3VtbWFyeS1kZXRhaWxzIHtcclxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5nZW5yZXMge1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgbWFyZ2luOiAxLjVyZW0gMCAxLjVyZW0gMDtcclxuICBoMiB7XHJcbiAgICBtYXJnaW46IGluaGVyaXQ7XHJcbiAgfVxyXG4gIC5nZW5yZXMtaXRlbXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgZmxleC1mbG93OiB3cmFwO1xyXG4gIH1cclxufVxyXG5cclxuLmdlbnJlIHtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXlDb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gIG1hcmdpbjogMC41cmVtIDAuNXJlbSAwLjVyZW0gMDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5hZGQtYW5kLXBsYXktYmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICBoMyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4gIC5mYXZvcml0ZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLmZhLWhlYXJ0IHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZhdm9yaXRlcy1jb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuXHJcbiAgLnBsYXkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAuZmFiIHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGF0IGNlbnRlciwgd2hpdGUgNDAlLCB0cmFuc3BhcmVudCA0MCUpO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHtcclxuICBjb2xvcjogJHdoaXRlQ29sb3I7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgyNHB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuICAud3JhcHBlciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICBcImltYWdlIGluZm9cIlxyXG4gICAgICBcImluZm8tMiBpbmZvLTJcIjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggNTgwcHg7XHJcbiAgfVxyXG5cclxuICAuaW5mbyBoMSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuICAubW92aWUtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29sb3I6ICR3aGl0ZUNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLmluZm8ge1xyXG4gICAgd2lkdGg6IGluaXRpYWw7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAuaW1hZ2UgaW1nIHtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OXB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuICAud3JhcHBlciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICBcImltYWdlIGluZm9cIlxyXG4gICAgICBcImluZm8tMiBpbmZvLTJcIjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xyXG4gIH1cclxuXHJcbiAgLmluZm8gaDEge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLm1vdmllLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGNvbG9yOiAkd2hpdGVDb2xvcjtcclxuICB9XHJcblxyXG4gIC5pbmZvIHtcclxuICAgIHdpZHRoOiBpbml0aWFsO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgbWluLXdpZHRoOiB1bnNldDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcbiAgLndyYXBwZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgXCJpbWFnZSBpbmZvXCJcclxuICAgICAgXCJpbmZvLTIgaW5mby0yXCI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDFmcjtcclxuICB9XHJcblxyXG4gIC5pbmZvLXJvdy1kZXRhaWxzIHtcclxuICAgIG1hcmdpbjogM3JlbSAxcmVtIDFyZW0gMXJlbTtcclxuICB9XHJcblxyXG4gIC5pbmZvIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIC5tb3ZpZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBjb2xvcjogJHdoaXRlQ29sb3I7XHJcbiAgfVxyXG5cclxuICAuaW5mbyB7XHJcbiAgICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5pbWFnZSBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgIG1pbi13aWR0aDogdW5zZXQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICBcImltYWdlIGluZm9cIlxyXG4gICAgICBcImluZm8tMiBpbmZvLTJcIjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMWZyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQxNXB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG4gIC53cmFwcGVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgIFwiaW1hZ2UgaW5mb1wiXHJcbiAgICAgIFwiaW5mby0yIGluZm8tMlwiO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAyNjBweDtcclxuICB9XHJcblxyXG4gIC5pbmZvLXJvdy1kZXRhaWxzIHtcclxuICAgIG1hcmdpbjogMS4ycmVtIDAgMCAwO1xyXG4gIH1cclxuXHJcbiAgLmluZm8ge1xyXG4gICAgd2lkdGg6IGluaXRpYWw7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAuaW5mbyBoMSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5tb3ZpZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBjb2xvcjogJHdoaXRlQ29sb3I7XHJcbiAgfVxyXG5cclxuICAuaW5mby0yIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgbWluLWhlaWdodDogMjQwcHg7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2UgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTIwcHg7XHJcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xyXG4gIH1cclxuXHJcbiAgLmdlbnJlcyB7XHJcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgIGgyIHtcclxuICAgICAgbWFyZ2luOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gICAgLmdlbnJlcy1pdGVtcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgICBmbGV4LWZsb3c6IHdyYXA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ2VucmUge1xyXG4gICAgcGFkZGluZzogMC4zcmVtO1xyXG4gICAgbWFyZ2luOiAwLjNyZW0gMC4zcmVtIDAgMDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAuYWRkLWFuZC1wbGF5LWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgaDMge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmF2b3JpdGVzIHtcclxuICAgIH1cclxuXHJcbiAgICAucGxheSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MXB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG4gIC53cmFwcGVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgIFwiaW1hZ2UgaW5mb1wiXHJcbiAgICAgIFwiaW5mby0yIGluZm8tMlwiO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAyMTVweDtcclxuICB9XHJcblxyXG4gIC5pbmZvLXJvdy1kZXRhaWxzIHtcclxuICAgIG1hcmdpbjogMS4ycmVtIDAgMCAwO1xyXG4gIH1cclxuXHJcbiAgLmluZm8gaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAubW92aWUtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29sb3I6ICR3aGl0ZUNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLmluZm8tMiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIHtcclxuICAgIG1pbi1oZWlnaHQ6IDI0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgbWluLXdpZHRoOiB1bnNldDtcclxuICB9XHJcblxyXG4gIC5nZW5yZXMge1xyXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICBoMiB7XHJcbiAgICAgIG1hcmdpbjogaW5oZXJpdDtcclxuICAgIH1cclxuICAgIC5nZW5yZXMtaXRlbXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmdlbnJlIHtcclxuICAgIHBhZGRpbmc6IDAuM3JlbTtcclxuICAgIG1hcmdpbjogMC4zcmVtIDAuM3JlbSAwIDA7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLmFkZC1hbmQtcGxheS1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhdm9yaXRlcyB7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsYXkge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjFweCkge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxuICAud3JhcHBlciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICBcImltYWdlIGluZm9cIlxyXG4gICAgICBcImluZm8tMiBpbmZvLTJcIjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTcwcHg7XHJcbiAgfVxyXG5cclxuICAuaW5mby1yb3ctZGV0YWlscyB7XHJcbiAgICBtYXJnaW46IDEuNXJlbSAwIDAgMDtcclxuICB9XHJcblxyXG4gIC5pbmZvIHtcclxuICAgIHdpZHRoOiBpbml0aWFsO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmluZm8gaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAubW92aWUtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29sb3I6ICR3aGl0ZUNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLmluZm8tMiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIHtcclxuICAgIG1pbi1oZWlnaHQ6IDI0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgbWluLXdpZHRoOiB1bnNldDtcclxuICB9XHJcblxyXG4gIC5nZW5yZXMge1xyXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICBoMiB7XHJcbiAgICAgIG1hcmdpbjogaW5oZXJpdDtcclxuICAgIH1cclxuICAgIC5nZW5yZXMtaXRlbXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmdlbnJlIHtcclxuICAgIHBhZGRpbmc6IDAuM3JlbTtcclxuICAgIG1hcmdpbjogMC4zcmVtIDAuM3JlbSAwIDA7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLmFkZC1hbmQtcGxheS1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhdm9yaXRlcyB7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsYXkge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjFweCkge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxuICAud3JhcHBlciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICBcImltYWdlIGluZm9cIlxyXG4gICAgICBcImluZm8tMiBpbmZvLTJcIjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTcwcHg7XHJcbiAgfVxyXG5cclxuICAuaW5mby1yb3ctZGV0YWlscyB7XHJcbiAgICBtYXJnaW46IDEuNXJlbSAwIDAgMDtcclxuICB9XHJcblxyXG4gIC5pbmZvIHtcclxuICAgIHdpZHRoOiBpbml0aWFsO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmluZm8gaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAubW92aWUtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29sb3I6ICR3aGl0ZUNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLmluZm8tMiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIHtcclxuICAgIG1pbi1oZWlnaHQ6IDI0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgbWluLXdpZHRoOiB1bnNldDtcclxuICB9XHJcblxyXG4gIC5nZW5yZXMge1xyXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICBoMiB7XHJcbiAgICAgIG1hcmdpbjogaW5oZXJpdDtcclxuICAgIH1cclxuICAgIC5nZW5yZXMtaXRlbXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmdlbnJlIHtcclxuICAgIHBhZGRpbmc6IDAuM3JlbTtcclxuICAgIG1hcmdpbjogMC4zcmVtIDAuM3JlbSAwIDA7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLmFkZC1hbmQtcGxheS1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhdm9yaXRlcyB7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsYXkge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLndyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpbWFnZSBpbmZvXCIgXCJpbmZvLTIgaW5mby0yXCI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xufVxuXG4uaW1hZ2Uge1xuICBncmlkLWFyZWE6IGltYWdlO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG59XG5cbi5pbWFnZSBpbWcge1xuICBtaW4td2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5pbmZvIHtcbiAgZ3JpZC1hcmVhOiBpbmZvO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogaW5oZXJpdDtcbn1cbi5pbmZvIC5pbmZvLXJvdyB7XG4gIHdpZHRoOiBpbmhlcml0O1xufVxuLmluZm8gLmluZm8tcm93IC5nZW5yZXMge1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuLmluZm8gLmluZm8tcm93IC5zdW1tYXJ5LWluZm8ge1xuICB3aWR0aDogaW5oZXJpdDtcbn1cbi5pbmZvIC5pbmZvLXJvdyAuc3VtbWFyeS1pbmZvIC5zdW1tYXJ5LWhlYWRlciB7XG4gIHdpZHRoOiBpbmhlcml0O1xufVxuLmluZm8gLmluZm8tcm93IC5zdW1tYXJ5LWluZm8gLnN1bW1hcnktZGV0YWlscyB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLmluZm8tMiB7XG4gIGdyaWQtYXJlYTogaW5mby0yO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogaW5oZXJpdDtcbn1cbi5pbmZvLTIgLmluZm8tcm93IHtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG4uaW5mby0yIC5pbmZvLXJvdyAuZ2VucmVzIHtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cbi5pbmZvLTIgLmluZm8tcm93IC5zdW1tYXJ5LWluZm8ge1xuICB3aWR0aDogaW5oZXJpdDtcbn1cbi5pbmZvLTIgLmluZm8tcm93IC5zdW1tYXJ5LWluZm8gLnN1bW1hcnktaGVhZGVyIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG4uaW5mby0yIC5pbmZvLXJvdyAuc3VtbWFyeS1pbmZvIC5zdW1tYXJ5LWRldGFpbHMge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5nZW5yZXMge1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICBtYXJnaW46IDEuNXJlbSAwIDEuNXJlbSAwO1xufVxuLmdlbnJlcyBoMiB7XG4gIG1hcmdpbjogaW5oZXJpdDtcbn1cbi5nZW5yZXMgLmdlbnJlcy1pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBmbGV4LWZsb3c6IHdyYXA7XG59XG5cbi5nZW5yZSB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzMzNDtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgbWFyZ2luOiAwLjVyZW0gMC41cmVtIDAuNXJlbSAwO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYWRkLWFuZC1wbGF5LWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmFkZC1hbmQtcGxheS1ibG9jayBoMyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmFkZC1hbmQtcGxheS1ibG9jayAuZmF2b3JpdGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hZGQtYW5kLXBsYXktYmxvY2sgLmZhdm9yaXRlcyAuZmEtaGVhcnQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkLWFuZC1wbGF5LWJsb2NrIC5mYXZvcml0ZXMtY29sb3Ige1xuICBjb2xvcjogcmVkO1xufVxuLmFkZC1hbmQtcGxheS1ibG9jayAucGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuLmFkZC1hbmQtcGxheS1ibG9jayAucGxheSAuZmFiIHtcbiAgY29sb3I6IHJlZDtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGF0IGNlbnRlciwgd2hpdGUgNDAlLCB0cmFuc3BhcmVudCA0MCUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MjRweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICAud3JhcHBlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpbWFnZSBpbmZvXCIgXCJpbmZvLTIgaW5mby0yXCI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCA1ODBweDtcbiAgfVxuXG4gIC5pbmZvIGgxIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cblxuICAubW92aWUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuaW5mbyB7XG4gICAgd2lkdGg6IGluaXRpYWw7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICB9XG5cbiAgLmltYWdlIGltZyB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5cbiAgLndyYXBwZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW1hZ2UgaW5mb1wiIFwiaW5mby0yIGluZm8tMlwiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xuICB9XG5cbiAgLmluZm8gaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIC5tb3ZpZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5pbmZvIHtcbiAgICB3aWR0aDogaW5pdGlhbDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cblxuICAuaW1hZ2UgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1pbi13aWR0aDogdW5zZXQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICAud3JhcHBlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpbWFnZSBpbmZvXCIgXCJpbmZvLTIgaW5mby0yXCI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxZnI7XG4gIH1cblxuICAuaW5mby1yb3ctZGV0YWlscyB7XG4gICAgbWFyZ2luOiAzcmVtIDFyZW0gMXJlbSAxcmVtO1xuICB9XG5cbiAgLmluZm8gaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIC5tb3ZpZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5pbWFnZSBpbWcge1xuICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgbWluLXdpZHRoOiB1bnNldDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImltYWdlIGluZm9cIiBcImluZm8tMiBpbmZvLTJcIjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDFmcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQxNXB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cblxuICAud3JhcHBlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpbWFnZSBpbmZvXCIgXCJpbmZvLTIgaW5mby0yXCI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAyNjBweDtcbiAgfVxuXG4gIC5pbmZvLXJvdy1kZXRhaWxzIHtcbiAgICBtYXJnaW46IDEuMnJlbSAwIDAgMDtcbiAgfVxuXG4gIC5pbmZvIHtcbiAgICB3aWR0aDogaW5pdGlhbDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cblxuICAuaW5mbyBoMSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICAubW92aWUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuaW5mby0yIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmltYWdlIHtcbiAgICBtaW4taGVpZ2h0OiAyNDBweDtcbiAgfVxuXG4gIC5pbWFnZSBpbWcge1xuICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgbWluLXdpZHRoOiB1bnNldDtcbiAgfVxuXG4gIC5nZW5yZXMge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgfVxuICAuZ2VucmVzIGgyIHtcbiAgICBtYXJnaW46IGluaGVyaXQ7XG4gIH1cbiAgLmdlbnJlcyAuZ2VucmVzLWl0ZW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGZsZXgtZmxvdzogd3JhcDtcbiAgfVxuXG4gIC5nZW5yZSB7XG4gICAgcGFkZGluZzogMC4zcmVtO1xuICAgIG1hcmdpbjogMC4zcmVtIDAuM3JlbSAwIDA7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAuYWRkLWFuZC1wbGF5LWJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICB9XG4gIC5hZGQtYW5kLXBsYXktYmxvY2sgaDMge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIC5hZGQtYW5kLXBsYXktYmxvY2sgLnBsYXkge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNjFweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG5cbiAgLndyYXBwZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW1hZ2UgaW5mb1wiIFwiaW5mby0yIGluZm8tMlwiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMjE1cHg7XG4gIH1cblxuICAuaW5mby1yb3ctZGV0YWlscyB7XG4gICAgbWFyZ2luOiAxLjJyZW0gMCAwIDA7XG4gIH1cblxuICAuaW5mbyBoMSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICAubW92aWUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuaW5mby0yIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmltYWdlIHtcbiAgICBtaW4taGVpZ2h0OiAyNDBweDtcbiAgfVxuXG4gIC5pbWFnZSBpbWcge1xuICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgbWluLXdpZHRoOiB1bnNldDtcbiAgfVxuXG4gIC5nZW5yZXMge1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgfVxuICAuZ2VucmVzIGgyIHtcbiAgICBtYXJnaW46IGluaGVyaXQ7XG4gIH1cbiAgLmdlbnJlcyAuZ2VucmVzLWl0ZW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGZsZXgtZmxvdzogd3JhcDtcbiAgfVxuXG4gIC5nZW5yZSB7XG4gICAgcGFkZGluZzogMC4zcmVtO1xuICAgIG1hcmdpbjogMC4zcmVtIDAuM3JlbSAwIDA7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAuYWRkLWFuZC1wbGF5LWJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICB9XG4gIC5hZGQtYW5kLXBsYXktYmxvY2sgaDMge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIC5hZGQtYW5kLXBsYXktYmxvY2sgLnBsYXkge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMjFweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG5cbiAgLndyYXBwZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW1hZ2UgaW5mb1wiIFwiaW5mby0yIGluZm8tMlwiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTcwcHg7XG4gIH1cblxuICAuaW5mby1yb3ctZGV0YWlscyB7XG4gICAgbWFyZ2luOiAxLjVyZW0gMCAwIDA7XG4gIH1cblxuICAuaW5mbyB7XG4gICAgd2lkdGg6IGluaXRpYWw7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICB9XG5cbiAgLmluZm8gaDEge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5cbiAgLm1vdmllLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLmluZm8tMiB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5pbWFnZSB7XG4gICAgbWluLWhlaWdodDogMjQwcHg7XG4gIH1cblxuICAuaW1hZ2UgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgIG1pbi13aWR0aDogdW5zZXQ7XG4gIH1cblxuICAuZ2VucmVzIHtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG4gIH1cbiAgLmdlbnJlcyBoMiB7XG4gICAgbWFyZ2luOiBpbmhlcml0O1xuICB9XG4gIC5nZW5yZXMgLmdlbnJlcy1pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBmbGV4LWZsb3c6IHdyYXA7XG4gIH1cblxuICAuZ2VucmUge1xuICAgIHBhZGRpbmc6IDAuM3JlbTtcbiAgICBtYXJnaW46IDAuM3JlbSAwLjNyZW0gMCAwO1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgLmFkZC1hbmQtcGxheS1ibG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgfVxuICAuYWRkLWFuZC1wbGF5LWJsb2NrIGgzIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICAuYWRkLWFuZC1wbGF5LWJsb2NrIC5wbGF5IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzIxcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuXG4gIC53cmFwcGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImltYWdlIGluZm9cIiBcImluZm8tMiBpbmZvLTJcIjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDE3MHB4O1xuICB9XG5cbiAgLmluZm8tcm93LWRldGFpbHMge1xuICAgIG1hcmdpbjogMS41cmVtIDAgMCAwO1xuICB9XG5cbiAgLmluZm8ge1xuICAgIHdpZHRoOiBpbml0aWFsO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgfVxuXG4gIC5pbmZvIGgxIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuXG4gIC5tb3ZpZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5pbmZvLTIge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuaW1hZ2Uge1xuICAgIG1pbi1oZWlnaHQ6IDI0MHB4O1xuICB9XG5cbiAgLmltYWdlIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xuICB9XG5cbiAgLmdlbnJlcyB7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xuICB9XG4gIC5nZW5yZXMgaDIge1xuICAgIG1hcmdpbjogaW5oZXJpdDtcbiAgfVxuICAuZ2VucmVzIC5nZW5yZXMtaXRlbXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgZmxleC1mbG93OiB3cmFwO1xuICB9XG5cbiAgLmdlbnJlIHtcbiAgICBwYWRkaW5nOiAwLjNyZW07XG4gICAgbWFyZ2luOiAwLjNyZW0gMC4zcmVtIDAgMDtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC5hZGQtYW5kLXBsYXktYmxvY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIH1cbiAgLmFkZC1hbmQtcGxheS1ibG9jayBoMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLmFkZC1hbmQtcGxheS1ibG9jayAucGxheSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufSIsIiRiYWNrZ3JvdW5kQ29sb3I6ICMwNjAyMDg7XHJcbiRncmV5Q29sb3I6ICMzNTMzMzQ7XHJcbiR3aGl0ZUNvbG9yOiB3aGl0ZTtcclxuIl19 */"

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.ts ***!
  \********************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _video_dialog_video_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../video-dialog/video-dialog.component */ "./src/app/video-dialog/video-dialog.component.ts");







var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent(activatedRoute, appService, _sanitizer, dialog) {
        this.activatedRoute = activatedRoute;
        this.appService = appService;
        this._sanitizer = _sanitizer;
        this.dialog = dialog;
        this.recommendedMovies = [];
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        this.movieId = this.activatedRoute.snapshot.params['movieId'];
        this.getMovieDetailsById(this.movieId);
        this.getSectionMovies();
        this.innerWidth = window.innerWidth - 25;
    };
    MovieDetailComponent.prototype.getMovieDetailsById = function (movieId) {
        var _this = this;
        this.appService.getMovieDetailsById(movieId).subscribe(function (res) {
            _this.movieDetails = _this.mapMovie(res);
            _this.getVideo(_this.movieId);
        });
    };
    MovieDetailComponent.prototype.mapMovie = function (movie) {
        var result = Object.assign({}, movie);
        result["posterPath"] = movie.poster_path
            ? "https://image.tmdb.org/t/p/w200/" + movie.poster_path + "?api_key=" + this.appService.omdbKey
            : "assets/img/frink.png";
        result["overviewPath"] = "https://image.tmdb.org/t/p/w200/" + movie.backdrop_path + "?api_key=" + this.appService.omdbKey;
        result["releaseYear"] = movie.release_date.split("-")[0];
        var runtime = movie.runtime.toString();
        var runTimeHours = 0;
        var runTimeMinutes = 0;
        if (runtime && runtime.length) {
            var hour_1 = 60;
            var remainder = movie.runtime - hour_1;
            var remainder_2 = movie.runtime - hour_1 * 2;
            var remainder_3 = movie.runtime - hour_1 * 3;
            if (remainder_3 && remainder_3 >= 0) {
                runTimeHours = 3;
                runTimeMinutes = remainder_3;
            }
            else if (remainder_2 && remainder_2 >= 0) {
                runTimeHours = 2;
                runTimeMinutes = remainder_2;
            }
            else if (remainder && remainder >= 0) {
                runTimeHours = 1;
                runTimeMinutes = remainder;
            }
            else if (remainder && remainder < 0) {
                runTimeHours = 0;
                runTimeMinutes = movie.runtime;
            }
            result["runTime"] = runTimeHours + "h " + runTimeMinutes + "m";
        }
        var favoriteMovies = new Array();
        favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies"));
        if (favoriteMovies && favoriteMovies.length > 0) {
            favoriteMovies.forEach(function (item) {
                if (item.id === result.id) {
                    item["isFavorite"] === true ? result["isFavorite"] = true : result["isFavorite"] = false;
                }
            });
        }
        else {
            result["isFavorite"] = false;
        }
        return result;
    };
    MovieDetailComponent.prototype.addToFavorites = function (movieDetails) {
        this.movieDetails["isFavorite"] = true;
        var favoriteMovies = new Array();
        favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies"));
        if (favoriteMovies && favoriteMovies.length > 0) {
            // if found, returns the country object, else returns undefined
            var existingMovie = favoriteMovies.find(function (movie) { return movie["id"] === movieDetails.id; });
            // if it's a new city, add it.
            if (!existingMovie) {
                favoriteMovies.push(movieDetails);
                localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
            }
        }
        else {
            favoriteMovies = [];
            favoriteMovies.push(movieDetails);
            localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
        }
    };
    MovieDetailComponent.prototype.removeFromFavorites = function (movieDetails) {
        this.movieDetails["isFavorite"] = false;
        var favoriteMovies = new Array();
        favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies"));
        if (favoriteMovies && favoriteMovies.length > 0) {
            favoriteMovies.map(function (movie, index) {
                if (movie.id === movieDetails.id) {
                    favoriteMovies.splice(index, 1);
                    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
                }
            });
        }
    };
    MovieDetailComponent.prototype.getIsFavorite = function (movieDetails) {
        return this.movieDetails["isFavorite"];
    };
    MovieDetailComponent.prototype.getVideo = function (movieId) {
        var _this = this;
        this.appService.getVideo(movieId).subscribe(function (res) {
            _this.video = res["results"][0];
            if (_this.video && _this.video["key"]) {
                _this.videoLink = _this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + _this.video["key"]);
            }
        });
    };
    MovieDetailComponent.prototype.openVideoModal = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        var relativeWidth = (this.innerWidth * 80) / 100; // take up to 80% of the screen size
        if (this.innerWidth > 1500) {
            relativeWidth = (1500 * 80) / 100;
        }
        else {
            relativeWidth = (this.innerWidth * 80) / 100;
        }
        var relativeHeight = (relativeWidth * 9) / 16 + 120; // 16:9 to which we add 120 px for the dialog action buttons ("close")
        dialogConfig.width = relativeWidth + 'px';
        dialogConfig.height = relativeHeight + 'px';
        dialogConfig.panelClass = "custom-modalbox";
        var dialogRef = this.dialog.open(_video_dialog_video_dialog_component__WEBPACK_IMPORTED_MODULE_6__["VideoDialogComponent"], dialogConfig);
        dialogRef.componentInstance.videoLink = this.videoLink;
    };
    MovieDetailComponent.prototype.getSectionMovies = function () {
        var _this = this;
        this.appService.getSectionMovies("popular").subscribe(function (res) {
            _this.recommendedMovies = _this.mapMovies(res["results"]);
        });
    };
    MovieDetailComponent.prototype.mapMovies = function (movies) {
        var _this = this;
        return movies.map(function (movie) {
            var result = Object.assign({}, movie);
            result["posterPath"] = movie.poster_path
                ? "https://image.tmdb.org/t/p/w200/" + movie.poster_path + "?api_key=" + _this.appService.omdbKey
                : "assets/img/frink.png";
            result["overviewPath"] = "https://image.tmdb.org/t/p/w200/" + movie.backdrop_path + "?api_key=" + _this.appService.omdbKey;
            return result;
        });
    };
    MovieDetailComponent.prototype.movieClicked = function (movie) {
        this.getMovieDetailsById(movie.id);
    };
    MovieDetailComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth - 25;
    };
    MovieDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
    ], MovieDetailComponent.prototype, "onResize", null);
    MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-detail',
            template: __webpack_require__(/*! raw-loader!./movie-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/movie-detail/movie-detail.component.html"),
            styles: [__webpack_require__(/*! ./movie-detail.component.scss */ "./src/app/movie-detail/movie-detail.component.scss")]
        })
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());



/***/ }),

/***/ "./src/app/movies-grid/movies-grid.component.scss":
/*!********************************************************!*\
  !*** ./src/app/movies-grid/movies-grid.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no_results_message {\n  color: white;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hbi56YWRvcm92L0Rlc2t0b3AvRGVza3RvcC9Bbmd1bGFyL3NhbXBsZV9wcm9qZWN0cy9tb3ZpZXMvc3JjL2FwcC9tb3ZpZXMtZ3JpZC9tb3ZpZXMtZ3JpZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW92aWVzLWdyaWQvbW92aWVzLWdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy1ncmlkL21vdmllcy1ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vX3Jlc3VsdHNfbWVzc2FnZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuIiwiLm5vX3Jlc3VsdHNfbWVzc2FnZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/movies-grid/movies-grid.component.ts":
/*!******************************************************!*\
  !*** ./src/app/movies-grid/movies-grid.component.ts ***!
  \******************************************************/
/*! exports provided: MoviesGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesGridComponent", function() { return MoviesGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");




var MoviesGridComponent = /** @class */ (function () {
    function MoviesGridComponent(appService, activatedRoute, router) {
        var _this = this;
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.isNotFound = false;
        this.getMoviesObservableSubscription = this.appService.searchMoviesEmit.asObservable().subscribe(function (refresh) {
            _this.sectionMovies = [];
            _this.sectionMovies = refresh;
            if (_this.sectionMovies && _this.sectionMovies.length === 0) {
                _this.getSectionMovies("alt");
            }
        });
        switch (this.activatedRoute.snapshot['_routerState'].url) {
            case "/movies/new-releases":
                this.section = "new-releases";
                break;
            case "/movies/popular":
                this.section = "popular";
                break;
            case "/movies/coming-soon":
                this.section = "coming-soon";
                break;
            case "/movies/myfavorites":
                this.section = "myfavorites";
                break;
        }
    }
    MoviesGridComponent.prototype.ngOnInit = function () {
        if (this.section && !this.sectionMovies) {
            this.getSectionMovies();
        }
    };
    MoviesGridComponent.prototype.ngOnDestroy = function () {
        if (this.getMoviesObservableSubscription) {
            this.getMoviesObservableSubscription.unsubscribe();
        }
    };
    MoviesGridComponent.prototype.getSectionMovies = function (type) {
        var _this = this;
        if (this.section && this.section !== "myfavorites") {
            this.appService.getSectionMovies(this.section).subscribe(function (res) {
                // making alternative call to display a swiper in case if no results returned from 
                // the searchMoviesEmit observable:
                _this.sectionMovies = _this.mapMovies(res["results"]);
            });
        }
        else {
            this.sectionMovies = JSON.parse(localStorage.getItem("favoriteMovies"));
        }
    };
    MoviesGridComponent.prototype.mapMovies = function (movies) {
        var _this = this;
        return movies.map(function (movie) {
            var result = Object.assign({}, movie);
            result["posterPath"] = movie.poster_path
                ? "https://image.tmdb.org/t/p/w200/" + movie.poster_path + "?api_key=" + _this.appService.omdbKey
                : "assets/img/frink.png";
            result["overviewPath"] = "https://image.tmdb.org/t/p/w200/" + movie.backdrop_path + "?api_key=" + _this.appService.omdbKey;
            return result;
        });
    };
    MoviesGridComponent.prototype.goToMovieDetails = function (details) {
        this.appService.movieDetails = details;
        this.router.navigate(["movies/" + details.id]);
    };
    MoviesGridComponent.ctorParameters = function () { return [
        { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MoviesGridComponent.prototype, "sectionMovies", void 0);
    MoviesGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies-grid',
            template: __webpack_require__(/*! raw-loader!./movies-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/movies-grid/movies-grid.component.html"),
            styles: [__webpack_require__(/*! ./movies-grid.component.scss */ "./src/app/movies-grid/movies-grid.component.scss")]
        })
    ], MoviesGridComponent);
    return MoviesGridComponent;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.scss":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-color: #060208;\n  width: 100%;\n  color: white;\n  margin-top: 10px;\n}\n\n.title {\n  text-align: left;\n  padding-left: 20px;\n  font-family: sans-serif;\n  font-size: 26px;\n  color: white;\n  font-weight: 700;\n}\n\n.date {\n  padding-top: 7px;\n  text-align: right;\n  padding-right: 20px;\n  padding-left: 20px;\n  font-family: sans-serif;\n  font-size: 18px;\n}\n\n.movie-header {\n  margin-top: 1rem;\n}\n\n@media screen and (max-width: 600px) {\n  .date {\n    text-align: left;\n    padding-top: 0px;\n    font-size: 16px;\n  }\n}\n\n.cards {\n  background-color: #060208;\n  margin-top: 15px;\n  height: 46%;\n  text-align: center;\n  border: none;\n  box-shadow: 2px 3px 4px #989898;\n}\n\n.card_unit {\n  font-size: 35px;\n  color: #21827f;\n  padding-bottom: 6px;\n  padding-top: 25%;\n}\n\n.card_title {\n  font-size: 16px;\n  color: #757575;\n  padding-bottom: 25%;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n\n.chart {\n  padding-top: 10px;\n}\n\n.chart_card {\n  min-height: 95.5%;\n  max-height: 95.5%;\n  border: none;\n  background-color: #060208;\n  margin-left: 10px;\n  padding: 5px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n  box-shadow: 2px 3px 4px #989898;\n}\n\n.chart_title {\n  font-family: sans-serif;\n  font-size: 16px;\n  padding-left: 5px;\n  padding-top: 2px;\n  color: #757575;\n  padding-bottom: 2px;\n  font-weight: bold;\n}\n\n.topcard {\n  background-color: #060208;\n  margin-top: 15px;\n  padding: 20px;\n  text-align: center;\n  border: none;\n  box-shadow: 2px 3px 4px #989898;\n}\n\n.body {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\ntd {\n  padding: 0.5rem;\n}\n\nth {\n  padding: 6px;\n}\n\ntr:nth-child(odd) {\n  background-color: #060208;\n}\n\n.arrow_icon {\n  text-align: center;\n  padding-right: 9px;\n  font-size: 48px;\n  margin-top: -7px;\n}\n\np {\n  font-family: sans-serif;\n  font-size: 14px;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.latestMoviesSectionWrapper {\n  display: grid;\n  grid-gap: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hbi56YWRvcm92L0Rlc2t0b3AvRGVza3RvcC9Bbmd1bGFyL3NhbXBsZV9wcm9qZWN0cy9tb3ZpZXMvc3JjL2FwcC9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3JvbWFuLnphZG9yb3YvRGVza3RvcC9EZXNrdG9wL0FuZ3VsYXIvc2FtcGxlX3Byb2plY3RzL21vdmllcy9zcmMvdmFycy5zY3NzIiwic3JjL2FwcC9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJDSGdCO0VESWhCLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUVERjs7QUZJQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUVERjs7QUZJQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FFREY7O0FGSUE7RUFDRSxnQkFBQTtBRURGOztBRklBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtFRURGO0FBQ0Y7O0FGSUE7RUFDRSx5QkN4Q2dCO0VEeUNoQixnQkFBQTtFQUVBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBRUhGOztBRk1BO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FFSEY7O0FGTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRUhGOztBRk1BO0VBQ0UsaUJBQUE7QUVIRjs7QUZNQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJDeEVnQjtFRHlFaEIsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FFSEY7O0FGTUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUVIRjs7QUZNQTtFQUNFLHlCQzNGZ0I7RUQ0RmhCLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FFSEY7O0FGTUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FFSEY7O0FGTUE7RUFDRSxlQUFBO0FFSEY7O0FGTUE7RUFDRSxZQUFBO0FFSEY7O0FGTUE7RUFDRSx5QkNqSGdCO0FDOEdsQjs7QUZNQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUVIRjs7QUZNQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBRUhGOztBRk1BO0VBQ0UsZUFBQTtBRUhGOztBRk1BO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUVIRiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFycy5zY3NzXCI7XHJcblxyXG4uaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ubW92aWUtaGVhZGVyIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5kYXRlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmRzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gIGhlaWdodDogNDYlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMnB4IDNweCA0cHggIzk4OTg5ODtcclxufVxyXG5cclxuLmNhcmRfdW5pdCB7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGNvbG9yOiAjMjE4MjdmO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgcGFkZGluZy10b3A6IDI1JTtcclxufVxyXG5cclxuLmNhcmRfdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzc1NzU3NTtcclxuICBwYWRkaW5nLWJvdHRvbTogMjUlO1xyXG4gIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcclxufVxyXG5cclxuLmNoYXJ0IHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNoYXJ0X2NhcmQge1xyXG4gIG1pbi1oZWlnaHQ6IDk1LjUlO1xyXG4gIG1heC1oZWlnaHQ6IDk1LjUlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDNweCA0cHggIzk4OTg5ODtcclxufVxyXG5cclxuLmNoYXJ0X3RpdGxlIHtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxuICBjb2xvcjogIzc1NzU3NTtcclxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udG9wY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRDb2xvcjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiAycHggM3B4IDRweCAjOTg5ODk4O1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG50aCB7XHJcbiAgcGFkZGluZzogNnB4O1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRDb2xvcjtcclxufVxyXG5cclxuLmFycm93X2ljb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiA5cHg7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIG1hcmdpbi10b3A6IC03cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sYXRlc3RNb3ZpZXNTZWN0aW9uV3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMjBweDtcclxufVxyXG4iLCIkYmFja2dyb3VuZENvbG9yOiAjMDYwMjA4O1xyXG4kZ3JleUNvbG9yOiAjMzUzMzM0O1xyXG4kd2hpdGVDb2xvcjogd2hpdGU7XHJcbiIsIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwMjA4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmRhdGUge1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubW92aWUtaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmRhdGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbi5jYXJkcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjAyMDg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGhlaWdodDogNDYlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMnB4IDNweCA0cHggIzk4OTg5ODtcbn1cblxuLmNhcmRfdW5pdCB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICMyMTgyN2Y7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gIHBhZGRpbmctdG9wOiAyNSU7XG59XG5cbi5jYXJkX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgcGFkZGluZy1ib3R0b206IDI1JTtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbn1cblxuLmNoYXJ0IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5jaGFydF9jYXJkIHtcbiAgbWluLWhlaWdodDogOTUuNSU7XG4gIG1heC1oZWlnaHQ6IDk1LjUlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjAyMDg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggNHB4ICM5ODk4OTg7XG59XG5cbi5jaGFydF90aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50b3BjYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MDIwODtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggNHB4ICM5ODk4OTg7XG59XG5cbi5ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxudGQge1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbnRoIHtcbiAgcGFkZGluZzogNnB4O1xufVxuXG50cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjAyMDg7XG59XG5cbi5hcnJvd19pY29uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiA5cHg7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbWFyZ2luLXRvcDogLTdweDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmxhdGVzdE1vdmllc1NlY3Rpb25XcmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");




var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.latestMovies = [];
        this.popularMovies = [];
        this.comingSoonMovies = [];
        this.criticMovies = [];
        this.myFavoriteMovies = [];
        this.searchedMovies = [];
        this.config = {
            pagination: { el: ".swiper-pagination", clickable: true },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            slidesPerView: 5,
            spaceBetween: 30,
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1023: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                490: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                376: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
            },
        };
    }
    MoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getMoviesObservableSubscription = this.appService.searchMoviesEmit.asObservable().subscribe(function (refresh) {
            _this.searchedMovies = [];
            _this.searchedMovies = refresh;
            console.log(refresh);
        });
        this.appService.getMovies().subscribe(function (allMovies) {
            _this.latestMovies = _this.mapMovies(allMovies[0]["results"]);
            _this.popularMovies = _this.mapMovies(allMovies[1]["results"]);
            _this.comingSoonMovies = _this.mapMovies(allMovies[2]["results"]);
            _this.criticMovies = _this.mapMovies(allMovies[3]["results"]);
            _this.myFavoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies"));
        });
    };
    MoviesComponent.prototype.mapMovies = function (movies) {
        var _this = this;
        return movies.map(function (movie) {
            var result = Object.assign({}, movie);
            result["posterPath"] = movie.poster_path
                ? "https://image.tmdb.org/t/p/w200/" + movie.poster_path + "?api_key=" + _this.appService.omdbKey
                : "assets/img/frink.png";
            result["overviewPath"] = "https://image.tmdb.org/t/p/w200/" + movie.backdrop_path + "?api_key=" + _this.appService.omdbKey;
            return result;
        });
    };
    MoviesComponent.prototype.goToMovieDetails = function (details) {
        this.appService.movieDetails = details;
        this.router.navigate(["movies/" + details.id]);
    };
    MoviesComponent.ctorParameters = function () { return [
        { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-movies",
            template: __webpack_require__(/*! raw-loader!./movies.component.html */ "./node_modules/raw-loader/index.js!./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.scss */ "./src/app/movies/movies.component.scss")]
        })
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");






var SearchComponent = /** @class */ (function () {
    function SearchComponent(appService, activatedRoute, router) {
        var _this = this;
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.isNotFound = false;
        this.keyUp = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                var titleArray = _this.getData(router.routerState, router.routerState.root);
                // if (titleArray[0].title !== "Search") {
                //   this.filter.nativeElement.value = ""; 
                // }
            }
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.keyUpSubscription.unsubscribe();
    };
    SearchComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.keyUpSubscription = this.keyUp
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) { return event.target["value"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (search) {
            return _this.appService.getMovieBySectionAndName(_this.section, search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                console.log("Handling error locally and rethrowing it...", err);
                _this.isNotFound = true;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ results: null });
            }));
        }))
            .subscribe(function (res) {
            // this.router.navigate([`movies/search`])
            if (res && res["results"]) {
                _this.sectionMovies = [];
                _this.sectionMovies = _this.mapMovies(res["results"]);
                _this.appService.searchMoviesEmit.next(_this.sectionMovies);
            }
            if (res["results"] === null) {
                console.log("no search results");
                // HERE do the message - no results found, but we have some suggestions for you:
                // and make a call for popular movies
            }
            if (res === "noValueEntered") {
                console.log("No Value Entered");
                _this.isNotFound = false;
            }
        }, function (error) {
            if (error && error["status"] == 404) {
                console.log("error", error);
                _this.isNotFound = true;
            }
        }, function () { return console.log("HTTP request completed."); });
    };
    SearchComponent.prototype.mapMovies = function (movies) {
        var _this = this;
        return movies.map(function (movie) {
            var result = Object.assign({}, movie);
            result["posterPath"] = movie.poster_path
                ? "https://image.tmdb.org/t/p/w200/" + movie.poster_path + "?api_key=" + _this.appService.omdbKey
                : "assets/img/tv_200.jpeg";
            result["overviewPath"] = "https://image.tmdb.org/t/p/w200/" + movie.backdrop_path + "?api_key=" + _this.appService.omdbKey;
            return result;
        });
    };
    SearchComponent.prototype.getData = function (state, parent) {
        var data = [];
        if (parent && parent.snapshot.data && parent.snapshot.data.title) {
            data.push(parent.snapshot.data);
        }
        if (state && parent) {
            data.push.apply(data, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.getData(state, state.firstChild(parent))));
        }
        return data;
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("filter", { static: false })
    ], SearchComponent.prototype, "filter", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        })
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/swiper-wrapper/swiper-wrapper.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/swiper-wrapper/swiper-wrapper.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N3aXBlci13cmFwcGVyL3N3aXBlci13cmFwcGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/swiper-wrapper/swiper-wrapper.component.ts":
/*!************************************************************!*\
  !*** ./src/app/swiper-wrapper/swiper-wrapper.component.ts ***!
  \************************************************************/
/*! exports provided: SwiperWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperWrapperComponent", function() { return SwiperWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");




var SwiperWrapperComponent = /** @class */ (function () {
    function SwiperWrapperComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.movieClickedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.config = {
            pagination: { el: ".swiper-pagination", clickable: true },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            slidesPerView: 5,
            spaceBetween: 30,
            breakpoints: {
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                1023: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                813: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                490: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                376: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
            },
        };
    }
    SwiperWrapperComponent.prototype.ngOnInit = function () {
    };
    SwiperWrapperComponent.prototype.goToMovieDetails = function (details) {
        this.movieClickedEvent.emit(details);
        this.appService.movieDetails = details;
        this.router.navigate(["movies/" + details.id]);
    };
    SwiperWrapperComponent.ctorParameters = function () { return [
        { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SwiperWrapperComponent.prototype, "movies", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SwiperWrapperComponent.prototype, "movieClickedEvent", void 0);
    SwiperWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-swiper-wrapper',
            template: __webpack_require__(/*! raw-loader!./swiper-wrapper.component.html */ "./node_modules/raw-loader/index.js!./src/app/swiper-wrapper/swiper-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./swiper-wrapper.component.scss */ "./src/app/swiper-wrapper/swiper-wrapper.component.scss")]
        })
    ], SwiperWrapperComponent);
    return SwiperWrapperComponent;
}());



/***/ }),

/***/ "./src/app/video-dialog/video-dialog.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/video-dialog/video-dialog.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".videoFrame {\n  width: -webkit-fill-available;\n}\n\n.dialog-actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  margin-bottom: 10px;\n}\n\n.cancel i {\n  color: white;\n  cursor: pointer;\n}\n\n::ng-deep .custom-modalbox > mat-dialog-container {\n  background-color: #060208 !important;\n  overflow-y: hidden;\n}\n\nmat-dialog-content {\n  height: 100%;\n  overflow-y: hidden !important;\n}\n\nmat-dialog-content section {\n  height: 100%;\n}\n\nmat-dialog-content section .card-title {\n  height: 100%;\n}\n\nmat-dialog-content section .card-title .videoWrapper {\n  height: 100%;\n}\n\nmat-dialog-content section .card-title .videoWrapper .videoFrame {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hbi56YWRvcm92L0Rlc2t0b3AvRGVza3RvcC9Bbmd1bGFyL3NhbXBsZV9wcm9qZWN0cy9tb3ZpZXMvc3JjL2FwcC92aWRlby1kaWFsb2cvdmlkZW8tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWRlby1kaWFsb2cvdmlkZW8tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsNkJBQUE7QUNERjs7QURJQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNERjs7QURJQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtBQ0RGOztBREVFO0VBQ0UsWUFBQTtBQ0FKOztBRENJO0VBQ0UsWUFBQTtBQ0NOOztBREFNO0VBQ0UsWUFBQTtBQ0VSOztBRERRO0VBQ0UsWUFBQTtBQ0dWIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8tZGlhbG9nL3ZpZGVvLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uL3ZhcnMuc2Nzc1wiO1xyXG5cclxuLnZpZGVvRnJhbWUge1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59XHJcblxyXG4uZGlhbG9nLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY2FuY2VsIGkge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY3VzdG9tLW1vZGFsYm94ID4gbWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kQ29sb3IgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIC52aWRlb1dyYXBwZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAudmlkZW9GcmFtZSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi52aWRlb0ZyYW1lIHtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbi5kaWFsb2ctYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jYW5jZWwgaSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46Om5nLWRlZXAgLmN1c3RvbS1tb2RhbGJveCA+IG1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MDIwOCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbm1hdC1kaWFsb2ctY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5tYXQtZGlhbG9nLWNvbnRlbnQgc2VjdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cbm1hdC1kaWFsb2ctY29udGVudCBzZWN0aW9uIC5jYXJkLXRpdGxlIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxubWF0LWRpYWxvZy1jb250ZW50IHNlY3Rpb24gLmNhcmQtdGl0bGUgLnZpZGVvV3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbm1hdC1kaWFsb2ctY29udGVudCBzZWN0aW9uIC5jYXJkLXRpdGxlIC52aWRlb1dyYXBwZXIgLnZpZGVvRnJhbWUge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/video-dialog/video-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/video-dialog/video-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: VideoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDialogComponent", function() { return VideoDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var VideoDialogComponent = /** @class */ (function () {
    function VideoDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    VideoDialogComponent.prototype.ngOnInit = function () {
    };
    VideoDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
    ]; };
    VideoDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-dialog',
            template: __webpack_require__(/*! raw-loader!./video-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/video-dialog/video-dialog.component.html"),
            styles: [__webpack_require__(/*! ./video-dialog.component.scss */ "./src/app/video-dialog/video-dialog.component.scss")]
        })
    ], VideoDialogComponent);
    return VideoDialogComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/roman.zadorov/Desktop/Desktop/Angular/sample_projects/movies/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map