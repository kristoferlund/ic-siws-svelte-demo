<script lang="ts">
  import { SiwsIdentityProvider } from 'ic-siws-js/svelte';
  import { SolanaConnect } from 'solana-connect';
  import { canisterId } from '../../ic_siws_provider/declarations/index';

  import Header from './components/Header.svelte';
  import SolanaPubKey from './components/SolanaPubKey.svelte';
  import IcIdentity from './components/IcIdentity.svelte';
  import ConnectButton from './components/ConnectButton.svelte';
  import SignInButton from './components/SignInButton.svelte';
  import Footer from './components/Footer.svelte';

  const solConnect = new SolanaConnect();
</script>

<SiwsIdentityProvider {canisterId}>
  <Header />
  <div class="container">
    <SolanaPubKey />
    <IcIdentity />
    <ConnectButton {solConnect}/>
    <SignInButton />
  </div>
  <Footer />
</SiwsIdentityProvider>

