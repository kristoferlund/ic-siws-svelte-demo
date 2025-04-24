<script lang="ts">
  import { SolanaConnect } from 'solana-connect';
  import { adapterStore } from '../stores/adapter';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { useSiws } from 'ic-siws-js/svelte';

  export let solConnect: SolanaConnect;
  
  const siws = useSiws();

  function connect() {
    solConnect.openMenu();
  }

  onMount(() => {
    solConnect.onWalletChange((a) => {
      if (a) {
        adapterStore.set(a);
        get(siws).setAdapter(a);
      }
      console.log("setting adapter");
    });
  });
</script>

{#if !$adapterStore}
  <button id="connectButton" on:click={connect}>
    Connect wallet
  </button>
{/if}