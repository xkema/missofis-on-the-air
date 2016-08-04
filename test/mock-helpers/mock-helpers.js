/**
 * Trimmed service objects mock data getters
 */
var MockHelpers = ( function() {

	return {
		getShowsMockData: _getShowsMockData,
		getShowMockData: _getShowMockData,
		getFirebaseUserData: _getFirebaseUserData,
		getTvSearchResultsMockData: _getTvSearchResultsMockData
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
			"uid": "rB9jrITiYreetAL4E9kQQJtSDt03",
			"displayName": null,
			"photoURL": null,
			"email": "at@atmail.com",
			"emailVerified": false,
			"isAnonymous": false,
			"providerData": [
				{
					"uid": "at@atmail.com",
					"displayName": null,
					"photoURL": null,
					"email": "at@atmail.com",
					"providerId": "password"
				}
			],
			"apiKey": "AIzaSyAIl0R1GHtUY-afv83sk-UPCYHisZbsYKU",
			"appName": "[DEFAULT]",
			"authDomain": "untitled-tv-show-feed.firebaseapp.com",
			"stsTokenManager": {
				"apiKey": "AIzaSyAIl0R1GHtUY-afv83sk-UPCYHisZbsYKU",
				"refreshToken": "AJilOCPAQlyZk2rkcGlQCzpCE6qZmNXBTgr8hcDcT1u1F9nZRVYPLhokNEWHNKwA7X14lN-er175LiGDoSNfBcx4Wz-VIdPWMDT-xap1xVRZufFDoNDUXpgG5YUw6elR4jDeJzS25F1MnRadaMRrqqc7g-G2OOvos-3FTuqMwmcMK0RXBESoTIZpjMvVOOhlZt9fKgG5zBL56jWXz4vVGwgKuK-ARbB0Hg",
				"accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjM4ZTNjMzBlZDNjYjgzYTMyMjIxMjM2NjNhMGNkNjRhMTk0MTNhNTYifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW50aXRsZWQtdHYtc2hvdy1mZWVkIiwiYXVkIjoidW50aXRsZWQtdHYtc2hvdy1mZWVkIiwiYXV0aF90aW1lIjoxNDY5MjkyNzEwLCJ1c2VyX2lkIjoickI5anJJVGlZcmVldEFMNEU5a1FRSnRTRHQwMyIsInN1YiI6InJCOWpySVRpWXJlZXRBTDRFOWtRUUp0U0R0MDMiLCJpYXQiOjE0NjkyOTI3MTAsImV4cCI6MTQ2OTI5NjMxMCwiZW1haWwiOiJhdEBhdG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImF0QGF0bWFpbC5jb20iLCJhdEBhdG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.uyf1ORWrXNDIYrU2EYrC4rePxxKDPW1otvv23GJ3bORGXOUjdcASXAMxTuzMggEGUHzxCgkqcebSQQn_Wz6fQMl8HiaglpsjEMgR3F0RwxWIk_K-CWu_7HPj2XqiptmxhirPWizQ3Xq2Vpy1rVIMrGdHTJfnckD2d4vMVgw3wFn1fPS5NN9ltjTeZs8JkBURjQrwVkIQsGsLAxVIK3o2f87gxQfMtxmfa-gT68jfOOA6H-Vngvy3XGOuQDvfG2IQ9lLDwNM9FapNk5RvJVG2NimrVpN6IcRtx5y5vekjsu44dgcY9BQHDPwaj7dXVitDQAyz-mqIRhMRdlZlkLCCMA",
				"expirationTime": 1469296326635
			},
			"redirectEventId": null
		};
	
	}

} )();



