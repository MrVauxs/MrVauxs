<script lang="ts">
	let theme = $state<'light' | 'dark'>('dark');

	$effect(() => {
		theme = (document.documentElement.dataset.theme as 'light' | 'dark') ?? 'dark';
	});

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = theme;
		try {
			localStorage.setItem('theme', theme);
		} catch {
			/* ignore */
		}
	}

	const links = [
		{
			label: 'Twitter',
			href: 'https://twitter.com/ThatVauxs',
			icon: 'twitter'
		},
		{
			label: 'Bluesky',
			href: 'https://bsky.app/profile/mrvauxs.net',
			icon: 'bluesky'
		},
		{
			label: 'GitHub',
			href: 'https://github.com/mrvauxs',
			icon: 'github'
		},
		{
			label: 'Wiki',
			href: 'https://wiki.mrvauxs.net',
			icon: 'wiki'
		}
	] as const;
</script>

<main class="page">
	<button
		class="theme-toggle"
		onclick={toggleTheme}
		aria-label="Toggle color theme"
		title="Toggle color theme"
	>
		{#if theme === 'dark'}
			<!-- sun -->
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
				<circle cx="12" cy="12" r="4" />
				<path
					d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
					stroke-linecap="round"
				/>
			</svg>
		{:else}
			<!-- moon -->
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
				<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" stroke-linejoin="round" />
			</svg>
		{/if}
	</button>

	<article class="card">
		<header class="card-head">
			<span class="eyebrow">mrvauxs.net</span>
			<h1>Hello, I'm Vauxs.</h1>
			<p class="tagline">Thank you for checking out my page!</p>
		</header>

		<hr />

		<div class="prose">
			<p>
				I'm a <span class="tip" title="Svelte & Kit, Tailwind, TypeScript, GitHub Actions, Cloudflare Pages, own VPS, etc.">web developer</span>, data-entry clerk, and an editor for TTRPG content. I
				primarily convert and edit content for Foundry VTT in Pathfinder 2e and
				Dungeons &amp; Dragons 5e systems.
			</p>
			<p>
				You can reach me by email at <span class="code">mrvauxs@gmail.com</span>,
				on Discord at <span class="code">@vauxs</span>, or through the social links
				below.
			</p>
		</div>

		<nav class="links">
			{#each links as { label, href, icon } (href)}
				<a {href} target="_blank" rel="noreferrer" class="link">
					<span class="link-icon">
						{#if icon === 'twitter'}
							<svg viewBox="0 0 24 24" fill="currentColor"
								><path
									d="M18.9 1.2h3.7l-8 9.2 9.4 12.4h-7.4l-5.8-7.6-6.6 7.6H.4l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9Zm-1.3 19.6h2L6.5 3.2H4.4l13.2 17.6Z"
								/></svg
							>
						{:else if icon === 'bluesky'}
							<svg viewBox="0 0 24 24" fill="currentColor"
								><path
									d="M5.9 3.3c2.6 2 5.4 5.9 6.1 8.1.7-2.2 3.5-6.2 6.1-8.1 1.9-1.4 5-2.5 5 1.1 0 .7-.4 6.1-.7 7-.9 3-4 3.7-6.7 3.3 4.8.8 6 3.5 3.4 6.2-5 5.2-7.2-1.3-7.7-3-.1-.3-.2-.5-.2-.3 0-.2-.1 0-.2.3-.5 1.7-2.7 8.2-7.7 3-2.6-2.7-1.4-5.4 3.4-6.2-2.7.4-5.8-.3-6.7-3.3-.3-.9-.7-6.3-.7-7 0-3.6 3.1-2.5 5-1.1Z"
								/></svg
							>
						{:else if icon === 'github'}
							<svg viewBox="0 0 24 24" fill="currentColor"
								><path
									d="M12 1.5a10.5 10.5 0 0 0-3.3 20.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.4-3.5-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.1-4.7-5a4 4 0 0 1 1-2.7c-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.5.1 2.8a4 4 0 0 1 1 2.7c0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10.5 10.5 0 0 0 12 1.5Z"
								/></svg
							>
						{:else if icon === 'wiki'}
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
								><path
									d="M4 4.5A2 2 0 0 1 6 3h13a1 1 0 0 1 1 1v14.5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2V4.5Z"
									stroke-linejoin="round"
								/><path d="M4 18.5A2 2 0 0 1 6 17h14" stroke-linecap="round" /></svg
							>
						{/if}
					</span>
					<span>{label}</span>
				</a>
			{/each}
		</nav>

		<div class="support">
			<a class="donate" href="https://ko-fi.com/mrvauxs" target="_blank" rel="noreferrer">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
					<path
						d="M20.8 4.6a5 5 0 0 0-7.1 0l-1.7 1.7-1.7-1.7a5 5 0 0 0-7.1 7.1l8.8 8.8 8.8-8.8a5 5 0 0 0 0-7.1Z"
						stroke-linejoin="round"
					/>
				</svg>
				<span>Ko-fi</span>
			</a>
			<a class="donate" href="https://patreon.com/mrvauxs" target="_blank" rel="noreferrer">
				<svg viewBox="0 0 24 24" fill="currentColor">
					<path
						d="M3 3h3.7v18H3V3Zm11.3 0A6.7 6.7 0 1 1 14.3 16.4 6.7 6.7 0 0 1 14.3 3Z"
					/>
				</svg>
				<span>Patreon</span>
			</a>
		</div>
	</article>
</main>

<style>
	.page {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.5rem;
	}

	/* ---- Theme toggle ---- */
	.theme-toggle {
		position: fixed;
		top: 1rem;
		right: 1rem;
		width: 2.4rem;
		height: 2.4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--vx-border);
		border-radius: 0.6rem;
		background: color-mix(in srgb, var(--vx-card) 70%, transparent);
		color: var(--vx-gray-2);
		cursor: pointer;
		backdrop-filter: blur(6px);
		transition:
			border-color 0.15s ease,
			color 0.15s ease;
	}
	.theme-toggle:hover {
		border-color: var(--vx-accent);
		color: var(--vx-white);
	}
	.theme-toggle svg {
		width: 1.2rem;
		height: 1.2rem;
	}

	/* ---- The poster card ---- */
	.card {
		width: 100%;
		max-width: 34rem;
		padding: 2.5rem;
		background: linear-gradient(180deg, var(--vx-card), var(--vx-bg-soft));
		border: 1px solid var(--vx-border);
		border-radius: 1.1rem;
		box-shadow:
			0 1px 0 color-mix(in srgb, var(--vx-white) 6%, transparent) inset,
			0 18px 50px rgba(0, 0, 0, 0.28);
	}
	@media (max-width: 30rem) {
		.card {
			padding: 1.75rem;
		}
	}

	.card-head {
		text-align: center;
	}
	.eyebrow {
		font-family: var(--vx-sans);
		font-size: 0.75rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--vx-accent);
	}
	h1 {
		margin: 0.5rem 0 0;
		font-family: var(--vx-serif);
		font-weight: 500;
		font-size: clamp(2rem, 6vw, 2.7rem);
		line-height: 1.1;
		letter-spacing: -0.01em;
		background: linear-gradient(
			180deg,
			var(--vx-white),
			color-mix(in srgb, var(--vx-white) 68%, var(--vx-accent))
		);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	.tagline {
		margin: 0.5rem 0 0;
		color: var(--vx-gray-3);
		font-size: 1.05rem;
	}

	hr {
		border: none;
		border-top: 1px solid var(--vx-border);
		margin: 1.5rem 0;
	}

	.prose p {
		margin: 0 0 0.85rem;
		line-height: 1.6;
		color: var(--vx-gray-2);
		font-size: 1.05rem;
	}
	.prose p:last-child {
		margin-bottom: 0;
	}
	.tip {
		text-decoration: underline;
		text-decoration-style: dotted;
		text-underline-offset: 0.2em;
		cursor: help;
	}
	.code {
		font-family: var(--vx-sans);
		font-size: 0.9em;
		padding: 0.1rem 0.4rem;
		border-radius: 0.4rem;
		background: color-mix(in srgb, var(--vx-accent) 14%, transparent);
		color: var(--vx-accent-high);
		white-space: nowrap;
	}

	/* ---- Social links ---- */
	.links {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.6rem;
		margin-top: 1.75rem;
	}
	@media (max-width: 26rem) {
		.links {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	.link {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.4rem;
		padding: 0.85rem 0.5rem;
		font-family: var(--vx-sans);
		font-size: 0.85rem;
		color: var(--vx-gray-2);
		text-decoration: none;
		border: 1px solid var(--vx-border);
		border-radius: 0.7rem;
		background: color-mix(in srgb, var(--vx-card) 50%, transparent);
		transition:
			transform 0.15s ease,
			border-color 0.15s ease,
			color 0.15s ease;
	}
	.link:hover {
		transform: translateY(-2px);
		border-color: var(--vx-accent);
		color: var(--vx-white);
	}
	.link-icon svg {
		width: 1.4rem;
		height: 1.4rem;
	}

	/* ---- Support ---- */
	.support {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.6rem;
		margin-top: 0.6rem;
	}
	.donate {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.55rem;
		padding: 0.8rem;
		font-family: var(--vx-sans);
		font-weight: 600;
		font-size: 0.9rem;
		color: #fff;
		text-decoration: none;
		border-radius: 0.7rem;
		background: linear-gradient(
			180deg,
			var(--vx-accent),
			color-mix(in srgb, var(--vx-accent) 78%, #000)
		);
		box-shadow: 0 6px 20px color-mix(in srgb, var(--vx-accent) 35%, transparent);
		transition:
			transform 0.15s ease,
			box-shadow 0.15s ease;
	}
	.donate:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 28px color-mix(in srgb, var(--vx-accent) 45%, transparent);
	}
	.donate svg {
		width: 1.15rem;
		height: 1.15rem;
	}
</style>
