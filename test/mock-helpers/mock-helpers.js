/**
 * Trimmed service objects mock data getters
 */
var MockHelpers = ( function() {

	return {
		getShowsMockData: _getShowsMockData,
		getShowMockData: _getShowMockData,
		getFirebaseUserData: _getFirebaseUserData,
		getTvSearchResultsMockData: _getTvSearchResultsMockData,
		getUserFavoritesMockData: _getUserFavoritesMockData,
		getUserProfileMockData: _getUserProfileMockData
	};

	/**
	 * Returns a single-item result object mock data for shows list
	 * 
	 */
	function _getShowsMockData() {

		return {
			"page": 1,
			"results": [
				{
					"backdrop_path": "/kohPYEYHuQLWX3gjchmrWWOEycD.jpg",
					"id": 62425,
					"overview": "The six-person crew of a derelict spaceship awakens from stasis in the farthest reaches of space. Their memories wiped clean, they have no recollection of who they are or how they got on board. The only clue to their identities is a cargo bay full of weaponry and a destination: a remote mining colony that is about to become a war zone. With no idea whose side they are on, they face a deadly decision. Will these amnesiacs turn their backs on history, or will their pasts catch up with them?",
					"name": "Dark Matter"
				},
				{
					"backdrop_path": "/jXpndJTekLFYcx3xX0H3sDqFnJU.jpg",
					"id": 62196,
					"overview": "A young woman is recruited into a secret government agency to be “stitched” into the minds of the recently deceased, using their memories to investigate murders.",
					"name": "Stitchers"
				}
			],
			"total_pages": 10,
			"total_results": 184
		};

	}

	/**
	 *
	 */
	function _getShowMockData() {

		return {
			"backdrop_path": "/bzoZjhbpriBT2N5kwgK0weUfVOX.jpg",			
			"id": 1396,			
			"name": "Breaking Bad",			
			"overview": "Breaking Bad is an American crime drama television series created and produced by Vince Gilligan. Set and produced in Albuquerque, New Mexico, Breaking Bad is the story of Walter White, a struggling high school chemistry teacher who is diagnosed with inoperable lung cancer at the beginning of the series. He turns to a life of crime, producing and selling methamphetamine, in order to secure his family's financial future before he dies, teaming with his former student, Jesse Pinkman. Heavily serialized, the series is known for positioning its characters in seemingly inextricable corners and has been labeled a contemporary western by its creator.",
			"networks": [
				{
					"id": 49,
					"name": "HBO"
				}
			]
		};

	}

	/**
	 *
	 */
	function _getTvSearchResultsMockData() {

		return {
			"page": 1,
			"results": [
				{
					"backdrop_path": "/rWY8nL277IijjUDGoyrscdPjDiR.jpg",
					"id": 40417,
					"overview": "Leyla ile Mecnun is a Turkish television comedy series. The show is set in Istanbul, Turkey and premiered in 2011 on TRT. The series is a surreal and absurd comedy that revolves around the fictional love story between Leyla and Mecnun.",
					"name": "Leyla ile Mecnun"
				},
				{
					"backdrop_path": null,
					"id": 44669,
					"overview": "Leyla'nın Evi is a Turkish romantic drama television series which is not broadcast yet in Turkey. The title, which is similar to that of Zülfü Livaneli's book \"Leyla'nın Evi\", is very different and is not an adaptation of that book. It is about a woman, Leyla, who after the murder of her beloved husband, Ramazan, tries to find happiness with her two children, Mehmet and Merve",
					"name": "The House of Leyla",
				},
				{
					"backdrop_path": null,
					"id": 59441,
					"overview": "Ask the Leyland Brothers was an Australian television show that screened between 1976 and 1980, covering 153 episodes. The series followed the Leyland brothers, Mike and Mal, who traveled across Australia and New Zealand in response to questions posed by viewers.",
					"name": "Ask the Leyland Brothers",
				},
				{
					"backdrop_path": null,
					"id": 23398,
					"overview": "",
					"name": "Ask The Leyland Brothers",
				}
			],
			"total_results": 5,
			"total_pages": 1
			
		};

	}

	/**
	 * Returns firebase user data 
	 */
	function _getFirebaseUserData() {
	
		return {
			"uid": "0000000000000000001234567890",
			"displayName": null,
			"photoURL": null,
			"email": "jasminetestmail@missofis.com",
			"emailVerified": false,
			"isAnonymous": false,
			"providerData": [
				{
					"uid": "jasminetestmail@missofis.com",
					"displayName": null,
					"photoURL": null,
					"email": "jasminetestmail@missofis.com",
					"providerId": "password"
				}
			],
			"apiKey": "hgfedcba123456789-abcdefg-ABCDEFGHI0123",
			"appName": "[DEFAULT]",
			"authDomain": "untitled-tv-show-feed.firebaseapp.com",
			"stsTokenManager": {
				"apiKey": "hgfedcba123456789-abcdefg-ABCDEFGHI0123",
				"refreshToken": "00000000001234567890",
				"accessToken": "abcdefghijklmnoprstuxwyz",
				"expirationTime": 1479398926635
			},
			"redirectEventId": null
		};
	
	}

	/**
	 * Returns user favorites mock data for appState
	 */
	function _getUserFavoritesMockData() {

		return {
			"12345": "Some TV Show",
			"67890": "Another TV Show",
			"00001": "Very Good TV Show",
			"99999": "Game of Melons",
			"44444": "Fart Matter",
			"00008": "Ms. Robot",
			"77777": "Harrison Break"
		};

	}

	/**
	 * Returns user favorites mock data for appState
	 */
	function _getUserProfileMockData() {

		return {
			"biography": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, voluptatem.",
			"collector": true,
			"displayName": "Jane Doe"
		};

	}

} )();



