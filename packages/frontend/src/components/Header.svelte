<script lang="ts">
  import icLogo   from '../assets/ic.svg';
  import solLogo  from '../assets/solana.svg';
  import svelteLogo   from '../assets/svelte.svg';
</script>

<div class="logo-group">
  <a href="https://internetcomputer.org" target="_blank">
    <img src={icLogo} class="logo" alt="Internet Computer" />
  </a>
  <a href="https://solana.com" target="_blank">
    <img src={solLogo} class="logo" alt="Solana" />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src={svelteLogo} class="logo" alt="TypeScript" />
  </a>
</div>
<h1>Sign in with Solana</h1>
<p>This demo authenticates Solana users against an IC canister using <a href="https://www.npmjs.com/package/ic-siws-js">ic-siws-js</a>.</p>
<div class="pill-container">
  <span class="pill">Svelte version</span>
</div>