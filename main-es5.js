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

module.exports = "<footer id=\"main-footer\">Copyright &copy; 2020</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/movie-detail/movie-detail.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/movie-detail/movie-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"movieDetails\">\n    <section class=\"image\" *ngIf=\"movieDetails && movieDetails.posterPath; else noPoster\">\n        <img [src]=\"movieDetails.posterPath\" />\n        <ng-template #noPoster>\n            <img [src]=\"src / assets / img / tv_200.jpeg\" />\n        </ng-template>\n    </section>\n    <section class=\"info\">\n        <div class=\"info-row\">\n            <div class=\"movie-title\">\n                <h1>{{movieDetails.title}}</h1>\n            </div>\n        </div>\n        <div class=\"info-row\">\n            <div class=\"year-info\">\n                <h2>{{movieDetails.releaseYear}} | {{movieDetails.runTime}}</h2>\n            </div>\n            <div class=\"genres\">\n                <h2>Genres</h2>\n                <span class=\"genre\" *ngFor=\"let genre of movieDetails.genres\">{{genre.name.toUpperCase()}}</span>\n            </div>\n            <div class=\"add-and-play-block\">\n                <div class=\"favorites\">\n                    <span>\n                        <i class=\"fas fa-heart fa-2x favorites-color\" *ngIf=\"getIsFavorite(movieDetails)\" (click)=\"removeFromFavorites(movieDetails)\"></i>\n                        <i class=\"far fa-heart fa-2x\" *ngIf=\"!getIsFavorite(movieDetails)\" (click)=\"addToFavorites(movieDetails)\"></i>\n                    </span>\n                    <h3>Add To Favorites</h3>\n                </div>\n             \n                <div class=\"play\">\n                    <span>\n                        <i class=\"fab fa-youtube fa-2x\" (click)=\"openVideoModal()\"></i>\n                    </span>\n                    <h3>Play Trailer</h3>\n                </div>\n            </div>\n        </div>\n        <div class=\"info-row\">\n            <div class=\"summary-info\">\n                <h2 class=\"summary-header\">Summary</h2>\n                <h3 class=\"summary-details\">{{movieDetails.overview}}</h3>\n            </div>\n        </div>\n    </section>\n</div>\n<div>\n    <h2 class=\"header-title\">Recommeneded For You</h2>\n    <app-swiper-wrapper [movies]=\"recommendedMovies\"></app-swiper-wrapper>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/movies-grid/movies-grid.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/movies-grid/movies-grid.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n    <div class=\"trendcard\">\n        <section *ngIf=\"sectionMovies && sectionMovies.length > 0; else noSearchResults\" class=\"movies-grid\">\n            <div *ngFor=\"let movie of sectionMovies\">\n                <div  *ngIf=\"movie.posterPath; else noPoster\" >\n                    <div class=\"\">\n                        <div class=\"card\" (click)=\"goToMovieDetails(movie)\">\n                            <img [src]=\"movie.posterPath\"/>\n                            <ng-template #noPoster>\n                                <img [src]=\"src/assets/img/tv_200.jpeg\" />\n                            </ng-template>\n                            <span class=\"movie_content\">\n                                <h3 class=\"movieTitle\">{{ movie.title }}</h3>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <ng-template #noSearchResults>\n            <h3 class=\"no_results_message\">Bummer - we couldn't find what you were looking for, but we thought you might like these.</h3>\n            <app-swiper-wrapper [movies]=\"sectionMovies\"></app-swiper-wrapper>\n        </ng-template>\n    </div>\n</div>\n\n"

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

