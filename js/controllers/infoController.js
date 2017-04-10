(function() {
    'use strict';
    angular
        .module('artistSearch')
        .controller('infoController',function(API) {
        	const vm = this;
			
            //function to change the number of similar artists to be displayed
            vm.changeQuantity = function() {
                let artistName = localStorage.getItem('artistName');
                let artistLimit = vm.limit;
                console.log(artistLimit);
                vm.artistSimilar = API.getSimilar(artistName, artistLimit);
            }

            //function to change artist when similar artist is clicked
            vm.artistChange = function(artist){
                console.log("ARTIST",artist);
                vm.artistName = API.saveArtist(artist);
                let artistName = localStorage.getItem('artistName');
                vm.artistInit = API.getArtist(artistName);
                vm.limit = `25`;
                let artistLimit = vm.limit;
                vm.artistSimilar = API.getSimilar(artistName, artistLimit);
                console.log(API.getSimilar(artistName, artistLimit));
                vm.artistSongs = API.getSongs(artistName);
                vm.songImg = vm.artistSongs.$$state.value.data[0].artwork_url;
                console.log(API.getSongs(artistName));
            }

            //fuction to change active tab
            vm.changeTab1 = function() {
                var isActive = angular.element( document.querySelector( '.linkTwo' ) );
                isActive.removeClass('active');
                var makeActive = angular.element( document.querySelector( '.linkOne' ) );
                makeActive.addClass('active');
            }
            vm.changeTab2 = function() {
                var isActive = angular.element( document.querySelector( '.linkOne' ) );
                isActive.removeClass('active');
                var makeActive = angular.element( document.querySelector( '.linkTwo' ) );
                makeActive.addClass('active');
            }

            vm.setSong = function(song, img) {
                vm.currentSong = song+'?client_id=03e4633e2d85874a921380e47cac705d';
                vm.songImg = img;
            }

            vm.searchArtist = function(valid){
				if(valid){
                    //getting user input for artist name
					let artist = vm.artist;

                    //reseting input box
                    vm.artist = '';

                    //saving artist name to local storage
                    vm.artistName = API.saveArtist(artist);

                    //pulling artist name from logal storage and console logging it
                    let artistName = localStorage.getItem('artistName');
                    console.log(artistName);

                    //setting vm.artistInit to getArtist response and console logging it
                    vm.artistInit = API.getArtist(artistName);
                    console.log(vm.artistInit);

                    //setting inital vlue of vm.limit and setting the users input for vm.limit to artistLimit
                    vm.limit = `25`;
                    let artistLimit = vm.limit;
                    console.log(artistLimit);

                    //setting vm.artistSimilar to getSimilar response and console logging it
                    vm.artistSimilar = API.getSimilar(artistName, artistLimit);
                    console.log(API.getSimilar(artistName, artistLimit));

                    //setting vm.artistSound to getSound response and console logging it
                    vm.artistSongs = API.getSongs(artistName);
                    console.log(API.getSongs(artistName));
                    
				} else {
					alert("We can't find that artist");
				}
            }
        });
})();