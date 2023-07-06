<script lang="ts" context="module">
	export type option = {
		title: string;
		href?: string;
		content?: string;
		footer?: string;
		src?: string;
	};
</script>

<script lang="ts">
	import Card from '$lib/components/card.svelte';

	const array: option[] = [
		{
			title: 'PF2e Target Damage',
			href: 'https://github.com/MrVauxs/PF2e-Target-Damage',
			src: 'https://github.com/MrVauxs/PF2e-Target-Damage/raw/master/assets/setup.webp'
		},
		{
			title: 'PF2e Magaambya',
			href: 'https://github.com/MrVauxs/pf2e-magaambya'
		},
		{
			title: 'Foundry Summons',
			href: 'https://github.com/MrVauxs/foundry-summons',
			src: 'https://github.com/MrVauxs/foundry-summons/raw/main/assets/setup.webp'
		},
		{
			title: 'PF2e Animations',
			href: 'https://github.com/MrVauxs/pf2e-jb2a-macros',
			src: 'https://github.com/MrVauxs/pf2e-jb2a-macros/blob/master/cover.png?raw=true'
		},
		{
			title: 'D&D5e Animations',
			href: 'https://github.com/MrVauxs/dnd5e-animations'
		},
		{
			title: 'Speaking As',
			href: 'https://github.com/MrVauxs/speaking-as'
		},
		{
			title: 'Botanical Bestiary',
			href: 'https://www.drivethrurpg.com/product/428111/The-Botanical-Bestiary-Foundry-Module',
			src: 'https://static.wixstatic.com/media/6e5ee1_65ecfb847d3a44519f21986abc21759d~mv2.jpg/v1/fill/w_468,h_597,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bb%20cover%20leshy%20final%20v2%20SMALL.jpg'
		},
		{
			title: 'Loot Tavern Themed Item Packs',
			href: 'https://loottavern.com/shop/?ixwpst[product_cat][]=47&ixwpst[product_cat][]=116&title=1&excerpt=1&content=1&categories=1&attributes=1&tags=1&sku=1&ixwpsf[taxonomy][product_cat][show]=all&ixwpsf[taxonomy][product_cat][multiple]=1&ixwpsf[taxonomy][product_cat][filter]=1',
			src: 'https://foundryvtt.s3.us-west-2.amazonaws.com/website-media-dev/user_1/asset/loot-tavern-banner-2020-11-04.jpg'
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
				A Polish Robot or Goblin, depending on the mood. Hobbyist Programmer and Content Creator. Loves
				TTRPGs, art, and music.
			</span>
			<hr class="my-2" />
			<span>Some of the stuff I made:</span>
		</div>
		<div class="gap-1.5 grid sm:grid-cols-2 md:grid-cols-4">
			<!-- Why Number()? Because TypeScript complains about using booleans in arithmetic. -->
			{#each array.sort((b, a) => Number(!!a.src) - Number(!!b.src)) as opt}
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
