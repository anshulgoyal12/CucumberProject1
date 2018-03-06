package Steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep {
	
	@Before("@sanity")
	public void setUp(){
		
		System.out.println("Launch the browser");
	}
	
	@After("@sanity")
	public void tearDown(){
		
		System.out.println("driver.quit()");
	}
	
	@Before("@regression")
	public void setUpProd(){
		
		System.out.println("Launch the browser on Production");
	}
	
	@After("@regression")
	public void tearDownProd(){
		
		System.out.println("driver.quit() on Production");
	}
	
	@Given("^user navigates to venors depot website$")
	public void user_navigates_to_venors_depot_website() throws Throwable {
		
		System.out.println("@Given - user navigates to vendor.com");
	    
	}

	@When("^user validate the home page title$")
	public void user_validate_the_home_page_title() throws Throwable {
	    
		System.out.println("@When - user validate the home page title");
	}

	@Then("^user enters the username$")
	public void user_enters_the_username() throws Throwable {
		
		System.out.println("@Then - user enters the username");
	    
	}

	@And("^user enters the password$")
	public void user_enters_the_password() throws Throwable {
	    
		System.out.println("@And - user enters the password");
	}

	@Then("^user should be successfully logged in$")
	public void user_should_be_logged_in_successfully() throws Throwable {
	    
		System.out.println("@Then - user should be logged in successfully");
	}
	
	@Then("^user enters invalid username$")
	public void user_enters_invalid_username() throws Throwable {
	    
		System.out.println("@Then - user enters invalid username");
	}

	@And("^user enters invalid password$")
	public void user_enters_invalid_password() throws Throwable {
	    
		System.out.println("@And - user enters invalid password");
	}

	@Then("^user should not be successfully logged in$")
	public void user_should_not_be_successfully_logged_in() throws Throwable {
	    
		System.out.println("@Then - user should not be successfully logged in");
	}


}