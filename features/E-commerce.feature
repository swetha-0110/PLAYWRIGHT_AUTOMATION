Feature: Ecommerce validations

Scenario: placing the Order
Given login to Ecommerce application with "username" and "password"
When Add "Addidas Original" to  Cart
Then Verify "Addidas Original" is displayed in the Cart
When Enter valid details and place the Order
Then Verify order is present in the OrderHistory