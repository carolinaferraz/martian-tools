// Typescript uses classes, which makes it unlike JS.
export class Product{
category_id: number;
  user_id: number;
  product_url: string;
  product_id: number;
  product_description: string;
  product_price: number;
  product_quantity: number;
  product_name: string;


constructor (product_id: number,
  product_name: string,
  product_description: string,
  product_price: number,
  product_quantity: number,
  product_url: string,
  user_id: number,
  category_id: number) {

  this.product_id = product_id;
  this.product_name= product_name;
  this.product_description= product_description;
  this.product_price=product_price;
  this.product_quantity= product_quantity;
  this.product_url=product_url;
  this.user_id= user_id;
  this.category_id= category_id;
  }

  getId():number{
    return this.product_id;
}

  getName():string {
    return this.product_name;
  }

  getDescrption():string {
    return this.product_description;
  }
  getPrice():number {
    return this.product_price;
  }

  getQuantity():number {
    return this.product_quantity;
  }

  getUrl():string {
    return this.product_url;
  }

  getUserId():number {
    return this.user_id;
  }

  getCatId(): number {
    return this.category_id;
  }

}
