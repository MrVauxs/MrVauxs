<script lang="ts">
	import ThemeToggle from '$lib/ThemeToggle.svelte';
	import robot from '$lib/assets/robot.gif';

	const links = [
		{ label: 'Twitter', href: 'https://twitter.com/ThatVauxs', icon: 'twitter' },
		{ label: 'Bluesky', href: 'https://bsky.app/profile/mrvauxs.net', icon: 'bluesky' },
		{ label: 'GitHub', href: 'https://github.com/mrvauxs', icon: 'github' },
		{ label: 'Wiki', href: 'https://wiki.mrvauxs.net', icon: 'wiki' }
	] as const;
</script>

<main class="page">
	<ThemeToggle />

	<article class="card">
		<header class="card-head">
			<h1>
				Hi, I'm Vauxs!
				<img class="robot" src={robot} alt="Animated pixel-art robot face looking around" />
			</h1>
			<p class="tagline">Thank you for checking out my page!</p>
		</header>

		<hr />

		<div class="prose">
			<p>
				I'm a <span
					class="tip"
					title="Svelte & Kit, Tailwind, TypeScript, GitHub Actions, Cloudflare Pages, own VPS, ..."
					>web developer</span
				>, data-entry clerk, and impromptu proofreader for TTRPG content. I primarily deal in Pathfinder 2e content.
			</p>
			<p>
				You can reach me on Discord at <span class="code">@vauxs</span>, or through the social links below.
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
					<path d="M3 3h3.7v18H3V3Zm11.3 0A6.7 6.7 0 1 1 14.3 16.4 6.7 6.7 0 0 1 14.3 3Z" />
				</svg>
				<span>Patreon</span>
			</a>
		</div>

		<a class="nav-link" href="/work" data-sveltekit-preload-data="hover">
			<span>See what I've worked on</span>
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
				<path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</a>
	</article>
</main>

<style>
	.card-head h1 {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
	}
	.robot {
		height: 1.1em;
		width: auto;
		flex-shrink: 0;
		image-rendering: pixelated;
		filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.35));
		margin-top: -0.2em;
	}
</style>
