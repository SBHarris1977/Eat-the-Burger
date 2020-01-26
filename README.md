# Eat-the-Burger
Full-stack application with handlebars

Eat-the-Burger is a restaurant app that allows a user to enter burgers they'd like to eat and then click the "Submit" button to save the burger to the page and the database.

The new burger is identified with a unique ID, determined by the database.

Additionally, in the database new burgers default to 0 in the "devoured" column.
Therefore, the new burger appears in the "Burger List" on the left.
 
Burgers that are saved to database are paired with a "Devour" button.

Once the "Devour button is clicked for the selected burger it is placed in the "Devoured Burgers List"
and the "devoured" column is updated from 0 to 1.

The app is created by using MySQL, Node, Express and Handlebars.