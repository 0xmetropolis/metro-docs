---
slug: 2022-09-20-pod-page-url
title: Sep 20, 2022
authors: [zkchun]
tags: [changelog, product]
---

## App Updates and Improvements

We rolled out some changes to the Metropolis app and improved performance.

<!--truncate-->

## Pod Page URL Handling

We made some changes to the way we handle pod page URLs. Previously, users could enter a pod's ENS name into their browsers address bar and see the pod page (for example, https://metropolis.pod.xyz). This still works, but the user will be now redirected to `pod.xyz/<pod-name>` (for example, https://pod.xyz/metropolis).

For those who prefer to use the pod's ENS name as the pod page URL, this still works.
From an architectural standpoint, this rework reduces some complexity and better sets us up to implement new features.