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


Screenshots of the Website :- 

![Screenshot (191)](https://github.com/KaranSingh2002/Byte/assets/140897203/adb99ed3-e305-4ef8-9973-d149bfeeb127)
![Screenshot (192)](https://github.com/KaranSingh2002/Byte/assets/140897203/cbe35782-2b15-43a3-a76d-cab03f8c9ca4)
![Screenshot (193)](https://github.com/KaranSingh2002/Byte/assets/140897203/3dc29acb-1ee8-46e6-a08b-365970cb020d)
![Screenshot (194)](https://github.com/KaranSingh2002/Byte/assets/140897203/acf427b8-8d1d-47a2-aa0b-ca8e41e8f710)
![Screenshot (195)](https://github.com/KaranSingh2002/Byte/assets/140897203/786a172a-a297-49d2-a4dd-c76332b9ecff)
![Screenshot (196)](https://github.com/KaranSingh2002/Byte/assets/140897203/ea0a6107-e7c4-4fab-ab0c-6baa92d4674f)
![Screenshot (197)](https://github.com/KaranSingh2002/Byte/assets/140897203/83d96683-2d2d-4900-8e1b-c361c3e39068)
![Screenshot (198)](https://github.com/KaranSingh2002/Byte/assets/140897203/879ced82-6257-44fd-a505-87170601e247)
![Screenshot (199)](https://github.com/KaranSingh2002/Byte/assets/140897203/cefd7a2a-2e08-4602-b022-d8340fe6606b)
![Screenshot (201)](https://github.com/KaranSingh2002/Byte/assets/140897203/cd894b2a-2658-411b-a90e-f5afc050c2a0)
![Screenshot (202)](https://github.com/KaranSingh2002/Byte/assets/140897203/c317444c-8357-4e4f-80e8-24add9c4ddb6)
![Screenshot (203)](https://github.com/KaranSingh2002/Byte/assets/140897203/0e9f3fb5-184e-4439-83a2-f1f36a9daa91)
![Screenshot (204)](https://github.com/KaranSingh2002/Byte/assets/140897203/60f97aeb-c4fc-4ac5-8c4d-b2cbc01ba38c)
![Screenshot (205)](https://github.com/KaranSingh2002/Byte/assets/140897203/957b31f0-138f-4653-862d-1127adc2d1de)
![Screenshot (206)](https://github.com/KaranSingh2002/Byte/assets/140897203/632e8ac2-0b15-4bd2-aa49-125f8fd09bde)


watch the video :- [https://drive.google.com/file/d/1WiEttrA9N_WoBB0wSNOqW8Ve16m_OOaz/view?usp=sharing]
