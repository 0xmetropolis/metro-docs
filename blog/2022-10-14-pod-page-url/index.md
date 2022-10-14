---
slug: 2022-10-14-pod-page-url
title: Oct 14, 2022
authors: [chun, danwu]
tags: [changelog, product, pod-url]
---

New features and improvements.

<!--truncate-->

## Added Features
- A popup menu for accessing and editting pod settings. Actions like changing the pod's NFT image and updating the pod version can be accessed from this menu.
- Pods can now be *ejected*. Taking this action will remove all pod members from the pod and disable the Metropolis module from the underlying Safe. The Safe is unaffected--__no funds or signers are moved__--meaning that it can continue to be used as a regular Safe. Only pod managers can eject pods.
- The approval threshold for transactions can now be changed in our web app. This will also change the approval threshold of the underlying Safe. Currently, only pod members can create proposals to change the approval threshold.

## Changed

- Pod page URL handling is improved. Previously, users could enter a pod's ENS name (for example, `metropolis.pod.xyz`) into their browser's address bar to visit the pod page (https://metropolis.pod.xyz). This still works, but the user will be now redirected to `pod.xyz/<pod-name>` (for example, https://pod.xyz/metropolis).
- With the deprecation of Rinkeby, we redeployed our contracts on Goerli. You can find the Goerli contract addresses [here](https://docs.metropolis.space/docs/smart-contracts/metropolis-contracts).

## Fixed

- Pod metadata and NFT images in social link previews.