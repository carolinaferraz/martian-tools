## tables for store:
#### users
> user_id (primary key)  
> user_role(varchar 20 unique)  
> user_email (varchar 50 unique)  
> user_fname (varchar 30 not null)  
> user_midinnitial (varchar 5 not null)  
> user_lname (varchar 30 not null)  
> user_street (varchar 20 not null)  
> user_zip (number)  
> user_city (varchar 30)  
> user_state (varchar 10)  
> user_username(varchar 15 unique not null)  
> user_password (varchar 20)  

#### group
> group_id (primary key, auto_increment)  
> group_name  
> user_id (foreign key)  


#### group_contents (many to many)
> group_id (foreign key)  
> product_id (foreign key)  

#### products
> product_id (primary key, auto_increment)  
> product_name  
> category_id (foreign key)  
> product_price  
> product_quantity  
> user_id (vendor)  
> product_url  

#### categories
> category_id (primary key)  
> category_name  

#### comments
> comment_id (primary key)  
> product_id (foreign key)  
> user_id (foreign key)  
> comment  

#### qa
> qa_id (primary key)  
> product_id (foreign key)  
> user_id (foreign key)  
> qa_question  
> qa_answer  