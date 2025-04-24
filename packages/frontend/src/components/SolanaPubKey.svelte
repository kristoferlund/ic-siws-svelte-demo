<script lang="ts">
  import { adapterStore } from '../stores/adapter';
</script>

{#if $adapterStore?.publicKey}
  <div id="solPubKey">
    {$adapterStore.publicKey.toString().slice(0,4)}…{$adapterStore.publicKey.toString().slice(-4)}
  </div>
{/if}