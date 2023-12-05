import selenium
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeType
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from dotenv import load_dotenv
import os
import time
load_dotenv()


class Driver:
    def __init__(self):
        self.options = Options()
        # self.options.add_argument("--headless")
        self.options.add_argument("--start-maximized")
        self.options.add_argument("--no-sandbox")
        self.options.add_experimental_option("detach", True)
        self.options.add_argument("--disable-dev-shm-usage")
        user_agent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.50 Safari/537.36"
        self.options.add_argument(f"user-agent={user_agent}")
        self.options.add_argument("--window-size=1920,1080")
        self.chrome_service = webdriver.ChromeService(
            driver_version="118.0.5993.70", chrome_type=ChromeType.GOOGLE
        )
        self.driver = webdriver.Chrome(service=self.chrome_service, options=self.options)

    def get_driver(self):
        return self.driver
    
class LinkedinScraper:
    def __init__(self, driver):
        self.driver = driver
    
    def login(self, username, password):
        self.driver.get("https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin")
        WebDriverWait(self.driver, 10).until(
            lambda d: d.find_element(By.CSS_SELECTOR, ".login__form")
            )
        login_form = self.driver.find_element(By.CSS_SELECTOR, ".login__form")
        if login_form is not None:
            print("Login page found")
            #find in login form
            username_input = login_form.find_element(By.CSS_SELECTOR, "#username")
            password_input = login_form.find_element(By.CSS_SELECTOR, "#password")
            if username_input is not None and password_input is not None:
                print("Username and password found")
                username_input.send_keys(username)
                time.sleep(3)
                password_input.send_keys(password)
                login_button = login_form.find_element(By.CSS_SELECTOR, ".btn__primary--large.from__button--floating")
                if login_button is not None:
                    print("Login button found")
                    login_button.click()
                else:
                    print("Login button not found")

    def extract_data_profile(self, profile_url):
        self.driver.get(profile_url)
        section = "body .application-outlet .authentication-outlet #profile-content .body .scaffold-layout .scaffold-layout__inner .scaffold-layout__main"
        
        try:
            WebDriverWait(self.driver, 5).until(
                lambda d: d.find_element(By.CSS_SELECTOR,section)
                )
            section = self.driver.find_element(By.CSS_SELECTOR,section)
            All_section = section.find_elements(By.CSS_SELECTOR,'section')
            for section in All_section:
                print('-------------------')
                print(section.get_attribute('innerHTML'))


            self.driver.close()
        except Exception as e:
            print('error', e)
            self.driver.close()


    
def main():
    driver = Driver().get_driver()
    linkedin_scraper = LinkedinScraper(driver)
    username = os.getenv("LINKEDIN_USERNAME")
    password = os.getenv("LINKEDIN_PASSWORD")
    linkedin_scraper.login(username,password)
    linkedin_scraper.extract_data_profile("https://www.linkedin.com/in/killian-angely/")
    

if __name__ == "__main__":
    main()