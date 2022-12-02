---
id: pod-roles-and-membership
title: Pod Roles and Membership
---
##### Defining roles and membership structures of pods.
---

Roles are one of the most important elements of pods. Two types of roles exist within a pod: the manager role and member role.

## Members

Pods consist of **members**, and every member of a pod is a signer on the pod's underlying multi-sig. While an infinite number of memberships is technically supported, pods are most effective when used with small working groups (5-10 people).

* Pod members must create proposals that meet an approval threshold in order to add/remove members, manage assets, etc.
* Pod memberships are represented as ERC-1155 tokens.
* Pod membership NFTs can be transferred by the holder (it is also possible to make membership NFTs non-transferable).
* Pod members can be added during the creation of a pod or anytime afterwards.
* Pod members can be EOAs or other smart contracts (including Safes, other pods, governor contracts, etc).

## Managers

A pod **manager** has executive power to add or remove members of a pod without requiring approval from other pod members.

* Pod managers have unilateral rights to add and remove members of a pod.
* Managers can be assigned during the creation of a pod or anytime afterwards.
* Pods can only have a single manager; this is also an optional role. In the case where no manager exists, all actions (membership management, etc) will be put up for approval by pod members. 
* A pod can serve as the manager of another pod. 
* A smart contract can serve as the manager of a pod.
* A manager can also be a member of a child pod. In this situation, the manager is a member and can vote on membership/asset management proposals.

### Member Pods

A pod can also be a member of another pod - we refer to these as member pods. These nested pods have the same ability to create and approve proposals as other pod members. 

Key points:
* When a pod is a member of another pod it is referred to as a member pod. 
* The pod it is a member of could be referred to as the parent pod.
* Member pods have the ability cast an approval/reject decision for proposals of their parent pod, just as any normal member would. In order for a member pod to interact with parent pod proposals, it must create its own proposal, referred to as a member pod proposal. Once approve or reject quorum is met for a member pod proposal, the decision is relayed to the parent proposal level.

### Manager Pods

In the same way a pod can be a member of another pod, a pod can be a manager of another pod - which we call manager pods. These pods have the ability to unilaterally add or remove signers of the pod they are managing without requiring approval from pod members.

Key points:
* When a pod is a manager of another pod it is referred to as a manager pod. 
* The pod it is a manager of could be referred to as the managed pod.
* Manager pods have the ability add and remove members of their managed pod, just as any normal manager would. In order for a manager pod to interact with managed pod membership, it must create its own proposal. Once approve or reject quorum is met for a pod proposal, the decision can be executed for the managed pod.