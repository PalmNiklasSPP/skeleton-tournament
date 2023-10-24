export type List = Array<{ href: string; label: string; keywords: string; badge?: string }>;
export const menuNavLinks: Record<string, Array<{ title: string; list: List }>> = {
	'/home': [
		{
			title: 'Home',
			list: [
				{ href: '/home/introduction', label: 'Introduction', keywords: 'svelte, sirens, license, release' },
				{ href: '/home/get-started', label: 'Get Started', keywords: 'start, install, cli, tailwind, themes, stylesheets' },
				{ href: '/home/activity', label: 'Activity', keywords: 'svelte, sirens, license, release', badge: 'New' },
			]
		},
		{
			title: 'Rules',
			list: [
				{ href: '/home/eight-ball', label: '8 Ball', keywords: 'eight-ball rules' },
				{ href: '/home/nine-ball', label: '9 Ball', keywords: 'nine-ball rules' },

			]
		},
	],
	'/tournaments': [
		{
			title: 'Current Tournament',
			list: [
				{ href: '/tournaments/teams', label: 'Teams', keywords: '' },
				{ href: '/tournaments/groups', label: 'Groups', keywords: '' },
				{ href: '/tournaments/bracket', label: 'Bracket', keywords: '' },
		
			]
		},
		{
			title: 'Administer',
			list: [
				{ href: '/tournaments/create', label: 'Create Tournament', keywords: '' },
				{ href: '/tournaments/join', label: 'Join Tournament', keywords: '' },
			
			]
		},
	],
	'/stats': [
		{
			title: 'Leaderboard',
			list: [
				{ href: '/stats/player', label: 'Player', keywords: '' },
				{ href: '/stats/team', label: 'Team', keywords: '' },
		
			]
		},
	],
};