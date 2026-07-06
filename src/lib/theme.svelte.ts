// Shared reactive theme state. The pre-paint script in +layout.svelte has
// already stamped data-theme on <html>, so on the client we read it back here.
// Both the title-bar toggle and the layout's keyboard handler ('T') mutate the
// same rune, so the UI stays in sync no matter how the theme is flipped.

type Theme = 'dark' | 'light';

function initial(): Theme {
	if (typeof document === 'undefined') return 'dark';
	return (document.documentElement.dataset.theme as Theme) ?? 'dark';
}

export const themeState = $state<{ value: Theme }>({ value: initial() });

export function toggleTheme() {
	setTheme(themeState.value === 'dark' ? 'light' : 'dark');
}

export function setTheme(next: Theme) {
	themeState.value = next;
	document.documentElement.dataset.theme = next;
	try {
		localStorage.setItem('theme', next);
	} catch {
		/* ignore */
	}
}
