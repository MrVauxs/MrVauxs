<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { Discord, GitHub, Twitter } from 'svelte-stacks-icons';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar slotTrail="place-content-end" padding="py-2">
			<svelte:fragment slot="trail">
				<a href="https://twitter.com/ThatVauxs" class="chip variant-outline hover:variant-filled">
					<span class="badge-icon"><Twitter /></span>
					<span class="hidden sm:inline">Twitter</span>
				</a>
				<a
					href="https://discordapp.com/users/231079402690052097"
					class="chip variant-outline hover:variant-filled"
				>
					<span class="badge-icon"><Discord /></span>
					<span class="hidden sm:inline">Discord</span>
				</a>
				<a href="https://github.com/MrVauxs" class="chip variant-outline hover:variant-filled">
					<span class="badge-icon"><GitHub /></span>
					<span class="hidden sm:inline">GitHub</span>
				</a>
				<a
					href="https://foundryvtt.com/community/mrvauxs"
					class="chip variant-outline hover:variant-filled"
				>
					<span class="badge-icon"><img src="fvtt-d20.png" alt="FVTT Icon" /></span>
					<span class="hidden sm:inline">FoundryVTT</span>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<a
			href="https://github.com/MrVauxs/MrVauxs"
			class="chip variant-outline hover:variant-filled m-1"
		>
			<span>Source Code</span>
		</a>
	</svelte:fragment>
</AppShell>
