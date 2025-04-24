<script lang="ts">
  import { useSiws } from 'ic-siws-js/svelte';
  const siws = useSiws();
</script>

{#if $siws.identity}
  <div id="icPrincipal">
    {$siws.identity.getPrincipal().toText().slice(0,4)}…{$siws.identity.getPrincipal().toText().slice(-4)}
  </div>
{/if}