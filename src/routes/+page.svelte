<script lang="ts" context="module">
	export type option = {
		title: string;
		href?: string;
		content?: string;
		footer?: string;
		src: 'fvtt-cc-text-sm.png' | string;
		srcCover: boolean;
		default: boolean;
		placement?: 'top' | 'centre';
	};
</script>

<script lang="ts">
	import Card from '$lib/components/card.svelte';

	const array: option[] = [
		{
			title: 'PF2e Target Damage',
			href: 'https://github.com/MrVauxs/PF2e-Target-Damage',
			src: 'https://github.com/MrVauxs/PF2e-Target-Damage/raw/master/assets/setup.webp',
			srcCover: true,
			default: false
		},
		{
			title: 'PF2e Magaambya',
			href: 'https://github.com/MrVauxs/pf2e-magaambya',
			src: 'fvtt-cc-text-sm.png',
			srcCover: false,
			default: true
		},
		{
			title: 'PF2eTools',
			href: 'https://pf2etools.com/',
			src: 'https://repository-images.githubusercontent.com/261793667/a354346c-f84c-41a4-a5db-477345127dab',
			srcCover: true,
			default: false
		},
		{
			title: 'Foundry Summons',
			href: 'https://github.com/MrVauxs/foundry-summons',
			src: 'https://github.com/MrVauxs/foundry-summons/raw/main/assets/setup.webp',
			srcCover: true,
			default: false,
			placement: 'centre'
		},
		{
			title: 'PF2e Animations',
			href: 'https://github.com/MrVauxs/pf2e-jb2a-macros',
			src: 'https://github.com/MrVauxs/pf2e-jb2a-macros/blob/master/preview.gif?raw=true',
			srcCover: true,
			default: false
		},
		{
			title: 'D&D5e Animations',
			href: 'https://github.com/MrVauxs/dnd5e-animations',
			src: 'fvtt-cc-text-sm.png',
			srcCover: false,
			default: true
		},
		{
			title: 'Speaking As',
			href: 'https://github.com/MrVauxs/speaking-as',
			src: 'fvtt-cc-text-sm.png',
			srcCover: false,
			default: true
		},
		{
			title: 'Botanical Bestiary',
			href: 'https://www.drivethrurpg.com/product/428111/The-Botanical-Bestiary-Foundry-Module',
			src: 'bb cover leshy final v2 SMALL.webp',
			srcCover: true,
			placement: 'top',
			default: false
		},
		{
			title: 'Loot Tavern Themed Item Packs',
			href: 'https://loottavern.com/shop/?ixwpst[product_cat][]=47&ixwpst[product_cat][]=116&title=1&excerpt=1&content=1&categories=1&attributes=1&tags=1&sku=1&ixwpsf[taxonomy][product_cat][show]=all&ixwpsf[taxonomy][product_cat][multiple]=1&ixwpsf[taxonomy][product_cat][filter]=1',
			src: 'loot-tavern-banner-2020-11-04.jpg',
			srcCover: true,
			default: false
		},
		{
			title: 'Asian Monsters (5e)',
			href: 'https://foundryvtt.com/packages/asian-monsters-5e',
			src: 'https://i.imgur.com/GIS22O5.png',
			srcCover: true,
			default: false
		},
		{
			title: 'Treasury of City and Winter',
			src: 'fvtt-cc-text-sm.png',
			srcCover: false,
			default: false
		}
	];
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-3 text-center flex flex-col items-center">
		<div>
			<header class="pb-1 pt-6">
				<div>
					<img
						class="inline-flex pixels w-8 h-8 mx-3 scale-150 align-baseline"
						src="robot.gif"
						alt="Vauxs Robot GIF"
					/>
					<h1 class="inline-flex h1 gradient-heading">Vauxs</h1>
				</div>
				<i class="text-xs">Also known as MrVauxs, ThatVauxs, etc.</i>
			</header>
			<span>
				<p />
				Programmer. I make stuff for FoundryVTT and primarily for the Pathfinder 2e system.
				<p />
				Worked with Loot Tavern, Legendary Games, Inky Cap Press, and created a variety of popular modules for Pathfinder 2e system on Foundry VTT.
			</span>
			<hr class="my-2" />
			<span>Some of the stuff I made:</span>
		</div>
		<div class="gap-1.5 grid sm:grid-cols-2 md:grid-cols-4">
			<!-- Why Number()? Because TypeScript complains about using booleans in arithmetic. -->
			{#each array.sort((a, b) => Number(a.default) - Number(b.default)) as opt}
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
