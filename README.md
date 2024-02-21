# Botc_townsquare

### TODO
1. Setup WS for Vuex. Vuex handles and stores state across all components.
2. Figure out what components we need for grim stuff
    1. Should be base 3 scripts.
    2. All roles for those 3. 
    3. Player array and initialized state(potentially with ways of changing said state).
    4. Host stuff(Host/player/spectator)

I'm sure we'll figure this out.

## Features we want
- Text chat.
    - Between ST and players.
    - Not between players

- Voice chat
    - Voice channels between players
    - Voice channel between ST/player for consult.
    - Nomination phase, adressing overtalking.

- ST powers
    - Kill menu, making accidental kills fewer.
    - Revive menu, for Shab/professor stuff.
    - Queued night order. 
    - Give players deadvotes back.
    - Removal/Placement of execution mark.

- Townsquare 
    - Day timer with variable time controls.
    - Night/Day indicator with the current day displayed. 
    - Player count(townsfolk,outsider,minion,demon)

- Nominations
    - Players can nominate, the ST does not have to do it for them.
        - Done via setting different phases. (Night phase, Day phase, Nomination phase)
    - Nominations have accusation, defence, pertinence.
    - Automatic removal of execution mark when vote is tied/beaten.
    



This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
