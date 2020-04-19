# Eat-the-Burger

Full-stack application with handlebars

Problem: The owner of a burger restaraunt wants to create a record of customer's favorite burgers to determine the type of burgers he should cook.

Solution: Create a burger app that allows the customer to enter their favorite burger or select a burger from a pre-selected list. If the customer is likely to eat the burger they choose to devour it. All burgers along with the status of the burger are stored in the database.

Eat-the-Burger is a restaurant app that allows a user to enter burgers they'd like to eat and then click the "Submit" button to save the burger to the page and the database.

The new burger is identified with a unique ID, determined by the database.

Additionally, in the database new burgers default to 0 in the "devoured" column.
Therefore, the new burger appears in the "Burger List" on the left.

Burgers that are saved to database are paired with a "Devour" button.

Once the "Devour button is clicked for the selected burger it is placed in the "Devoured Burgers List"
and the "devoured" column is updated from 0 to 1.

The app is created by using MySQL, Node, Express and Handlebars.
