<script lang="ts">
  import Icon from "@iconify/svelte";
  import robot from "$lib/assets/robot.gif";
  import botanics from "$lib/assets/botanics.webp";
  import lootTavern from "$lib/assets/loot-tavern.png";
  import legGames from "$lib/assets/leg-games.png";
  import yeehaw from "$lib/assets/yeehaw.png";
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
        src={robot}
        alt="Animated Robot Face"
        class="h-8 scale-150 shadow-md mx-4"
        style="image-rendering: pixelated;"
      />
    </h1>
    <hr />
    <div class="space-y-2">
      <p class="text-lg">I'm Vauxs, thank you for checking out my page!</p>
      <p />
      I'm a
      <u
        title="Proficient in Svelte&Kit, Tailwind, TypeScript, and how to setup GitHub Actions, Cloudflare Pages, own VPS, etc."
        >web developer</u
      >, data-entry clerk, and an editor for TTRPG content. I primarily convert
      and edit content for Foundry VTT in Pathfinder 2e and Dungeons & Dragons
      5e systems.
      <p />
      You can contact me through email at
      <span class="code"> mrvauxs@gmail.com</span>, through Discord at
      <span class="code">@vauxs</span>, or social media linked below.
      <p class="text-xs">
        If you like my open-source work, consider supporting me on Ko-fi!
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
        class="h-48 bg-center bg-[#353535] bg-contain bg-no-repeat text-clip items-end flex"
        style="background-image: url(https://repository-images.githubusercontent.com/501376342/429c4d03-3c60-4e9c-903d-ea3001da9e05);"
      >
        <div class="w-full pb-1 bg-gray-700/80">
          <h2 class="text-lg md:text-2xl font-bold">Open Modules</h2>
          <p class="px-2 text-sm hidden md:block">Open-source, free modules.</p>
        </div>
      </div>
    </a>
    <a href="https://loottavern.com/">
      <div
        class="h-48 bg-center bg-cover bg-no-repeat text-clip items-end flex"
        style="background-image: url('{lootTavern}');"
      >
        <div class="w-full pb-1 bg-gray-700/80">
          <h2 class="text-lg md:text-2xl font-bold">Loot Tavern</h2>
          <p class="px-2 text-sm hidden md:block">
            Item Packs, Adventures, and more!
          </p>
        </div>
      </div>
    </a>
    <a href="https://www.drivethrurpg.com/en/product/428111">
      <div
        class="h-48 bg-top bg-cover bg-no-repeat text-clip items-end flex"
        style="background-image: url('{botanics}');"
      >
        <div class="w-full pb-1 bg-gray-700/80">
          <h2 class="text-lg md:text-2xl font-bold">Botanical Bestiary</h2>
          <p class="px-2 text-sm hidden md:block">
            An entire bestiary of cute leshies.
          </p>
        </div>
      </div>
    </a>
    <div
      class="h-48 bg-white bg-center bg-contain bg-no-repeat text-clip items-end flex cursor-not-allowed"
      style="background-image: url('{legGames}');"
    >
      <div class="w-full pb-1 bg-gray-700/80">
        <h2 class="text-lg md:text-2xl font-bold">Legendary Games</h2>
        <p class="px-2 text-sm hidden md:block">
          Mediterranean Monsters 5e, Asian Monsters 5e
        </p>
      </div>
    </div>
    <a href="https://www.drivethrurpg.com/en/product/482415">
      <div
        class="h-48 bg-center bg-cover bg-no-repeat text-clip items-end flex"
        style="background-image: url('{yeehaw}');"
      >
        <div class="w-full pb-1 bg-gray-700/80">
          <h2 class="text-lg md:text-2xl font-bold inline-block">Safe Haven</h2>
          <p class="px-2 text-sm hidden md:block">
            An adventure module for Pathfinder 2nd Edition.
          </p>
        </div>
      </div>
    </a>
  </div>
</div>
