---
id: pod-transactions
title: Pod Transactions
---
##### Information on Metropolis transactions.
---

## Overview

Transactions are the fundamental objects that drive productive activity for pods. Pod transactions can include any on-chain action such as adding pod members, removing pod members, managing Safe assets or conducting any other on-chain action as a pod.

Technically, all pod transactions are managed by Safe's transaction service.

## Approvals, rejections and execution
For many transactions, approvals and rejections are collected as [gasless off-chain signatures](https://help.gnosis-safe.io/en/articles/3940875-gas-less-signatures) and stored in Safe's transaction service. Once the number of approvals/rejections collected meets the [confirmation threshold](#confirmation-threshold), any pod member can execute the transaction and send it on-chain.

## Viewing proposals
All pod proposals can be viewed, approved, rejected and executed within the Metropolis UI. This includes any transaction that is initiated from outside the Metropolis UI (e.g., Snapshot vote as a pod).

In addition, the Safe UI can be used to sign and execute any pod transactions, but does not offer as intuitive support for member pod proposal approval/rejection. 

## Confirmation threshold
The confirmation threshold is the number of pod members needed to sign a transaction before it can be executed on-chain. This threshold is always the same as the threshold for the pod’s Safe. 

Signing a transaction does not require the user to pay a gas fee, but executing a transaction does.

## Proposals vs. direct execution
For pod management actions, you can immediately confirm and execute a transaction if you are the pod manager. This is true when the pod manager is an [EOA](https://ethereum.org/en/glossary/#eoa) or a smart contract (e.g., a Governor contract).

Pod members can create a transaction for certain pod management actions too, but this transaction must be approved by other pod members before it can be executed (enough to reach the Safe’s threshold). 

Check the table below to see if your current pod role allows you to immediately execute pod management actions.

| Persona in relation to pod being managed      | Direct execution? | 
|-----------------------------------------------|-------------------|
| Individual user manager                         |     Yes           |
| Contract manager (e.g., Governor Bravo)         |     Yes           |
| Manager pod                                     |     No            |
| Regular pod member                            |     No            |
| Member pod member                                 |     No            |