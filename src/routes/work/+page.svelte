<script lang="ts">
	import ThemeToggle from '$lib/ThemeToggle.svelte';

	const work = [
		{
			name: 'Loot Tavern',
			role: 'Vault Developer and FoundryVTT head',
			blurb: 'Built the Loot Tavern Vault and made its FoundryVTT module pipeline.',
			href: 'https://loottavern.com/'
		},
		{
			name: 'Team+',
			role: 'Module Dev and Maintainer',
			blurb: 'Made Magic+, Summoners+, Barbarians+, and maintaining all other Team+ content modules.',
			href: 'https://theteamplus.us/'
		},
		{
			name: 'Trigger Animations',
			role: 'Creator',
			blurb: 'My own FoundryVTT module for creating animations with node-based UI.',
			href: 'https://wiki.mrvauxs.net/reference/trigger-animations'
		}
	] as const;
</script>

<svelte:head>
	<title>Work · mrvauxs.net</title>
</svelte:head>

<main class="page">
	<ThemeToggle />

	<article class="card">
		<header class="card-head">
			<h1>What I've worked on.</h1>
			<p class="tagline">Projects I've had my hand in.</p>
		</header>

		<hr />

		<div class="rows">
			{#each work as { name, role, blurb, href } (name)}
				<a class="row" {href} target="_blank" rel="noreferrer">
					<div class="row-main">
						<h2>{name}</h2>
						<span class="row-role">{role}</span>
					</div>
					<p class="row-blurb">{blurb}</p>
					<svg
						class="row-arrow"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.8"
					>
						<path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</a>
			{/each}
		</div>

		<a class="nav-link" href="/" data-sveltekit-preload-data="hover">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
				<path d="M19 12H5M11 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
			<span>Back</span>
		</a>
	</article>
</main>
