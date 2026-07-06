<script lang="ts">
	const work = [
		{
			name: 'Loot Tavern',
			role: 'Vault Dev · FoundryVTT head',
			blurb: 'Built the Loot Tavern Vault and made its FoundryVTT module pipeline.',
			href: 'https://loottavern.com/'
		},
		{
			name: 'Team+',
			role: 'Module Dev · Maintainer',
			blurb:
				'Made Magic+, Summoners+, Barbarians+, and maintaining all other Team+ content modules.',
			href: 'https://theteamplus.us/'
		},
		{
			name: 'Trigger Animations',
			role: 'Creator',
			blurb: 'My own FoundryVTT module for creating animations with a node-based UI.',
			href: 'https://wiki.mrvauxs.net/reference/trigger-animations'
		}
	];
</script>

<svelte:head>
	<title>Work · mrvauxs.net</title>
</svelte:head>

<section class="view">
	<div class="section-head">
		<span>Work Log</span>
		<span class="caret" aria-hidden="true"></span>
		<span class="sh-rule"></span>
	</div>

	<div class="jobs">
		{#each work as { name, role, blurb, href }, i (name)}
			<a class="job" {href} target="_blank" rel="noreferrer">
				<span class="job-idx">{String(i + 1).padStart(2, '0')}</span>
				<div class="job-head">
					<h2 class="job-name">{name}</h2>
					<span class="job-role">{role}</span>
				</div>
				<p class="job-blurb">{blurb}</p>
				<span class="job-open">
					OPEN
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
						<path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</span>
			</a>
		{/each}
	</div>

	<div class="runbar">
		<a class="run" href="/" data-sveltekit-preload-data="hover">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
				<path d="M19 12H5M11 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
			<span>Home</span>
		</a>
	</div>
</section>
