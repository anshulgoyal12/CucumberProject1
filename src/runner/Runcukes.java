package runner;
//import org.junit.runner.RunWith;

import java.io.File;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"src/features"},
glue={"Steps"}, 
monochrome=true,
tags={"@regression"},
plugin={"pretty","html:target/cucumber","com.cucumber.listener.ExtentCucumberFormatter"})
public class Runcukes{
	
	@BeforeClass
	public static void setUp(){
		
		ExtentCucumberFormatter.initiateExtentCucumberFormatter();
		
		ExtentCucumberFormatter.loadConfig(new File("src/extent-config.xml"));
		ExtentCucumberFormatter.addSystemInfo("Browser Name", "Firefox");
		ExtentCucumberFormatter.addSystemInfo("Browser version", "v43.0.1");
		ExtentCucumberFormatter.addSystemInfo("Selenium version", "v2.53.1");
	}

}
