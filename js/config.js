var config = {
    lang: 'de',
    time: {
        timeFormat: 24,
        displaySeconds: true,
        digitFade: false,
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Schiffweiler, DE',
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'de',
            APPID: 'YOUR_FREE_OPENWEATHER_API_KEY'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Guten Morgen Lieblingsmensch!',
            'Genieße den Tag!',
            'Hast du gut geschlafen?'
        ],
        afternoon: [
            'Hallo schönes Wesen!',
            'Du siehst aber gut aus!',
            'Schick schick!'
        ],
        evening: [
            'Wow, da werden meine Schaltkreise ganz warm!',
            'Schönes Ding!',
            'Hi, sexy!'
        ]
    },
    calendar: {
        maximumEntries: 10, // Total Maximum Entries
		displaySymbol: false,
		defaultSymbol: 'calendar'//, // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
        //urls: [
		// {
			// symbol: 'calendar-plus-o', 
			// url: 'https://p01-calendarws.icloud.com/ca/subscribe/1/n6x7Farxpt7m9S8bHg1TGArSj7J6kanm_2KEoJPL5YIAk3y70FpRo4GyWwO-6QfHSY5mXtHcRGVxYZUf7U3HPDOTG5x0qYnno1Zr_VuKH2M'
		// },
		// {
			// symbol: 'soccer-ball-o',
			// url: 'https://www.google.com/calendar/ical/akvbisn5iha43idv0ktdalnor4%40group.calendar.google.com/public/basic.ics',
		// },
		// {
			// symbol: 'mars',
			// url: "https://server/url/to/his.ics",
		// },
		// {
			// symbol: 'venus',
			// url: "https://server/url/to/hers.ics",
		// },
		// {
			// symbol: 'venus-mars',
			// url: "https://server/url/to/theirs.ics",
		// },
		//]
    },
    news: {
        feed: 'http://www.tagesschau.de/xml/rss2'
    }
}
