import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppService {
  private readonly preferencesKey = "preferencesKey";
  omdbKey = `91de5c715704fa823e6bd294096efabc`;
  castLookup = `https://api.themoviedb.org/3/search/multi`; //;?api_key=${omdbKey}&language=en-US&query=`;
  genreList = `https://api.themoviedb.org/3/genre/movie/list`;
  search_api = `https://api.themoviedb.org/3/search/movie?&api_key=${this.omdbKey}&query=`;
  youtubeBaseURL = "https://www.youtube.com/watch?v=";
  movieDetails: any;

  constructor(private readonly http: HttpClient) {}

  getMovies() {
    const sessionValues = this.getPreferences();
    let session = { cast: [], genre: [], language: [], writer: [] };
    if (sessionValues) {
      session = JSON.parse(sessionValues);
    }
    const actorIds = session.cast.map((item) => item.preferenceKey) || [];
    const writerIds = session.writer.map((item) => item.preferenceKey) || [];
    const genereIds = session.genre.map((item) => item.preferenceKey) || [];
    const languageOptions =
      session.language.map((item) => item.preferenceKey) || [];
    const ids = [...actorIds, ...writerIds];
    let formattedIds = "";
    let formattedGenreIds = "";
    let formattedLanguages = "";
    if (ids && ids.length) {
      formattedIds = `with_people=${ids.join(",")}`;
    }
    if (genereIds && genereIds.length) {
      formattedGenreIds = `with_genres=${genereIds.join(",")}`;
    }
    if (languageOptions && languageOptions.length) {
      formattedLanguages = `language=${languageOptions.join(",")}`;
    }
    const urlObj = {
      latest: `https://api.themoviedb.org/3/discover/movie?api_key=${this.omdbKey}&primary_release_date.gte=2019-07-01`,
      popular: `https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=${this.omdbKey}&primary_release_date.gte=2019-07-01`,
      comingSoon: `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.omdbKey}&page=1`,
      criticalReview: `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.omdbKey}&page=1&&primary_release_year=2019`}
    const urlObservables = Object.keys(urlObj).map((key) => {
      const url = [
        urlObj[key],
        formattedIds,
        formattedGenreIds,
        formattedLanguages,
      ].join("&");
      console.log("formatted", url);
      return this.http.get(url);
    });
    return forkJoin(urlObservables);
  }

  getPreferences() {
    return localStorage.getItem(this.preferencesKey);
  }

  setPreferences(userPreferences) {
    localStorage.setItem(this.preferencesKey, userPreferences);
  }

  lookupCastMember(query) {
    return this.http.get(this.castLookup, {
      params: {
        api_key: this.omdbKey,
        language: "en-US",
        query: query,
      },
    });
  }

  getGenres() {
    return this.http.get(this.genreList, {
      params: {
        api_key: this.omdbKey,
        language: "en-US",
      },
    });
  }

  getSectionMovies(section){
    let url = "";
    switch (section) {
      case "new-releases":
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.omdbKey}&primary_release_date.gte=2019-07-01`;
        break;
      case "popular":
        url = `https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=${this.omdbKey}&primary_release_date.gte=2019-07-01`;
        break;
      case "coming-soon":
        url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.omdbKey}&page=1`;
        break;
    }
    // console.log("url", url);
    return this.http.get(url);
  }

  getMovieBySectionAndName(section, query){
    let url = "";
    url = `https://api.themoviedb.org/3/search/movie?api_key=${this.omdbKey}&query=${query}`;
    console.log("url", url);
    return this.http.get(url);
  }

  getMovieDetailsById(movieId){
    let url = "";
    url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.omdbKey}`;
    return this.http.get(url);
  }

  getVideo(movieId){
    //https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
    let url = "";
    url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.omdbKey}&language=en-US`;
    console.log(url);
    
    return this.http.get(url);
  }
  
}
