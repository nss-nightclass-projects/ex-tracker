# The Ex-Tracker: Part 1

## Requirements

- As a user, I want to avoid running into my ex, so I need to see a comprehensive list of all locations that my ex frequents.
- Upon arriving at the homepage, I should see a section with information on my ex (keep it to just one ex).
```
Unflattering Image of ex
Name: xxx
Age: xxx
Flaws: xxx
```
- Upon arriving at the homepage, I should see a list of all locations that my ex frequents, displayed as cards.
```
Location Image
Name: [Eg: Starbucks]
Location Address: [Eg: 1 Terminal Dr #325, Nashville, TN 37214]
Time That Ex Normally Goes: [Pick one of the following options: Morning, Afternoon, Evening, After Dark]
```
- As a user, I should be displayed a search bar. This search bar should filter the results of the cards. On keypress, the text I type in the search bar should be contained in either the location title text or the location address of all cards still displayed.
- As a user, I should be displayed 4 button options for "time of day." (Options: Morning, Afternoon, Evening, After Dark). These buttons should filter the results down to each location that has a "Time That Ex Normally Goes" corresponding to the button clicked.


## Technical Requirements

- You should be using Bootstrap.
- You should be using Browserify.
- You should be using jQuery for
  - DOM manipulation
    - Event listeners
    - Selecting elements from the DOM
    - Traversal
    - Filtering results
  - AJAX call to the json file of locations
- Your code should be clean and readable, with single responsibility principle.
