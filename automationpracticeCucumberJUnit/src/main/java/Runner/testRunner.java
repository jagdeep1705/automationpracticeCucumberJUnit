package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features={"/Users/shamitamalik/Documents/workspace/automationpracticeCucumberJUnit/src/main/java/feartures"}
		,glue={"StepDefinitions"}
	    ,plugin = { "pretty", "html:test-outout", "json:json_output/cucumber.json",
        "junit:junit_xml/cucumber.xml" }, 
monochrome = true, 
strict = true, 
dryRun = false)
		

public class testRunner {

	
	
}
