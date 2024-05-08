<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<svelte:head>
  <title>mrvauxs.net</title>
</svelte:head>

<div
  class="container h-full mx-auto justify-center items-center p-8 md:grid grid-cols-2 space-y-4 gap-4"
>
  <div class="text-center space-y-4 card p-6">
    <h1 class="text-4xl font-bold flex justify-center items-center text-center">
      Hello!

      <img
        src="robot.gif"
        alt="Animated Robot Face"
        class="h-8 scale-150 shadow-md mx-4"
        style="image-rendering: pixelated;"
      />
    </h1>
    <hr />
    <div class="space-y-2">
      <p class="text-lg">I'm Vauxs, thank you for checking out my page!</p>
      <p />
      I create content for FoundryVTT, specifically for Pathfinder 2e and D&D5e systems.
      On the right you can see with who or on what I've worked on.
      <p />
      You can contact me through email at<span class="code"
        >mrvauxs@gmail.com</span
      >, through Discord at <span class="code">@vauxs</span>, or social media
      linked below.
      <p class="text-sm">
        If you like my work, consider supporting me on Ko-fi!
      </p>
    </div>
    <hr />
    <div class="space-y-1 align-middle items-center [&_a]:w-28">
      <div class="card bg-secondary-500-400-token rounded-2xl inline-block">
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://twitter.com/ThatVauxs"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="logos:twitter" class="mr-1.5" /> Twitter
        </a>
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://bsky.app/profile/mrvauxs.net"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="ri:bluesky-fill" class="mr-2 scale-150" /> Bluesky
        </a>
      </div>
      <a
        class="btn btn-sm variant-ghost-surface"
        href="https://github.com/mrvauxs"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon="mdi:github" class="mr-2 scale-150" /> GitHub
      </a>
      <a
        class="btn btn-sm variant-ghost-surface"
        href="https://foundryvtt.com/community/mrvauxs"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon="mdi:anvil" class="mr-2 scale-150" /> Foundry
      </a>
      <a
        class="btn btn-sm variant-glass-primary"
        href="https://ko-fi.com/mrvauxs"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon="iconoir:donate" class="mr-2 scale-150" /> Donate
      </a>
    </div>
  </div>
  <div
    class="text-center border rounded-md border-primary-700-200-token grid grid-cols-2"
  >
    <a href="https://foundryvtt.com/community/mrvauxs/packages">
      <div
        class="h-48 bg-[url('https://repository-images.githubusercontent.com/501376342/429c4d03-3c60-4e9c-903d-ea3001da9e05')] bg-center bg-[#353535] bg-contain bg-no-repeat text-clip items-end flex"
      >
        <div class="w-full pb-1 bg-gray-700/80">
          <h2 class="text-2xl font-bold">Open Modules</h2>
          <p class="px-2 text-sm hidden md:block">
            Open-source, free modules such as Vauxs' Archives, PF2e Animations,
            Foundry Summons, etc.
          </p>
        </div>
      </div>
    </a>
    <a href="https://loottavern.com/">
      <div
        class="h-48 bg-[url('loot-tavern.png')] bg-center bg-cover bg-no-repeat text-clip items-end flex"
      >
        <div class="w-full pb-1 bg-gray-700/80">
          <h2 class="text-2xl font-bold">Loot Tavern</h2>
          <p class="px-2 text-sm hidden md:block">
            Item Packs, Adventures, and more!
          </p>
        </div>
      </div>
    </a>
    <a
      href="https://www.drivethrurpg.com/en/product/428111/The-Botanical-Bestiary-Foundry-Module"
    >
      <div
        class="h-48 bg-[url('botanics.webp')] bg-top bg-cover bg-no-repeat text-clip items-end flex"
      >
        <div class="w-full pb-1 bg-gray-700/80">
          <h2 class="text-2xl font-bold">Botanical Bestiary</h2>
          <p class="px-2 text-sm hidden md:block">
            An entire bestiary of cute leshies, with custom-made tokens.
          </p>
        </div>
      </div>
    </a>
    <div
      class="h-48 bg-[url('leg-games.png')] bg-white bg-center bg-contain bg-no-repeat text-clip items-end flex cursor-not-allowed"
    >
      <div class="w-full pb-1 bg-gray-700/80">
        <h2 class="text-2xl font-bold">Legendary Games</h2>
        <p class="px-2 text-sm hidden md:block">Bestiaries, Booklets</p>
      </div>
    </div>
  </div>
</div>
