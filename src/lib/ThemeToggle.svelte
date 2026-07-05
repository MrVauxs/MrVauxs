<script lang="ts">
	// The layout's pre-paint script has already stamped data-theme on <html>;
	// read it directly to seed the toggle icon. (Not an $effect — that would be
	// state-syncing, a runes anti-pattern.)
	let theme = $state<'light' | 'dark'>(
		typeof document !== 'undefined'
			? ((document.documentElement.dataset.theme as 'light' | 'dark') ?? 'dark')
			: 'dark'
	);

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = theme;
		try {
			localStorage.setItem('theme', theme);
		} catch {
			/* ignore */
		}
	}
</script>

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
