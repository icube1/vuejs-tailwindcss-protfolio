// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 5,
		title: 'M2M smart home',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-1.jpg'),
	},
	{
		id: 2,
		title: 'YapApp delivery',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 6,
		title: 'Mesto - Social media app',
		category: 'Web Application',
		img: require('@/assets/images/web-project-1.jpg'),
	},
];

export default projects;
