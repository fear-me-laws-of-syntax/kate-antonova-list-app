## Kate's List App

# LISTS (name subject to change: possibly ListsHub)

### Overview

LISTS is a user-friendly app designed to help users create, manage and reuse their lists for various activities such as travel packing, wellness, and periodic tasks. Users can log in, select from predefined lists or categories, customize them based on their needs and save these lists for future use, or create their own from scratch. 

### Problem Space

Forgetting important items while traveling, trying to stay organized, or managing daily tasks is common. People often rely on memory or notes that are created once and then get lost. LISTS offers a solution where users can easily create, customize, and reuse their lists, ensuring nothing is forgotten.

### User Profile

LISTS is designed for people who aspire to stay organized but often find themselves having to keep a lot of things in mind and don't want to risk forgetting items when preparing for activities such as traveling or wellness routines. It is also ideal for those who prefer to reuse their lists and have them easily discoverable and accessible in one place without having to navigate a search through notes. 

### Features

User Authentication: Users can log in or sign up to create a personalized experience 
(mockup; sign-up/log-in won't be functional in Phase 1).

My Lists:

List Creation and Management: Options to create, remove, and edit lists and items within a list.

Persistent Storage: Users' lists are saved and displayed in "My Lists" for easy access on subsequent visits.

Interactivity: Ability to check off items as they are packed or completed, providing a sense of accomplishment.

Inspiration (Suggestions): Preset categories with predefined list suggestions, such as Travel, Wellness, House Cleaning, etc., to inspire users with ideas for new lists. The categories are preset, but individual lists can be customized and saved by users according to their needs.


## Implementation

### Tech Stack

Frontend: React for building the user interface and handling user interactions.

Backend: Node.js and Express to manage API requests and data storage.

Database: MySQL for storing user lists.

Styling: Sass (SCSS) for advanced styling and responsive design.

### APIs

For Phase 1 no external APIs are planned to be used. 
Planning to integrate some AI API in the future to help users generate a list from a few keywords of what's the list for.

### Sitemap

Please see all-pages.png
![Wireframe of all pages](/description/all-pages.png)


Login/Sign Up Page: Allows users to log in or create an account. 

![Log in and sign up pages](/description/log-in-sign-up.png)

Home (List of My Lists): Displays all saved lists for the logged-in user.
List Page: Displays all list items within a user's list.
![My Lists and a List pages](/description/users-list-names-and-lists.png)

Inspiration Page: Suggests categories to inspire users to create new lists.
![Inspiration pages](/description/preset-lists-for-inspiration.png)

Category Page: Suggests lists within a selected main category (e.g., Travel -> Hot Country, Snowboarding etc.).
Category's List Page: Shows a list of predefined lists inside the selected category.
Suggested List's Editable Page: A page where users can choose to use a predefined list, add or remove items from it.
![Suggested List's Editable Page](/description/ability-to-use-and-edit-preset-lists.png)

### Mockups

Please refer to the images in the root folder.

### Data

Lists Names: Contains lists created by a user.
Lists Items: Each list contains multiple items that a user can manage (add/delete/check off).

Categories: Stores predefined categories like Travel, Wellness, House Cleaning, etc.

### Endpoints

GET /categories: Fetch all available categories.
GET /categories/lists: Fetch lists under a specific category.

POST /lists: Create a new list.
PUT /lists/: Update a list (add/remove items).
DELETE /lists/: Delete a user's list.

## Roadmap

#1 Plan a project, create wireframes.
#2 Set up project repository, initial React app setup, basic routing.
#3 Create UI components for lists, categories, and customization.
#4 Develop backend APIs and connect them to the frontend, implement state management, integrate persistent storage.
#5 Testing, debugging, UI/UX improvements, and final adjustments.

---

## Future Implementations

Integrate Functional Log In/ Sign Up
Integrate AI API to help users generate a list from a few keywords of what's the list for.
