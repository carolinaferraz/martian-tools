# High-Level Description:
An Online Store for selling products & supplies for people on Earth who are preparing to live on Mars. This store will stock items for both the well entrenched and those just starting out. The app will feature a complete shopping flow, user account for keeping their stuff/editing and (maybe) a vendor account for updating inventory when it gets low.

## Features:
#### Online Store
* Products pages separated by category (we get to define the categories)
* Cart for buying
* Groups for saving items for later - must be logged in
* Default group called Wishlist. Have add to Wishlist buttons on each items page.
* View what's in the cart or a group and edit the amount or remove the item(s) from the cart or group.
* Ability to add items 1 by 1 from the Wishlist to the cart or a group.
* Ability to add an entire group to the cart.
* Feedback or comments section.
#### User accounts
* Holds the users past purchases
* Holds the users address
* Preferred shipping methods
* Update username/password/email address
* Allows user to edit groups (crud)

✓✔
## User Stories:
*(As a < type of user >, I want < some goal > so that < some reason >.)*
* ✔ As a {user} I want to {add items to} my shopping cart
* ✔ As a {user} I want to {purchase my items}
* ✔ As a {user} I want to {be able to view previous orders} - Complete. Just need tests
* ✔ As a {user} I want to {save items to a Wishlist}
* ✔ As a {user} I want to {create groups of items} and {add items to those groups} - Mostly Complete. Can create groups, the endpoints for adding to a group are set.
* ✔ As a {user} I want to {buy individual items from a group} or {buy the entire group}
* ✔ As a {user} I want to {edit my address, preferred shipping method, my username, my password, my email address} - Complete, Just need tests
* As a {user} I want to {know what is bought most frequently in each category and overall}
* ✔ As a {user} I want to {be able to share my Wishlist with others}
* ✔ As a {user} I want {my groups to be shareable}
* ✔ As a {user} I want to {be able to leave comments on items that I have purchased, and see others comments}
* ✔ As a {user} I want to {be able to ask questions about items}
* As a {user} I want to {be able to get emergency shipments if I am already on mars}

## Stretch Goals:
* let vendors put their stuff on sale
* add more categories and items to each category
* Make shipping prices dynamic based on users location 
* Notify users when items in their Wishlist/groups are on sale

## Angular Build
  10/15/2021 Video

## Useful Links:
  Markdown cheat sheet - https://www.markdownguide.org/basic-syntax/  
  User stories examples - https://www.mountaingoatsoftware.com/agile/user-stories  
  Tour of Heroes - https://angular.io/tutorial
  
## Resources used for styling and responsiveness:
Google Fonts https://fonts.google.com
Google Material Icons https://fonts.google.com/icons
Bootstrap CSS https://getbootstrap.com/docs/3.3/getting-started/
