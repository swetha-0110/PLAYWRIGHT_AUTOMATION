Feature: Ecommerce validations
@Validation
Scenario: placing the Order
Given login to Ecommerce2 application with "username" and "password"
Then verify error message is displayed

Examples:
    | username           | password     | 
    | anshika@gmail.com  | Iamking@000  | 