<script lang="ts">
  import { siws } from 'ic-siws-js/svelte';
</script>

{#if $siws.identity}
  <div id="icPrincipal">
    {$siws.identity.getPrincipal().toText().slice(0,4)}…{$siws.identity.getPrincipal().toText().slice(-4)}
  </div>
{/if}