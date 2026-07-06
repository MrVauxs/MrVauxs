<script lang="ts">
	import { themeState, toggleTheme } from '$lib/theme.svelte';
</script>

<button
	class="theme-toggle"
	onclick={toggleTheme}
	aria-label="Toggle display mode"
	title="Toggle display mode (T)"
>
	<span class="tt-bracket">[</span>
	{#if themeState.value === 'dark'}
		<svg class="tt-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
			<circle cx="12" cy="12" r="4" />
			<path
				d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
				stroke-linecap="round"
			/>
		</svg>
		<span class="tt-label">CRT</span>
	{:else}
		<svg class="tt-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
			<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" stroke-linejoin="round" />
		</svg>
		<span class="tt-label">PAPER</span>
	{/if}
	<span class="tt-bracket">]</span>
</button>
