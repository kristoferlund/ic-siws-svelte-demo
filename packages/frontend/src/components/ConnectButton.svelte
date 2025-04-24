<script lang="ts">
  import { SolanaConnect } from 'solana-connect';
  import { adapterStore } from '../stores/adapter';
  import { onMount } from 'svelte';
  import { siws } from 'ic-siws-js/svelte';
  import { get } from 'svelte/store';

  export let solConnect: SolanaConnect;
  
  function connect() {
    solConnect.openMenu();
  }

  onMount(() => {
    solConnect.onWalletChange((a) => {
      if (a) {
        adapterStore.set(a);
        get(siws).setAdapter(a);
      }
    });
  });
</script>

{#if !$adapterStore}
  <button id="connectButton" on:click={connect}>
    Connect wallet
  </button>
{/if}