module.exports = "<div class=\"trendcard\" *ngIf=\"movies\">\n    <swiper [config]=\"config\" class=\"swiper-container\">\n      <div class=\"swiper-wrapper\" id=\"movies\">\n        <div\n          class=\"swiper-slide\"\n          *ngFor=\"let movie of movies\"\n        >\n          <div class=\"swiper_card\" (click)=\"goToMovieDetails(movie)\">\n            <div *ngIf=\"movie.posterPath; else noPoster\" class=\"swiper_pic\">\n              <img [src]=\"movie.posterPath\" />\n            </div>\n            <ng-template #noPoster>\n              <img [src]=\"src / assets / img / tv_200.jpeg\" />\n            </ng-template>\n            <div class=\"movie_content\">\n              <h3 class=\"movieTitle\">{{ movie.title }}</h3>\n              <p></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- Add Pagination -->\n      <div class=\"swiper-pagination\"></div>\n      <!-- Add Arrows -->\n      <div class=\"swiper-button-next\"></div>\n      <div class=\"swiper-button-prev\"></div>\n    </swiper>\n  </div>\n"

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

module.exports = ".header-content {\n  display: grid;\n  grid-template-areas: \"header-text-wrapper search-wrapper\";\n  grid-column-gap: 10px;\n  width: 400px; }\n\n.header-text-wrapper {\n  grid-area: header-text-wrapper;\n  color: white;\n  font-size: 3rem;\n  font-weight: 700;\n  padding: 1rem;\n  cursor: pointer; }\n\n.header-text-wrapper .header-text-box {\n    color: red; }\n\n.search-wrapper {\n  grid-area: search-wrapper;\n  margin: auto; }\n\n.headerLinks {\n  color: white;\n  list-style: none;\n  display: -webkit-box;\n  display: flex;\n  margin: 0; }\n\n.header-link a {\n  color: white;\n  font-size: larger;\n  font-weight: 700; }\n\n.sidenav {\n  background-color: #060208; }\n\n.sidenav-list {\n  list-style: none; }\n\n@media (max-width: 550px) {\n  .header-content {\n    grid-template-areas: \"header-text-wrapper\"\r \"search-wrapper\"; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxyb21hbi56YWRvcm92XFxEZXNrdG9wXFxBbmd1bGFyXFxzYW1wbGVfcHJvamVjdHNcXG1vdmllcy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXHJvbWFuLnphZG9yb3ZcXERlc2t0b3BcXEFuZ3VsYXJcXHNhbXBsZV9wcm9qZWN0c1xcbW92aWVzL3NyY1xcdmFycy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFhO0VBQ2IseURBQXlEO0VBQ3pELHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWUsRUFBQTs7QUFOakI7SUFRSSxVQUFVLEVBQUE7O0FBSWQ7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWE7RUFDYixTQUFTLEVBQUE7O0FBR1g7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHlCQ3hDdUIsRUFBQTs7QUQyQ3pCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0U7SUFDRSw0REVUYSxFQUFFLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdmFycy5zY3NzXCI7XHJcblxyXG4uaGVhZGVyLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXItdGV4dC13cmFwcGVyIHNlYXJjaC13cmFwcGVyXCI7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmhlYWRlci10ZXh0LXdyYXBwZXIge1xyXG4gIGdyaWQtYXJlYTogaGVhZGVyLXRleHQtd3JhcHBlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLmhlYWRlci10ZXh0LWJveCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaC13cmFwcGVyIHtcclxuICBncmlkLWFyZWE6IHNlYXJjaC13cmFwcGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmhlYWRlckxpbmtzIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmhlYWRlci1saW5rIGEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRDb2xvcjtcclxufVxyXG5cclxuLnNpZGVuYXYtbGlzdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgLmhlYWRlci1jb250ZW50IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgIFwiaGVhZGVyLXRleHQtd3JhcHBlclwiXHJcbiAgICAgIFwic2VhcmNoLXdyYXBwZXJcIjtcclxuICB9XHJcbn1cclxuIiwiJGJhY2tncm91bmRDb2xvcjogIzA2MDIwODtcclxuJGdyZXlDb2xvcjogIzM1MzMzNDtcclxuIiwiLmhlYWRlci1jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXItdGV4dC13cmFwcGVyIHNlYXJjaC13cmFwcGVyXCI7XG4gIGdyaWQtY29sdW1uLWdhcDogMTBweDtcbiAgd2lkdGg6IDQwMHB4OyB9XG5cbi5oZWFkZXItdGV4dC13cmFwcGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXItdGV4dC13cmFwcGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5oZWFkZXItdGV4dC13cmFwcGVyIC5oZWFkZXItdGV4dC1ib3gge1xuICAgIGNvbG9yOiByZWQ7IH1cblxuLnNlYXJjaC13cmFwcGVyIHtcbiAgZ3JpZC1hcmVhOiBzZWFyY2gtd3JhcHBlcjtcbiAgbWFyZ2luOiBhdXRvOyB9XG5cbi5oZWFkZXJMaW5rcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwOyB9XG5cbi5oZWFkZXItbGluayBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4uc2lkZW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjAyMDg7IH1cblxuLnNpZGVuYXYtbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIC5oZWFkZXItY29udGVudCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXItdGV4dC13cmFwcGVyXCJcciBcInNlYXJjaC13cmFwcGVyXCI7IH0gfVxuIl19 */"

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

