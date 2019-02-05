# Chrome extension to export LinkedIn people search results

### Installation instructions
1. Visit chrome://extensions (via omnibox or menu -> Tools -> Extensions).
2. Enable Developer mode by ticking the checkbox in the upper-right corner.
3. Click on the "Load unpacked extension..." button.
4. Select the `src` folder.

### Usage
- Navigate to the search results page. For example [2nd connection](https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22S%22%5D).
- "Add" button is injected at the bottom of every person card.
- Click on this button to add a person's details to the storage
- When you're done, open the extension's popup to look through collected profiles and export CSV

### TODO
- Use MutationObserver to make sure that Add button is injected in every profile card
- Basic design for injections and popup window
