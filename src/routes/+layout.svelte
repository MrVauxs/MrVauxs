<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/robot.gif';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import ThemeToggle from '$lib/ThemeToggle.svelte';
	import { toggleTheme } from '$lib/theme.svelte';

	let { children } = $props();

	// BIOS-style keyboard controls advertised in the status bar.
	function onKeydown(e: KeyboardEvent) {
		// Don't hijack keys while the user is typing or acting on a real control.
		const el = e.target as HTMLElement | null;
		if (el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName))) return;
		if (e.metaKey || e.ctrlKey || e.altKey) return;

		const onWork = page.url.pathname.startsWith('/work');

		if (e.key === 't' || e.key === 'T') {
			toggleTheme();
			e.preventDefault();
		} else if (!onWork && (e.key === 'ArrowRight' || e.key === 'ArrowDown')) {
			goto('/work');
			e.preventDefault();
		} else if (onWork && (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'Escape')) {
			goto('/');
			e.preventDefault();
		}
	}
</script>

<svelte:head>
	<title>mrvauxs.net</title>
	<link rel="icon" href={favicon} />
	<!-- Set theme before paint to avoid a flash. Dark ("CRT") is the default. -->
	{@html `<script>(function(){try{var t=localStorage.getItem('theme');if(!t)t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})()</script>`}
</svelte:head>

<svelte:window onkeydown={onKeydown} />

<div class="screen">
	<div class="frame">
		<header class="titlebar">
			<span class="tb-brand">
				<span class="tb-glyph" aria-hidden="true">◈</span>
				mrvauxs.net
			</span>
			<span class="tb-title">SYSTEM&nbsp;SETUP&nbsp;UTILITY</span>
			<span class="tb-right">
				<ThemeToggle />
			</span>
		</header>

		<div class="viewport">
			{@render children()}
		</div>

		<footer class="statusbar">
			<span class="sb-key"><kbd>↑↓</kbd> Navigate</span>
			<span class="sb-key"><kbd>↵</kbd> Select</span>
			<span class="sb-key"><kbd>T</kbd> Theme</span>
			<span class="sb-spacer"></span>
			<span class="sb-status"><span class="sb-dot" aria-hidden="true"></span> ONLINE</span>
		</footer>
	</div>
</div>
