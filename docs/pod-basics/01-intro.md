---
id: pod-basics
title: What Are Pods?
---

##### Description of Metropolis's pods.

---

## TL;DR

Think of pods as interlocking building blocks for DAOs. They can be used to flexibly connect working groups into a single governable network. 

## Pod Membership NFTs

A traditional multi-sig wallet is like the lock to your house; it is cut to specific keys that control access. In order to change the keys, you need to change the lock.

In the case of pods, access to a pod is authorized through membership NFTs. These NFTs act like an office keycard. When you swipe into your office, your keycard is validated against a set of permissions to see whether or not you have access. Changing key cards is as simple as updating office access permissions.

If you want to add a new pod member, you print them a new key card. If you want to revoke access, you burn their key card. As a member of a pod, your membership NFT is completely public for others to identify your relative access.

## Pod ENS

When you create a pod, you determine its name (e.g., metrovibes). This will be appended with ".pod.xyz" (e.g., metrovibes.pod.xyz) and registered with the [Ethereum Name Service](https://ens.domains/). As your pod interacts with various web3 apps, you will be the beneficiary of seeing the human-readable pod name instead of a wallet address.

## Pod URL

Your full pod ENS name (e.g., metrovibes.pod.xyz) will also serve as your pod URL. This can serve as the "home page" for your pod and provide community members and partners visibility into who the pod members are. 

## Safe

Metropolis is a lightweight permissions wrapper around a [Safe multi-sig wallet](https://gnosis-safe.io/). All features and functionality that a Safe comes with are unaffected, allowing for interoperability with other web3 tools. 

When pod members get added or removed, they are also being added or removed from the underlying Safe.