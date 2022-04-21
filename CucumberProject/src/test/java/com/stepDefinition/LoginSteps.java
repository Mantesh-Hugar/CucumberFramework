package com.stepDefinition;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginSteps {

	WebDriver driver;

	@Given("user is on loginPage")
	public void user_is_on_login_page() throws InterruptedException {
		System.out.println("Step1: User is on LoginPage");
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://demo.actitime.com/login.do");
		Thread.sleep(1000);
	}

	@When("user enters (.*) and (.*)$")
	public void user_enters_username_and_password(String uname, String pswd) throws InterruptedException {
		System.out.println("Step2: User enters username and password");
		Thread.sleep(1000);
		driver.findElement(By.name("username")).sendKeys(uname);
		Thread.sleep(1000);
		driver.findElement(By.name("pwd")).sendKeys(pswd);
		Thread.sleep(1000);
	}

	@And("click on login button")
	public void click_on_login_button() throws InterruptedException {
		System.out.println("Step3: user is clicking login button");
		driver.findElement(By.xpath("//div[text()='Login ']")).click();
		Thread.sleep(2000);
	}

	@Then("user should land on home page")
	public void user_should_land_on_home_page() {

		System.out.println("Step4: User lands on HomePage");
		driver.close();
	}

	@When("user enters credentials using DataTable")
	public void user_enters_credentials_using_DataTable(DataTable dataTable) throws InterruptedException {
		System.out.println("Step5: User enters credentials using DataTable");
		List<List<String>> data = dataTable.cells();
		Thread.sleep(1000);
		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
		Thread.sleep(1000);
		driver.findElement(By.name("pwd")).sendKeys(data.get(0).get(1));
	}
}
