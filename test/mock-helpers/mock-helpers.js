/**
 * Trimmed service objects mock data getters
 */
var MockHelpers = ( function() {

	return {

		getShowsMockData: _getShowsMockData,
		getShowMockData: _getShowMockData

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
			"overview": "Breaking Bad is an American crime drama television series created and produced by Vince Gilligan. Set and produced in Albuquerque, New Mexico, Breaking Bad is the story of Walter White, a struggling high school chemistry teacher who is diagnosed with inoperable lung cancer at the beginning of the series. He turns to a life of crime, producing and selling methamphetamine, in order to secure his family's financial future before he dies, teaming with his former student, Jesse Pinkman. Heavily serialized, the series is known for positioning its characters in seemingly inextricable corners and has been labeled a contemporary western by its creator."
		};

	}

} )();



