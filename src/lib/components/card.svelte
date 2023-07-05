<script lang="ts">
	import type { option } from '$routes/+page.svelte';
	export let option: option;
</script>

<svelte:element this={option.href ? 'a' : 'div'} class="card card-hover p-3" href={option.href}>
	<header>{option.title}</header>
	{#if option.content}<section class="p-4">(content)</section>{/if}
	{#if option.footer}<footer class="card-footer">(footer)</footer>{/if}
</svelte:element>
