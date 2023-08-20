import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
	
//special kind of redux query toolkit

const page=1;
export const tmdbApi = createApi({
	reducerPath:'tmdbApi',
	baseQuery:fetchBaseQuery({
    baseUrl:'https://api.themoviedb.org/3'}),
	endpoints:(builder)=>({
		// get MOvie by TYPE  
		getMovies:builder.query({
			query: ({genreIdOrCategoryName,page,searchQuery}) => { 
				//get by name;
				if(searchQuery){
					return `/search/movie?query=${searchQuery}&page=${page}&api_key=249e38a3d0eb975e0dc3df5540591eb3`;
				}
				
				
				//get category;;
				if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
					return `/movie/${genreIdOrCategoryName}?page=${page}&api_key=249e38a3d0eb975e0dc3df5540591eb3`;
				  }
		  
				  // Get Movies by Genre
				  if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
					return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=249e38a3d0eb975e0dc3df5540591eb3`;
				  }
				return `/movie/popular?page=${page}&api_key=249e38a3d0eb975e0dc3df5540591eb3`;
				},
		  }),
		  getGenre:builder.query({
			query:()=> `genre/movie/list?api_key=249e38a3d0eb975e0dc3df5540591eb3`
		  }),
		  getMovie:builder.query({
			query:(id)=>`/movie/${id}?append_to_response=videos,credits&api_key=249e38a3d0eb975e0dc3df5540591eb3`
		  }),
		  getRecommendations:builder.query({
			query:({movie_id,list})=>
			`/movie/${movie_id}/${list}?api_key=249e38a3d0eb975e0dc3df5540591eb3`
		  }),
		  getActor:builder.query({
			query:(id)=> `person/${id}?api_key=249e38a3d0eb975e0dc3df5540591eb3`
		  }),
		  getMoviesByActorId:builder.query({
			query:({id,page})=>`/discover/movie?with_cast=${id}&page=${page}&api_key=249e38a3d0eb975e0dc3df5540591eb3`
		  })
	}),

	//basequery is important base wil fetchBaseQuery
	// it carry baseUrl : ''   
	//this telling string 
});
export const {useGetMoviesQuery,useGetGenreQuery,useGetMovieQuery,useGetRecommendationsQuery,useGetActorQuery,useGetMoviesByActorIdQuery } = tmdbApi;