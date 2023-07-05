<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { Discord, GitHub } from 'svelte-stacks-icons';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<img class="pixels w-8 mx-1 scale-150" src="robot.gif" alt="Vauxs Robot GIF" />
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					href="https://discordapp.com/users/231079402690052097"
					class="chip variant-outline hover:variant-filled"
				>
					<span class="badge-icon"><Discord /></span>
					<span>Discord</span>
				</a>
				<a href="https://github.com/MrVauxs" class="chip variant-outline hover:variant-filled">
					<span class="badge-icon"><GitHub /></span>
					<span>GitHub</span>
				</a>
				<a
					href="https://foundryvtt.com/community/mrvauxs"
					class="chip variant-outline hover:variant-filled"
				>
					<span class="badge-icon"><img src="fvtt-d20.png" alt="FVTT Icon" /></span>
					<span>FoundryVTT</span>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<div class="text-center py-1.5 bg-tertiary-100-800-token relative">
			This page has been built in an afternoon with SvelteKit and Skeleton UI, and for the first
			time for me, TypeScript. I'm starting to get it, but it's still very annoying!
			<div class="right-1 top-1 absolute">
				<a
					href="https://github.com/MrVauxs/MrVauxs"
					class="chip variant-outline hover:variant-filled"
				>
					<span>Source Code</span>
				</a>
			</div>
		</div>
	</svelte:fragment>
</AppShell>

<style>
	.pixels {
		image-rendering: pixelated;
		image-rendering: -moz-crisp-edges;
		image-rendering: crisp-edges;
	}
</style>
