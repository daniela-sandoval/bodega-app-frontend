# Module 4: 🏬 La Bodega API 🏬

La Bodega is an app that emulated the experience of shopping at your neighborhood bodega/ corner store deli. La Bodega talks to it's backend La Bodega API which contains seeded instances of produce and the ability to manipulate a customer's cart found in the controllers. 

This is a Ruby on Rails API created using ActiveRecord.

## How to Install La Bodega API
1. Use your terminal to navigate into the place where you want to clone La Bodega API's directory and `git clone` the url.
2. In terminal run `bundle install` in order to install the necessary gems needed to run the backend.
3. Run command `rails db:migrate && rails db:seed` in order to set up the tables and the necessary seeded files.
4. Finally, run `rails s` and copy the url in your terminal (more than likely localhost:3000) and open up your browser using the url in order to having a running server that La bodega can make requests to.

## How to Use La Bodega API
La Bodega API is needed in order to accept HTTP requests from it's frontend La Bodega. This allows users to:
* Create, read, and update their accounts with the help of JavaScript Web Tokens and Bcrypt.
* Manipulate a user's cart by adding, deleting, and updating cart item instances.
* Have access to seeded produce and their categories. 

## Developers
* Tess Neau
* Daniela Sandoval

## More About Our App
La Bodega API requires ActiveRecord and gems such as CORS, JWT, and Bcrypt.

### License
This project is licensed under the Learn.co Educational Content License. Please read `LICENSE.md` location in the directory or click on the following link (http://learn.co/content-license) for further details.
