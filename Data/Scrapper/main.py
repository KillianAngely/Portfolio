from linkedin_scraper import Person, actions
from selenium import webdriver
import os
driver = webdriver.Chrome()

email = os.getenv("LINKEDIN_USERNAME")
password = os.getenv("LINKEDIN_PASSWORD")
actions.login(driver, email, password) # if email and password isnt given, it'll prompt in terminal
person = Person("https://www.linkedin.com/in/joey-sham-aa2a50122", driver=driver)
print(person)