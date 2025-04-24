<script lang="ts">
  import { get } from 'svelte/store';
  import { adapterStore } from '../stores/adapter';
  import { siws } from 'ic-siws-js/svelte';

  function login() {
    get(siws).login();
  }

  function logout() {
    get(siws).clear();
  }
</script>

{#if $adapterStore}

  {#if !$siws.identity}
    <button
      id="loginButton"
      on:click={login}
      disabled={$siws.isPreparingLogin || $siws.isLoggingIn || $siws.signMessageStatus === 'pending'}
    >
      {#if $siws.isPreparingLogin}
        Preparing…
      {:else if $siws.isLoggingIn}
        Logging in…
      {:else if $siws.signMessageStatus === 'pending'}
        Signing…
      {:else}
        Login
      {/if}
    </button>
  {/if}

  {#if $siws.identity}
    <button
      id="logoutButton"
      on:click={logout}
    >
      Logout
    </button>
  {/if}

{/if}
