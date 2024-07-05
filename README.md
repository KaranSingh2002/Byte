BYTE mern-ecommerce

For Frontend-> React JS

For Backend-> Node JS & Express JS

For Database-> MongoDB

Installation process
clone the repo using this command
git clone [https://github.com/KaranSingh2002/Byte]
install backend packages
npm install 
install frontend packages
cd client
npm install

go to the parent folder of mern-ecommerce & create .env for connection, JWT_SECRET, BRAINTREE_MERCHANT_ID, BRAINTREE_PUBLIC_KEY and BRAINTREE_PRIVATE_KEY.
FOR REFRENCE :-

PORT = 8080
DEV_MODE = development 
MONGO_URL = mongodb+srv://username:<yourpassword>@cluster0.q4kfkmy.mongodb.net/ecommerce
JWT_SECRET = AIFHDAIEWDI232323
BRAINTREE_MERCHANT_ID = jyfypfrnftnq57ks
BRAINTREE_PUBLIC_KEY = 3cj2d2wb4fztswgs
BRAINTREE_PRIVATE_KEY = 616be48f06627d6c60e1f312fe6bf5a7


create another .env file inside client directory for REACT_APP_API.

FOR REFRENCE :-
REACT_APP_API = http://localhost:8080

Instructions:
for mongodb atlas database creation follow this tutorial->https://www.youtube.com/watch?v=KKyag6t98g8
you can use any random string as JWTSECRET like (dwaedfae1234)
for localhost REACT_APP_API is http://localhost:8080/api but for heruko (server deployment) it will be different
note: add .env on .gitignore
for server deployment use secrets directly
deploy this project on your local server by using this command

cd Byte
npm run dev
note: both backend & frontend server will start at once with the above command.
Database Structure: (Table: columns)
categories: _id, name, createdAt, updatedAt;
orders: _id, status, products (Array), transaction_id, amount, address, user (Object), createdAt, updatedAt
products: _id, photo (Object), sold, name, description, price, category, shipping, quantity, createdAt, updatedAt
users: _id, role, history (Array), name, email, salt, hashed_password, createdAt, updatedAt

App Description:

FUNCTIONS FOR USER :-

1. user can view all products.
2. user can view single product.
3. user can search products and view products by category and price range.
4. user can add to cart checkout products using credit card info and paypal.
5. user can register & sign in Forgot password functionality is also available.
6. user can also view similar products.
7. user can also view different categories and also one category product at a time .

fUNCTIONS FOR ADMIN :-

1. admin can create, edit, update & delete products.
2. admin can create,edit,update & delete category.
3. admin can view all products list available.
4. admin can view all users.
5. admin can view all ordered products. 
6. admin can change the status of a product (processing, shipped, delivered, etc.)
7. admin can change the item stocks.


Deployed on: (No longer available due to heroku free dyno plan has deprecated)
https://ecommerce-ak.herokuapp.com/

watch the video :- [https://drive.google.com/file/d/1WiEttrA9N_WoBB0wSNOqW8Ve16m_OOaz/view?usp=sharing]
