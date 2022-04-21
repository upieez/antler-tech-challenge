# Antler Tech Challenge

## Summary

Antler run cohorts around the world that accept ambitious founders looking to build a startup or propel their existing startup to further success. We want to make sure that the onboarding process for founders into our system is seamless and captures the data we need to enable a successful journey at Antler.

Your task is to create an onboarding flow for founders and startups accepted into the Antler Program.

## Requirements

A user can either be a solo founder looking to build a company or a founder of an existing, funded startup. Both user journeys will be different, as we want to capture more relevant, custom data for each user path.

1. Currently, we have accepted these founders into Antler. Only these users will be able to continue to the onboarding flow.

   | Name          | Email                   | Program Location  | Cohort   | Program Type |
   | ------------- | ----------------------- | ----------------- | -------- | ------------ |
   | Liam Swift    | liam.swift@antler.co    | Sydney, Australia | SYD_1013 | Founder      |
   | Scott Waddle  | scott.waddle@antler.co  | Sydney, Australia | SYD_1013 | Founder      |
   | Jack McDonald | jack.mcdonald@antler.co | Berlin, Germany   | BER_0126 | Startup      |
   | Nic Touron    | nic@antler.co           | Berlin, Germany   | BER_0126 | Startup      |
   | Oly Lotfi     | oly.lotfi@antler.co     | Berlin, Germany   | BER_0126 | Startup      |
   | Daniel Henry  | daniel.henry@antler.co  | Berlin, Germany   | BER_0126 | Startup      |

   Users will have the option to sign up via email or Google.

2. We will need to capture profile data:

   - Linkedin url (optional)
   - Expertise (e.g. technical, design, product)
   - Topics and industries of interest (e.g. blockchain, health tech, property tech)

### If the user is part of the startup program, we need to capture information about their startup

3. The user can select co-founders for their startup:

   - The user can select co-founders (if they have any) from the same cohort that do not yet have a startup company assigned.
   - If another user has assigned them as a co-founder already, the user only has the option to accept or reject that startup team.

4. If the user is part of the startup program, we will need to get more information about the startup. (Skip if user has accepted to be part of a startup team already)

   - Company name
   - Company size
   - Funding raised

5. The user is onboarded and is taken to the app dashboard

## Technology Stack

Your solutions should contain the following technologies:

- React/NextJS with Typescript
- Apollo Client
- Chakra UI Component Library
- Hasura GraphQL Engine
- Auth Provider (e.g. Auth0, Firebase Auth)
- Any additional packages/libraries that you see fit

## Setup

To begin, fork this repo and begin working in a new repository. The configuration for Hasura has already been setup, you will just need to follow the steps found [here](./hasura/README.md)

## What we are looking for

- Strong Typescript/JS fundamentals
- Clean and performant code
- Regular commits with concise, clear messages
- Good product design and consistent UI
- Appropriate error handling
- Database structure that maps to business requirements

## Submission

Send a link to your repository back to us when you are finished!
