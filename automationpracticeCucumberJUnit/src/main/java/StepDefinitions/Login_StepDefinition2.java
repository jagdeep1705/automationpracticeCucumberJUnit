package StepDefinitions;

import java.io.PrintStream;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login_StepDefinition2 {


@Given("^User is already on homepage$")
public void User_is_already_on_homepage() {
	
    System.out.println("User is already on homepage executed finally");
    //throw new PendingException();
}

@When("^Title of homepage is My Store$")
public void Title_of_homepage_is_My_Store() {
	System.out.println("Title of homepage is My Store executed finally");
    //throw new PendingException();
}

@Then("^User clicks on Sign in$")
public void User_clicks_on_Sign_in() {
	System.out.println("User clicks on Sign in executed finally");
    //throw new PendingException();
}

@When("^Title of the page is Login My Store$")
public void Title_of_the_page_is_Login_My_Store() {
	System.out.println("Title of the page is Login My Store");
    //throw new PendingException();
}

@Then("^User enters username and password$")
public void User_enters_username_and_password() {
	System.out.println("User enters username and password");
    //throw new PendingException();
}

@Then("^User clicks on Sign in button$")
public void User_clicks_on_Sign_in_button() {
	System.out.println("User clicks on Sign in button");
    //throw new PendingException();
}

@Then("^User is able to log in$")
public void User_is_able_to_log_in() {
	System.out.println("User is able to log in");
    //throw new PendingException();
}


	
}
