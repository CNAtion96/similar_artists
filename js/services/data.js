(function() {
    'use strict';
    angular
        .module('artistSearch')
        .factory('API', function($http){
			return {
				//api call for last.fm to get the main artist info
			    getArtist:(search)=>{
			    	return $http({
			    		type:"GET",
			    		url:`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${search}&autocorrect=1&api_key=d49670f7c9654ddc5cecd1faca1955c6&format=json`
			    	})
				},
				//api call for last.fm to get a limitable amout of similar artists
				getSimilar:(artistName, limit)=>{
					return $http({
						type:"GET",
						url:`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${artistName}&autocorrect=1&limit=${limit}&api_key=d49670f7c9654ddc5cecd1faca1955c6&format=json`
					})
				},

				//function to save the artist input to local storage
				saveArtist:(artist) => {
					localStorage.setItem('artistName',artist);
				},

				//api call for SoundCloud to get songs when passed an artists name
				getSongs:(artistName) => {
					return $http({
						type:"GET",
						url:`https://api.soundcloud.com/tracks/?q=${artistName}&client_id=03e4633e2d85874a921380e47cac705d`
					})
				}
		  	};
		});
})();