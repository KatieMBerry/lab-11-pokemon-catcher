# lab-11-pokemon-catcher
1. Present 3 random pokemon
    - select images & display side-by-side
    - use a while loop to pick without duplicates
2. User chooses one to catch (click)
3. 3 more pokemon are randomly selected & displayed
4. After 10 rounds, move user to the results page to see all that they captured
    - use window.location

///STATES to track:
- total # caught/clicked in the session
    - includes:
        a. counter (use data model)
        b. an array for those clicked-on

- total # of times user encountered/a given pokemon was displayed
    - includes:
        a. counter (use data model)
        b. an array (that includes those caught)

- total # of each type of pokemon caught in the session
    - uses local storage?

///DOM Eles:
- game page:
    - images/radio buttons (inputs)
        - inputs need to use the same name attribute and empty values to be injected later

- results page:
    - clear button to clear local storage and end the game