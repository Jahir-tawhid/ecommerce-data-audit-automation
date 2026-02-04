# Project Name: Automated E-commerce Data Audit System

## 1. Project Overview
In this project, I managed a dataset of 100+ e-commerce products and developed an automation script to ensure data integrity. The goal was to identify and resolve common data entry errors such as missing SKUs and invalid pricing.

## 2. What I Did (Steps)
* **Data Preparation:** Created a structured product list in MS Excel/Google Sheets with columns for SI, Product Name, SKU, Category, Price (USD), and Stock Status.
* **Dataset Expansion:** Populated the dataset with over 100 entries to simulate a real-world inventory environment.
* **Automation Logic Development:** Wrote a JavaScript-based audit script (`automation.js`) to scan the entire dataset for errors.
* **Error Identification:** The script automatically flags products that have a price of $0 or less, and entries where the SKU field is empty.
* **Data Cleaning:** Used the script's output to locate errors in the master file and corrected them to ensure 100% data accuracy.

## 3. Why I Did This (Objective)
* **Accuracy:** Manual checking for thousands of rows is prone to human error. This script guarantees 100% accuracy.
* **Efficiency:** Instead of spending hours manually auditing data, this automation completes the task in milliseconds.
* **Scalability:** This logic is designed to work with any number of rows—whether it is 100 or 10,000+.

## 4. Tools & Technologies Used
* **Data Storage:** Google Sheets / Microsoft Excel.
* **Scripting Language:** JavaScript (Node.js environment).
* **Code Editor:** VS Code.

## 5. Key Features of the Script
* **Automated Scan:** Automatically iterates through the product array.
* **Real-time Alerts:** Provides specific error messages for invalid prices and missing SKUs.
* **Audit Summary:** Displays a final success or error count report.