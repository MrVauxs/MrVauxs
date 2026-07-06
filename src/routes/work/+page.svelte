<script lang="ts">
	import ThemeToggle from '$lib/ThemeToggle.svelte';
	import loottavernLogo from '$lib/assets/loottavern-logo.png';
	import teamplusLogo from '$lib/assets/teamplus-logo.png';
	import triggeranimations from '$lib/assets/triggeranimations-logo.png';
	import triggeranimationsDark from '$lib/assets/triggeranimations-logo-dark.png';

	const work = [
		{
			name: 'Loot Tavern',
			role: 'Vault Developer and FoundryVTT head',
			blurb: 'Built the Loot Tavern Vault and managing their FoundryVTT module pipeline.',
			href: 'https://loottavern.com/',
			logo: loottavernLogo
		},
		{
			name: 'Team+',
			role: 'Module Dev and Maintainer',
			blurb: 'Made Magic+, Summoners+, Barbarians+, and maintaining all other Team+ content modules.',
			href: 'https://theteamplus.us/',
			logo: teamplusLogo,
			dark: 'improv'
		},
		{
			name: 'Trigger Animations',
			role: 'Creator',
			blurb: 'My own FoundryVTT module for creating animations with node-based UI.',
			href: 'https://wiki.mrvauxs.net/reference/trigger-animations',
			logo: triggeranimations,
			dark: triggeranimationsDark
		}
	];
</script>

<style>
	/* Wider than the default card so logos can sit beside the text. */
	.page :global(.card) {
		max-width: 44rem;
	}

	/* Named grid areas have no clean Tailwind equivalent, so keep them here.
	   The logo column is a fixed width so every logo lines up on the same edge. */
	:global(.row-has-logo) {
		grid-template-columns: 9rem minmax(0, 1fr) auto;
		grid-template-areas:
			'logo main arrow'
			'logo blurb arrow';
	}

	/* A little paper "tram ticket" for logos with no light-mode variant: warm
	   stock, punched notches on each side, a perforated frame, tilted like it
	   was tucked into the card. Mask + notches need real CSS, not utilities. */
	.ticket {
		--notch: 8px;
		position: relative;
		box-sizing: border-box;
		max-width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.6rem 0.8rem;
		background: linear-gradient(135deg, #fdfbf3, #efe6cf);
		filter: drop-shadow(0 5px 12px rgba(0, 0, 0, 0.3));
		transform: rotate(2deg);
		transition: transform 0.15s ease;
		/* Punch a half-circle notch out of the left and right edges. */
		-webkit-mask:
			radial-gradient(circle at left center, #0000 var(--notch), #000 0),
			radial-gradient(circle at right center, #0000 var(--notch), #000 0);
		-webkit-mask-composite: source-in;
		mask:
			radial-gradient(circle at left center, #0000 var(--notch), #000 0),
			radial-gradient(circle at right center, #0000 var(--notch), #000 0);
		mask-composite: intersect;
	}
	/* Perforated inner frame. */
	.ticket::before {
		content: '';
		position: absolute;
		inset: 5px;
		border: 1px dashed color-mix(in srgb, #9c8a5f 65%, transparent);
		border-radius: 5px;
		pointer-events: none;
	}
	:global(.row:hover) .ticket {
		transform: rotate(4deg) translateY(-2px);
	}
	.logo {
		transition: transform 0.15s ease;
	}
	:global(.row:hover) .logo {
		transform: rotate(-3deg);
	}
</style>

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
			{#each work as { name, role, blurb, href, logo, dark } (name)}
				<a class="row" class:row-has-logo={!!logo} {href} target="_blank" rel="noreferrer">
					{#if logo}
						<div class="flex items-center justify-center [grid-area:logo]">
							{#if dark === 'improv'}
								<!-- No light-mode variant; frame it like a paper ticket so a
								     dark-on-transparent logo stays legible on the dark card. -->
								<div class="ticket">
									<img src={logo} alt="{name} logo" class="max-h-20 w-24 object-contain" />
								</div>
							{:else}
								<!-- Default logo is light-on-transparent — shown in dark mode. -->
								<img
									src={logo}
									alt="{name} logo"
									class="logo max-h-32 w-32 object-contain {dark ? 'light:hidden' : ''}"
								/>
								{#if dark}
									<!-- Dark-on-transparent variant — swapped in for light mode. -->
									<img
										src={dark}
										alt="{name} logo"
										class="hidden logo max-h-32 w-32 object-contain light:block"
									/>
								{/if}
							{/if}
						</div>
					{/if}
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
