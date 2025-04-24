<script lang="ts">
  import { siws } from 'ic-siws-js/svelte';
  import { adapterStore } from '../stores/adapter';
</script>

{#if $adapterStore?.publicKey && $siws.identity}
  <div id="icPrincipal">
    {$siws.identity.getPrincipal().toText().slice(0,4)}…{$siws.identity.getPrincipal().toText().slice(-4)}
  </div>
{/if}