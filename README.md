# Movies

## Development

Since I learned there was a nice public API "https://api.themoviedb.org/", I started thinking about creating something similar to Redbox movies website.

The main highlights of the project:

- To get data I used "The Movie DB" for developers ("https://developers.themoviedb.org/")
- forkJoin and Subject from "rxjs"
- localStorage to store movies a user selected as Preferred
- CSS global variables to set main colors of the application
- Swiper slider
- To provide responsiveness, I used mobile-first approach with media-queries, so that the page would be compatible on all screen resolutions and all layouts.
- For the Search mechanism, Used the following "rxjs operators"

  - map,
  - debounceTime,
  - catchError,
  - distinctUntilChanged,
  - mergeMap

- Used the following sources:
  - https://www.npmjs.com/package/ngx-useful-swiper
  - https://idangero.us/swiper/demos/

Of course, my project doesn't have everything that Redbox has, but I think the result came out really great. Though, there is no limit to perfection :)
