---
slug: 2023-04-20-permissions
title: Apr 20, 2023
tags: [changelog, product]
---

Podarchy Explorer!

<!-- truncate -->

## Added
- We had our official public launch of the Podarchy Explorer.
- The podarchy now surfaces any relationships that involve OpenZeppelin's Access Control contracts. Support for indexing more contracts is coming in the future.
- The spatial UI now shows relationship icons for member, manager and permission relationships. We've included an animation from the source node to a destination node, depending on the direction of the relationship. The first iteration had these animations always on. After feedback, we changed this to be a solid line and only animate on hover of the icon.
- To the edges, we've added arrows to indicate the directional relationship.
- The sidebar now has a permissions tab that provides additional context to the spatial interface. Each list items has an etherscan link to make further sleuthing easier.
- Hovering over the edge icons will now show a more human readable popup. This popup helps set the context by showing what this relationship entails (e.g., Contract A is owner of Contract B).
- Contracts that are verified on Etherscan will have their contract name surface in our app as well.
- Added recently searched addresses to the search dropdown. This is only supported for connected users.
- Added a Share button so that users can easily copy the URL and share it with their frens.

## Changed
- We moved the CTAs on the Explore page from the top to the bottom.
- The URL path now tracks the selected node and selected lens to make sharing easier.

## Fixed
- Improved many of our performance issues, including better caching.
- Spatial UI is no longer visually overstimulating with animated lines.
