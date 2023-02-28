---
slug: 2023-02-27-explore
title: Feb 27, 2023
tags: [changelog, product]
---

Explore and Explearch shipped!

<!-- truncate -->

## Added
- We added a search bar. Visitors of the app can now search for pods in a search bar. The current implementation is just the starting point as we will layer on complexity to make the experience more pleasant and useful.
- We now have a dedicated Explore page where we display a few featured pods and operators. In the future, we can make this content dynamic.
- Slight animation in the podarchy spatial interface. The dotted line indicated a pod relationship from the originating node to the destination. In subsequent updates, this will have more visual cues and a revamped sidebar.
- EOAs now works for podarchies. It will render the user's EOA as the root node. Check it out [here](https://pod.xyz/podarchy/0x094A473985464098b59660B37162a284b5132753).
- Pod pages were missing a link to the podarchy page. This has now been added.
- The pod settings menu now includes an *About* item which shows the pod ID.


## Changed
- Pod images for our featured users.
- Turned off caching, which used to cause some delays with image updates.
- Updated the navbar. *Pods* is now *Manage* to indicate the pods the connected user is on and can manage. We also included a button to direct the user to their podarchy.
- Various copy changes.

## Removed
- With this update, we no longer show the build permit page. Users go straight to the Explore page.

## Fixed
- Rebuilt the NFT service from scratch, because it was causing a lot of issues.
- Finance lens CORS error is now fixed.