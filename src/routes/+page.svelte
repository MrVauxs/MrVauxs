<script lang="ts" context="module">
	export type option = {
		title: string;
		href?: string;
		content?: string;
		footer?: string;
	};
</script>

<script lang="ts">
	import Card from '$lib/components/card.svelte';

	const array: option[] = [
		{
			title: 'PF2e Target Damage',
			href: 'https://github.com/MrVauxs/PF2e-Target-Damage'
		},
		{
			title: 'PF2e Magaambya',
			href: 'https://github.com/MrVauxs/pf2e-magaambya'
		},
		{
			title: 'Foundry Summons',
			href: 'https://github.com/MrVauxs/foundry-summons'
		},
		{
			title: 'PF2e Animations',
			href: 'https://github.com/MrVauxs/pf2e-jb2a-macros'
		},
		{
			title: 'D&D5e Animations',
			href: 'https://github.com/MrVauxs/dnd5e-animations'
		},
		{
			title: 'Speaking As',
			href: 'https://github.com/MrVauxs/speaking-as'
		}
	];
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h1 class="h1 gradient-heading">Vauxs</h1>
		The stuff I made:
		<div class="flex gap-1.5">
			{#each array as opt}
				<Card option={opt} />
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.gradient-heading {
		@apply bg-clip-text text-transparent box-decoration-clone;
		/* Direction */
		@apply bg-gradient-to-br;
		/* Color Stops */
		@apply from-primary-200 via-tertiary-400 to-secondary-600;
	}
</style>
