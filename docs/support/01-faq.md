---
id: faq
title: FAQ
---

##### Frequently asked questions.
---

## I have a Safe, where do I start?

You can convert an existing Safe to a pod through our web app. Please note that access to our app is [limited](pod-beta-users.md). 

You can enable the Metropolis module on any Safe that you are a signer on - our web app will walk you through this process and create the proposal for you. Once all of your Safe signers have approved to add the Metropolis module to your Safe, you can complete the podification of your Safe through the Metropolis web app.

## Are pods on-chain?

Yes, pods are an on-chain tool. This means that users and builders benefit from the legibility and composability that the Ethereum blockchain offers. Builders can consume pods to easily integrate with Metropolis. Read more about our *[Contracts](https://docs.metropolis.space/docs/smart-contracts/metropolis-contracts)* and *[SDK](https://docs.metropolis.space/docs/sdk/sdk-overview)*.

## Does Metropolis have a token?

Metropolis does ***not*** have a token. Do not accept tokens from anyone claiming to promote a related token. You can see all official communications from the Metropolis team [here](https://twitter.com/0xMetropolis). 

## Are pod approvals recorded on-chain?

Pods use Safe for voting, which are more like approvals than votes. Executed Safe proposals have its approvals logged on-chain. Pods, however, use gas-less voting, meaning that approvals are stored off-chain while the proposal is live. When the approval threshold is met, everything gets ratified on-chain in one transaction.

## Can I adjust my pod membership NFT?

Yes! What's the point of podifying, if you can't do it in style? Pods can set an image of their choice to represent membership to a pod. You can change your pod NFT at any point. 

## What are pod managers?

Pod manager are a special role. They have unilateral control over pod membership, but do not have any approval rights for proposals. To learn more about pod roles go to [*Pod Roles and Memberships*](docs/pod-basics/03-pod-roles-membership.md).

## Which blockchains is Metropolis deployed on?

Metropolis is currently only deployed on Ethereum Mainnet and Goerli. 

## How can I integrate with Metropolis?

We’re actively developing and maintaining our [Metropolis SDK](https://docs.metropolis.space/docs/sdk/sdk-overview). A great way to explore integrations is to play around with our SDK to learn how your platform might consume pods. You can reach out to our team for further questions via [Discord](https://discord.gg/yRdfXxH9kd). 

## Is optimistic governance possible with pods?

Technically, this is possible with a custom module in Safe, but not something that is natively supported in our current iteration.

## Is Metropolis a DAO?

Metropolis not yet a DAO. The project is run and built by a small team to ensure speedy development. The Metropolis team spends much of its time speaking to and working with DAO operators to identify key coordination problems to solve for.

## Are pods trustware or socialware?

Pods are trustware, because they create assurances without incurring a high social cost. This is done by bringing certain aspects of coordination on-chain, allowing them to be enforced without human coordination. Read the original article on [*Trustware vs Socialware*](https://metropolis.mirror.xyz/Y94QCcAGqzbEERmYccJxXqgZaOJr2Oxzm2k3dUn3cbM).

## Are Metropolis smart contracts audited?

Yes! Metropolis smart contracts responsible for pod creation and membership management were audited most recently in October 2022 by Quantstamp. Before that, they have been audited three times during the summer and fall of 2021 by Consensys Dilligence, Quantstamp, and the internal auditor at Safe. If you would like to see the final reports, please reach out to the team on [Discord](https://discord.gg/yRdfXxH9kd).