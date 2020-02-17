## Pokedex

Pokedex lists pokemon number and name, and displays some basic
information about the pokemon to the side when it’s selected; image, name, type(s), stats(HP,
Attack, Defence, Speed), and preview of their evolution.

### Features

- ##### Redux
  Used Redux to have a single source of truth.
- ##### Typescript
  Used React hooks in typescript.
- ##### Caching API calls
  Pokedex caches API responses in HDD. It caches 2 types of objects pokemons' pages and pokemon details.
- ##### Smart pre-caching
  By hovering on a pokemon in the pokemons' list, the app fetches its details (if they do not exist in the cache) and persist them in the cache.
- ##### Routing
  Upon selecting a pokemon, the URL is updated to become /{Pokemon number}.
- ##### Loading indicators
  There are 3 loading indicators in the app. First, a loading wheel is shown while the app is fetching the next or previous pokemons page. Second, a default (placeholder image) is shown upon selecting a pokemon till the pokemon image is fully loaded. Third, Pokemon stats are removed while the app is fetching new pokemon details.
- ##### Pagination
  Basic pagination is implemented using Next and Previous buttons. The page limit is 20 pokemons.
- ##### Pop up pokemon image
  By clicking on a pokemon image, a pop up is shown having the same image in a larger size.
- ##### Animations
  App title has slide forward animation.
- ##### Tests
  Tests implemented using jest and enzyme. Tests covers rendering components without crashing, simulation of click and hover events, testing components' state values correctness and testing pokemon service which deals with API calls and caching.
- ##### Responsive CSS
  Media queries were used to take care of sizing of components/HTML elements across different screen sizes.
- ##### Separation of concerns
  All API calls and dealing with cache is implemented in a separate class (service) which makes it easy to swap the API provider with minor changes if any in the components.
- ##### Ability to clear cache
  By double clicking on the app title, the cache is cleared (This was added for testing cache during development).
