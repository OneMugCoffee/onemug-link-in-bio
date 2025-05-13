import { useWallet } from '@solana/wallet-adapter-react';

export default function WalletConnect() {
  const { publicKey, connect, disconnect } = useWallet();

  return (
    <div>
      {publicKey ? (
        <button onClick={disconnect}>Disconnect Wallet</button>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </div>
  );
}
