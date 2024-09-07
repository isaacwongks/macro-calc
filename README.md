# Macro Calculator
This project contains the codes for a macro calculator, with the list of items personalised to fit the community people at the local gym I frequent.

## <ins>Components</ins>
The main screen of the application. You can add additional items and create additional categories by adding dividers and custom item components. Each custom item component has its own set of nutritional values passed to it. An update function in the parent (App.js) keeps track of the total nutritional value from that specific item type via use state hooks. The quantity of each item is a local value stored in each custom item component (item.js).