module.exports = ".wrapper {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-areas: \"image info info\"\r \"image info info\"; }\n\n.image {\n  grid-area: image;\n  min-height: 300px;\n  padding: 1rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n          justify-content: center;\n  box-shadow: var(--shadow); }\n\n.image img {\n  min-width: -webkit-fill-available;\n  max-width: 200px; }\n\n.info {\n  display: grid;\n  grid-gap: 20px;\n  color: white;\n  padding: 1rem; }\n\n.genres {\n  height: -webkit-min-content;\n  height: -moz-min-content;\n  height: min-content;\n  margin: 1.5rem 0 1.5rem 0; }\n\n.genres h2 {\n    margin: inherit; }\n\n.genre {\n  padding: 1rem;\n  background-color: #353334;\n  border-radius: 22px;\n  margin: 0.5rem 0.5rem 0.5rem 0;\n  font-size: large;\n  font-weight: 700; }\n\n.add-and-play-block {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: baseline;\n          align-items: baseline; }\n\n.add-and-play-block h3 {\n    margin-left: 10px; }\n\n.add-and-play-block .favorites {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: baseline;\n            align-items: baseline;\n    -webkit-box-pack: center;\n            justify-content: center; }\n\n.add-and-play-block .favorites .fa-heart {\n      cursor: pointer; }\n\n.add-and-play-block .favorites-color {\n    color: red; }\n\n.add-and-play-block .play {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: baseline;\n            align-items: baseline;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin-left: 1rem; }\n\n.add-and-play-block .play .fab {\n      color: red;\n      background-image: radial-gradient(at center, white 40%, transparent 40%);\n      cursor: pointer; }\n\n.header-title {\n  color: white; }\n\n@media (max-width: 700px) {\n  .wrapper {\n    grid-template-areas: \"image image\"\r \"info info\"; }\n  .info h1 {\n    font-size: 2.5rem; }\n  .info {\n    grid-template-columns: 1fr; } }\n\n@media (max-width: 500px) {\n  .wrapper {\n    grid-template-areas: \"image\"\r \"info\"; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGV0YWlsL0M6XFxVc2Vyc1xccm9tYW4uemFkb3JvdlxcRGVza3RvcFxcQW5ndWxhclxcc2FtcGxlX3Byb2plY3RzXFxtb3ZpZXMvc3JjXFxhcHBcXG1vdmllLWRldGFpbFxcbW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCx5RENEZ0IsRUFBRTs7QUFFcEI7RURNRSxnQkFBWTtFQUNaLGlCQUFhO0VBQ2IsYUFBYTtFQUNiLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFhO0VBQWIsNkJBQWE7VUFBYixzQkFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsd0JBQVk7VUFBWix1QkFBWTtFQ0paLHlCQUF5QixFQUFFOztBQUU3QjtFRFFFLGlDQUNEO0VDUEMsZ0JBQWdCLEVBQUU7O0FBRXBCO0VEU0UsYUFBVTtFQUNWLGNBQVk7RUFDWixZQUFTO0VDUFQsYUFBYSxFQUFFOztBQUVqQjtFRFVFLDJCQUFRO0VBQVIsd0JBQVE7RUFBUixtQkFBUTtFQUZWLHlCQUdLLEVBQUE7O0FDUkg7SUFDRSxlQUFlLEVBQUU7O0FBRXJCO0VEWUUsYUFBQTtFQUNBLHlCQUFtQjtFQUNuQixtQkFBUTtFQUNSLDhCQUFnQjtFQUNoQixnQkFBZ0I7RUNWaEIsZ0JBQWdCLEVBQUU7O0FBRXBCO0VEYUUsb0JBQWE7RUFBYixhQUFhO0VBRmYsMkJBSUU7VUFKRixxQkFJRSxFQUFHOztBQ1pIO0lEUUYsaUJBQW1CLEVBUWpCOztBQ2RBO0lEZ0JFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDJCQUFpQjtZQUFqQixxQkFBaUI7SUFYckIsd0JBUUU7WUFSRix1QkFRRSxFQUFBOztBQ1ZFO01ERUosZUFBbUIsRUFpQmpCOztBQ2pCQTtJREFGLFVBQUEsRUFBQTs7QUNFRTtJRHFCRSxvQkFBYTtJQUFiLGFBQWE7SUFDYiwyQkFBaUI7WUFBakIscUJBQWlCO0lBQ2pCLHdCQU1EO1lBTkMsdUJBTUQ7SUEvQkgsaUJBQUEsRUFBbUI7O0FDT2Y7TURxQkUsVUFBQTtNQUNBLHdFQUNEO01DcEJDLGVBQWUsRUFBRTs7QUFFdkI7RUFDRSxZQUFZLEVBQUU7O0FBRWhCO0VBQ0U7SUQ2QkEsK0NBQ0UsRUFBUztFQUdYO0lBQ0UsaUJBQUEsRUFBQTtFQzdCRjtJRGlDRiwwQkFBd0IsRUFBQSxFQUFBOztBQzlCeEI7RUFDRTtJQUNFLG9DQUNHLEVBQUUsRUFBRSIsImZpbGUiOiJzcmMvYXBwL21vdmllLWRldGFpbC9tb3ZpZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi92YXJzLnNjc3NcIjtcclxuXHJcbi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICBcImltYWdlIGluZm8gaW5mb1wiXHJcbiAgICBcImltYWdlIGluZm8gaW5mb1wiO1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIGdyaWQtYXJlYTogaW1hZ2U7XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcclxufVxyXG5cclxuLmltYWdlIGltZyB7XHJcbiAgLy8gd2lkdGg6IGluaGVyaXQgIWltcG9ydGFudDtcclxuICBtaW4td2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5nZW5yZXMge1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgbWFyZ2luOiAxLjVyZW0gMCAxLjVyZW0gMDtcclxuICBoMiB7XHJcbiAgICBtYXJnaW46IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG4uZ2VucmUge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXlDb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gIG1hcmdpbjogMC41cmVtIDAuNXJlbSAwLjVyZW0gMDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5hZGQtYW5kLXBsYXktYmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICBoMyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4gIC5mYXZvcml0ZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLmZhLWhlYXJ0IHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZhdm9yaXRlcy1jb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuXHJcbiAgLnBsYXkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAuZmFiIHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGF0IGNlbnRlciwgd2hpdGUgNDAlLCB0cmFuc3BhcmVudCA0MCUpO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgIFwiaW1hZ2UgaW1hZ2VcIlxyXG4gICAgICBcImluZm8gaW5mb1wiO1xyXG4gIH1cclxuXHJcbiAgLmluZm8gaDEge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgfVxyXG5cclxuICAuaW5mbyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgIFwiaW1hZ2VcIlxyXG4gICAgICBcImluZm9cIjtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICAvLyB3aWR0aDogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAyMHB4O1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImltYWdlIGluZm8gaW5mb1wiXHIgXCJpbWFnZSBpbmZvIGluZm9cIjsgfVxuXG4uaW1hZ2Uge1xuICBncmlkLWFyZWE6IGltYWdlO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpOyB9XG5cbi5pbWFnZSBpbWcge1xuICBtaW4td2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIG1heC13aWR0aDogMjAwcHg7IH1cblxuLmluZm8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcmVtOyB9XG5cbi5nZW5yZXMge1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICBtYXJnaW46IDEuNXJlbSAwIDEuNXJlbSAwOyB9XG4gIC5nZW5yZXMgaDIge1xuICAgIG1hcmdpbjogaW5oZXJpdDsgfVxuXG4uZ2VucmUge1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzMzM0O1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBtYXJnaW46IDAuNXJlbSAwLjVyZW0gMC41cmVtIDA7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuLmFkZC1hbmQtcGxheS1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTsgfVxuICAuYWRkLWFuZC1wbGF5LWJsb2NrIGgzIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDsgfVxuICAuYWRkLWFuZC1wbGF5LWJsb2NrIC5mYXZvcml0ZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gICAgLmFkZC1hbmQtcGxheS1ibG9jayAuZmF2b3JpdGVzIC5mYS1oZWFydCB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmFkZC1hbmQtcGxheS1ibG9jayAuZmF2b3JpdGVzLWNvbG9yIHtcbiAgICBjb2xvcjogcmVkOyB9XG4gIC5hZGQtYW5kLXBsYXktYmxvY2sgLnBsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtOyB9XG4gICAgLmFkZC1hbmQtcGxheS1ibG9jayAucGxheSAuZmFiIHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoYXQgY2VudGVyLCB3aGl0ZSA0MCUsIHRyYW5zcGFyZW50IDQwJSk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmhlYWRlci10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLndyYXBwZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW1hZ2UgaW1hZ2VcIlxyIFwiaW5mbyBpbmZvXCI7IH1cbiAgLmluZm8gaDEge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtOyB9XG4gIC5pbmZvIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfSB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAud3JhcHBlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpbWFnZVwiXHIgXCJpbmZvXCI7IH0gfVxuIl19 */"

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
        this.innerWidth = window.innerWidth;
    };
    MovieDetailComponent.prototype.getMovieDetailsById = function (movieId) {
        var _this = this;
        this.appService.getMovieDetailsById(movieId).subscribe(function (res) {
            _this.movieDetails = _this.mapMovie(res);
            _this.getVideo(movieId);
        });
    };
    MovieDetailComponent.prototype.mapMovie = function (movie) {
        var result = Object.assign({}, movie);
        result["posterPath"] = movie.poster_path
            ? "https://image.tmdb.org/t/p/w200/" + movie.poster_path + "?api_key=" + this.appService.omdbKey
            : "../assets/img/tv_200.jpeg";
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
            _this.videoLink = _this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + _this.video["key"]);
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
                : "../assets/img/tv_200.jpeg";
            result["overviewPath"] = "https://image.tmdb.org/t/p/w200/" + movie.backdrop_path + "?api_key=" + _this.appService.omdbKey;
            return result;
        });
    };
    MovieDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
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

