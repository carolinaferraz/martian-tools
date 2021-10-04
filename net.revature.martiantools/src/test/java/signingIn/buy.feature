
Feature: selecting the martianTools
Background:
  Given a user is on inventory page of MartianTools 
	And signed in  

  Scenario: add product into the group
    
    When user input the product id 
    And and click the button 
    Then add Item into the group
    And redirect back to inventory page

  Scenario Outline: Invalid choice 
    When user input the incorrect product id 
    And click the button 
    Then redirect back to inventory page

  