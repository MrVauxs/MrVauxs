<script lang="ts">
	import type { option } from '$routes/+page.svelte';
	export let option: option;
</script>

<svelte:element this={option.href ? 'a' : 'div'} class="card card-hover" href={option.href}>
	<div>
		<img
			src={option.src}
			alt={option.title}
			class="w-96 h-48 overflow-hidden {option.srcCover
				? 'object-cover object-top'
				: 'object-contain object-centre'}"
		/>
	</div>
	<div class="p-1 bg-secondary-100-800-token">
		<span>{option.title}</span>
	</div>
	{#if option.content}<section class="p-4">{option.content}</section>{/if}
	{#if option.footer}<footer class="card-footer">{option.footer}</footer>{/if}
</svelte:element>