module.exports = ".search-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n\n.search-field {\n  width: 60%;\n  height: 25px;\n  margin: 0.5rem 0 0 2rem;\n  border: none;\n  border: solid 2px #515151;\n  border-radius: 10px; }\n\n.no_results_message {\n  color: white;\n  margin-bottom: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzLWdyaWQvQzpcXFVzZXJzXFxyb21hbi56YWRvcm92XFxEZXNrdG9wXFxBbmd1bGFyXFxzYW1wbGVfcHJvamVjdHNcXG1vdmllcy9zcmNcXGFwcFxcbW92aWVzLWdyaWRcXG1vdmllcy1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQThCO1VBQTlCLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzLWdyaWQvbW92aWVzLWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zZWFyY2gtZmllbGQge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIG1hcmdpbjogMC41cmVtIDAgMCAycmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXI6IHNvbGlkIDJweCAjNTE1MTUxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5ub19yZXN1bHRzX21lc3NhZ2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbiJdfQ== */"

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
                : "../assets/img/tv_200.jpeg";
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

module.exports = ".header {\n  background-color: #060208;\n  width: 100%;\n  color: white;\n  margin-top: 10px; }\n\n.title {\n  text-align: left;\n  padding-left: 20px;\n  font-family: sans-serif;\n  font-size: 26px;\n  color: white;\n  font-weight: 700; }\n\n.date {\n  padding-top: 7px;\n  text-align: right;\n  padding-right: 20px;\n  padding-left: 20px;\n  font-family: sans-serif;\n  font-size: 18px; }\n\n.movie-header {\n  margin-top: 1rem; }\n\n@media screen and (max-width: 600px) {\n  .date {\n    text-align: left;\n    padding-top: 0px;\n    font-size: 16px; } }\n\n.cards {\n  background-color: #060208;\n  margin-top: 15px;\n  height: 46%;\n  text-align: center;\n  border: none;\n  box-shadow: 2px 3px 4px #989898; }\n\n.card_unit {\n  font-size: 35px;\n  color: #21827f;\n  padding-bottom: 6px;\n  padding-top: 25%; }\n\n.card_title {\n  font-size: 16px;\n  color: #757575;\n  padding-bottom: 25%;\n  padding-left: 6px;\n  padding-right: 6px; }\n\n.chart {\n  padding-top: 10px; }\n\n.chart_card {\n  min-height: 95.5%;\n  max-height: 95.5%;\n  border: none;\n  background-color: #060208;\n  margin-left: 10px;\n  padding: 5px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n  box-shadow: 2px 3px 4px #989898; }\n\n.chart_title {\n  font-family: sans-serif;\n  font-size: 16px;\n  padding-left: 5px;\n  padding-top: 2px;\n  color: #757575;\n  padding-bottom: 2px;\n  font-weight: bold; }\n\n.topcard {\n  background-color: #060208;\n  margin-top: 15px;\n  padding: 20px;\n  text-align: center;\n  border: none;\n  box-shadow: 2px 3px 4px #989898; }\n\n.body {\n  margin-left: 15px;\n  margin-right: 15px; }\n\ntd {\n  padding: 0.5rem; }\n\nth {\n  padding: 6px; }\n\ntr:nth-child(odd) {\n  background-color: #060208; }\n\n.arrow_icon {\n  text-align: center;\n  padding-right: 9px;\n  font-size: 48px;\n  margin-top: -7px; }\n\np {\n  font-family: sans-serif;\n  font-size: 14px; }\n\nimg {\n  max-width: 100%; }\n\n.latestMoviesSectionWrapper {\n  display: grid;\n  grid-gap: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL0M6XFxVc2Vyc1xccm9tYW4uemFkb3JvdlxcRGVza3RvcFxcQW5ndWxhclxcc2FtcGxlX3Byb2plY3RzXFxtb3ZpZXMvc3JjXFxhcHBcXG1vdmllc1xcbW92aWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZXMvQzpcXFVzZXJzXFxyb21hbi56YWRvcm92XFxEZXNrdG9wXFxBbmd1bGFyXFxzYW1wbGVfcHJvamVjdHNcXG1vdmllcy9zcmNcXHZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQ0h1QjtFREl2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQSxFQUNoQjs7QUFHSDtFQUNFLHlCQ3hDdUI7RUR5Q3ZCLGdCQUFnQjtFQUVoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwrQkFBK0IsRUFBQTs7QUFHakM7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oseUJDeEV1QjtFRHlFdkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLCtCQUErQixFQUFBOztBQUdqQztFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHlCQzNGdUI7RUQ0RnZCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwrQkFBK0IsRUFBQTs7QUFHakM7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlCQ2pIdUIsRUFBQTs7QURvSHpCO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsYUFBYTtFQUNiLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFycy5zY3NzXCI7XHJcblxyXG4uaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ubW92aWUtaGVhZGVyIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5kYXRlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmRzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gIGhlaWdodDogNDYlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMnB4IDNweCA0cHggIzk4OTg5ODtcclxufVxyXG5cclxuLmNhcmRfdW5pdCB7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGNvbG9yOiAjMjE4MjdmO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgcGFkZGluZy10b3A6IDI1JTtcclxufVxyXG5cclxuLmNhcmRfdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzc1NzU3NTtcclxuICBwYWRkaW5nLWJvdHRvbTogMjUlO1xyXG4gIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcclxufVxyXG5cclxuLmNoYXJ0IHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNoYXJ0X2NhcmQge1xyXG4gIG1pbi1oZWlnaHQ6IDk1LjUlO1xyXG4gIG1heC1oZWlnaHQ6IDk1LjUlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDNweCA0cHggIzk4OTg5ODtcclxufVxyXG5cclxuLmNoYXJ0X3RpdGxlIHtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxuICBjb2xvcjogIzc1NzU3NTtcclxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udG9wY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRDb2xvcjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiAycHggM3B4IDRweCAjOTg5ODk4O1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG50aCB7XHJcbiAgcGFkZGluZzogNnB4O1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRDb2xvcjtcclxufVxyXG5cclxuLmFycm93X2ljb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiA5cHg7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIG1hcmdpbi10b3A6IC03cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sYXRlc3RNb3ZpZXNTZWN0aW9uV3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMjBweDtcclxufVxyXG4iLCIkYmFja2dyb3VuZENvbG9yOiAjMDYwMjA4O1xyXG4kZ3JleUNvbG9yOiAjMzUzMzM0O1xyXG4iXX0= */"

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
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                490: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                376: {
                    slidesPerView: 1,
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
                : "../assets/img/tv_200.jpeg";
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
                : "../assets/img/tv_200.jpeg";
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
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                490: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                376: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
            },
        };
    }
    SwiperWrapperComponent.prototype.ngOnInit = function () {
    };
    SwiperWrapperComponent.prototype.goToMovieDetails = function (details) {
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

module.exports = ".videoFrame {\n  width: -webkit-fill-available; }\n\n.dialog-actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  margin-bottom: 10px; }\n\n.cancel i {\n  color: white;\n  cursor: pointer; }\n\n::ng-deep .custom-modalbox > mat-dialog-container {\n  background-color: #060208 !important;\n  overflow-y: hidden; }\n\nmat-dialog-content {\n  height: 100%;\n  overflow-y: hidden !important; }\n\nmat-dialog-content section {\n    height: 100%; }\n\nmat-dialog-content section .card-title {\n      height: 100%; }\n\nmat-dialog-content section .card-title .videoWrapper {\n        height: 100%; }\n\nmat-dialog-content section .card-title .videoWrapper .videoFrame {\n          height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tZGlhbG9nL0M6XFxVc2Vyc1xccm9tYW4uemFkb3JvdlxcRGVza3RvcFxcQW5ndWxhclxcc2FtcGxlX3Byb2plY3RzXFxtb3ZpZXMvc3JjXFxhcHBcXHZpZGVvLWRpYWxvZ1xcdmlkZW8tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IscUJBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUdqQjtFQUNFLG9DQUE2QztFQUM3QyxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxZQUFZO0VBQ1osNkJBQTZCLEVBQUE7O0FBRi9CO0lBSUksWUFBWSxFQUFBOztBQUpoQjtNQU1NLFlBQVksRUFBQTs7QUFObEI7UUFRUSxZQUFZLEVBQUE7O0FBUnBCO1VBVVUsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8tZGlhbG9nL3ZpZGVvLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uL3ZhcnMuc2Nzc1wiO1xyXG5cclxuLnZpZGVvRnJhbWUge1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59XHJcblxyXG4uZGlhbG9nLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY2FuY2VsIGkge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY3VzdG9tLW1vZGFsYm94ID4gbWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kQ29sb3IgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIC52aWRlb1dyYXBwZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAudmlkZW9GcmFtZSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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

module.exports = __webpack_require__(/*! C:\Users\roman.zadorov\Desktop\Angular\sample_projects\movies\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map