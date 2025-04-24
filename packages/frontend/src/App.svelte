<script lang="ts">
  import { SolanaConnect } from 'solana-connect';
  import { canisterId } from '../../ic_siws_provider/declarations/index';
  import { init as initSiws, siws } from 'ic-siws-js/svelte';
  import { get } from 'svelte/store';

  import Header from './components/Header.svelte';
  import SolanaPubKey from './components/SolanaPubKey.svelte';
  import IcIdentity from './components/IcIdentity.svelte';
  import ConnectButton from './components/ConnectButton.svelte';
  import SignInButton from './components/SignInButton.svelte';
  import Footer from './components/Footer.svelte';

  const solConnect = new SolanaConnect();
 
  // Initialize the siws library with the id of the provider canister
  initSiws(canisterId);
</script>

<Header />
<div class="container">
  <SolanaPubKey />
  <IcIdentity />
  <ConnectButton {solConnect}/>
  <SignInButton />
</div>
<Footer />

