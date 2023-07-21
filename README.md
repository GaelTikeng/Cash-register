# Cash Register App
## About the app
Cash register is an app used to give the user's change after a purchase of an item in a shop. The app has tree inputs : 
* Current cash-in-drawer : This is where the total money present in the cash-in-drawer (CID) is filled by the user.
* Bill
* Payment

## How it works
The app has three main fields to fill: the current cash-in-drawer (which is the money available for change), the bill, and the payment (which is the money the money the client gives). After filling all those fields the user has to click on the "change" button to get display the change.

The app returns 3 types of results :

1 - If the the difference between the payment and the bill (money to give as change X) is less than the total amount in present in the current cash-in-drawer, it returns the change due with as few notes from the cash-in-drawer as possible.

Once the change is given, the cash-in-drawer (CID) is updated.

2 - If X is equal to the money available in the current cah-in-drawer, the app displays a status "closed" and the money the money to give as change X with the corresponding notes.

3 - If X is less than the money availble in the current cash-in-drawer it displays a status "INSUFFICIENT_FUNDS" that is the cash register could not return the exact change.
## Bult with
Cash register is built with :
* HTML
* CSS
* JavaScript
