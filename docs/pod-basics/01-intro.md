---
id: pod-basics
title: What Are Pods?
---

##### Quick overview of pods and how they work.

---

## TL;DR

Pods put working groups on-chain, which creates an organizational "source of truth" for your DAO. This "source of truth" can be used for permissions, delegation, governance, and more.

## 1 Pod = 1 Multi-sig

Under the hood, pods are a lightweight permissions wrapper around a [Safe multi-sig wallet](https://gnosis-safe.io/).

When you enable the Metropolis module for a Safe, you are giving Metropolis' audited smart contracts the ability to manage who is a signer on that Safe. We call this "podifying" your Safe.

*Note: Giving Metropolis smart contracts permission to manage signers **does not give Metropolis (the team) the ability to manage signers**. You retain full control over signer management, but you are now able to use Metropolis smart contracts to manage signers (as well as Gnosis built-in functionality). Metropolis (the team) does not, and will never, have the ability to add or remove multi-sig signers on any Safe.*

## How Pods Manage Signers

Pods manage signers through membership NFTs. When an address holds a membership NFT, that address is automatically given signer capabilities on the pod's underlying multi-sig. If an address is removed or no longer holds the membership NFT, they are removed as a signer on the multi-sig.

In this way, membership NFTs act like an office keycard:

A traditional multi-sig wallet is like the lock to your house; it is cut to specific keys that control access. In order to change the keys, you need to change the lock.

In the case of pods, access to a pod is authorized through membership NFTs - which act like an office keycard. When you swipe into your office, your keycard is validated against a set of permissions to see whether or not you have access. Changing key cards is as simple as updating office access permissions.

If you want to add a new pod member, you print them a new key card. If you want to revoke access, you burn their key card. As a member of a pod, your membership NFT is completely public for others to identify your relative access.

## Pod ENS

When you create a pod (or podifying an existing Safe), you give it a name (e.g., metrovibes). This will be appended with ".pod.xyz" (e.g., metrovibes.pod.xyz) and registered with the [Ethereum Name Service](https://ens.domains/). As your pod interacts with various web3 apps, your pod will be labeled by its human-readable ENS name (instead of a Safe address).

## Pod URL

Your full pod ENS name (e.g., metrovibes.pod.xyz) will also serve as your pod URL. This can serve as the "home page" for your pod and provide community members and partners visibility into pod members, existing proposals, etc.