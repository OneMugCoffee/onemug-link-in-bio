# OneMug Link-in-Bio Referral System

## Overview

This is a wallet-based referral system for OneMug ID holders (Solana NFTs). Each verified holder can claim a custom username that generates a personal referral page like:

```
onemug.coffee/username
```

Visitors using that link receive a 10% discount at checkout. We manually track and reward users who drive sales.

## Key Features

- **Solana Wallet Connect** (Phantom, Solflare)
- **Verify OneMug ID Ownership** (404 NFT)
- **Claim a Unique Username**
- **Referral Page Generation**
- **Checkout Discount Activation**
- **Manual Backend Logging of Referrals**

## Tech Stack

- **Frontend**: Next.js / React
- **Blockchain**: Solana (Metaplex NFT standard)
- **Backend**: Node / Express (or Firebase/Mongo)
- **Domain Routing**: `onemug.coffee/username`

## MVP Flow

1. User connects wallet and proves ownership of OneMug ID
2. Claims `username` → generates `onemug.coffee/username`
3. Visitors using that link land on branded product/checkout
4. 10% discount auto-applied
5. Username logged for manual reward tracking

## Roadmap

- [ ] Add NFT ownership check logic
- [ ] Build username claim form + routing system
- [ ] Build referral discount handler at checkout
- [ ] Track and log referring usernames

---

### Need to Set Up Locally?

This repo is structured for a full-stack Solana-linked dApp. Setup steps will follow.

## License

MIT License
