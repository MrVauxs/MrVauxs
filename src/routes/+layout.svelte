<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/robot.gif';

	let { children } = $props();
</script>

<svelte:head>
	<title>mrvauxs.net</title>
	<link rel="icon" href={favicon} />
	<!-- Set theme before paint to avoid a flash. Dark is the default. -->
	{@html `<script>(function(){try{var t=localStorage.getItem('theme');if(!t)t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})()</script>`}
</svelte:head>

{@render children()}
