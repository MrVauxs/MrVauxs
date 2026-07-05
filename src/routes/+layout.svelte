<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/robot.gif';
	import { onNavigate } from '$app/navigation';

	let { children } = $props();

	// Cross-document view transition between / and /work. The card on each page
	// shares view-transition-name: card, so the browser animates one into the
	// other. We tag <html> with the direction so the CSS knows which way to
	// slide (going to /work = forward, back to / = back).
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		const toWork = navigation.to?.url.pathname.startsWith('/work');
		document.documentElement.dataset.nav = toWork ? 'forward' : 'back';

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<title>mrvauxs.net</title>
	<link rel="icon" href={favicon} />
	<!-- Set theme before paint to avoid a flash. Dark is the default. -->
	{@html `<script>(function(){try{var t=localStorage.getItem('theme');if(!t)t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})()</script>`}
</svelte:head>

{@render children()}
