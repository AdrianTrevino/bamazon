const mysql = require('mysql');
const prompt = require('prompt');
const colors = require('colors/safe');
const Table = require('cli-table');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'Bamazon', 
});

const productPurchased = [];

connection.connect();

// connection to mysql to dispaly products and info
connection.query('SELECT ItemID, ProductName, Price FROM Products', function(err, result){
	if(err) console.log(err);

	//all info into a table. This is the npm table default
	const table = new Table({
		head: ['Item Id#', 'Product Name', 'Price'],
		style: {
			head: ['green'],
			compact: false,
			colAligns: ['center'],
		}
	});

	//loops through items to show each item in table
	for(var i = 0; i < result.length; i++){
		table.push(
			[result[i].ItemID, result[i].ProductName, result[i].Price]
		);
	}
	console.log(table.toString());

	purchase();
});

//logic for purchase function so user can purchase
const purchase = function(){

	//creates the questions that will be prompted to the user
	const productInfo = {
		properties: {
			itemID:{description: colors.green('ID # of the item you would like to buy')},
			Quantity:{description: colors.red('How many of that item would you like to buy?')}
		},
	};

	prompt.start();

	//responses to prompts and questiosn asked
	prompt.get(productInfo, function(err, res){

		//variable to hold customer purchases responses
		const customerPurchase = {
			itemID: res.itemID,
			Quantity: res.Quantity
		};
		
		//pushing that variable to array
		productPurchased.push(customerPurchase);

		//displaying the item from SQL database
		connection.query('SELECT * FROM Products WHERE ItemID=?', productPurchased[0].itemID, function(err, res){
				if(err) console.log(err, 'That item ID doesn\'t exist');
				
				//alerting user if out of stock
				if(res[0].StockQuantity < productPurchased[0].Quantity){
					console.log('That product is out of stock!');
					connection.end();

				//displaying amount if item is available for purchase
				} else if(res[0].StockQuantity >= productPurchased[0].Quantity){

					console.log('');

					console.log(productPurchased[0].Quantity + ' items purchased');

					console.log(res[0].ProductName + ' ' + res[0].Price);

					//variable holding the amount user is paying
					const saleTotal = res[0].Price * productPurchased[0].Quantity;

					console.log('Total: ' + saleTotal);

					//new stock update
					newQuantity = res[0].StockQuantity - productPurchased[0].Quantity;
			
					// updating the data base with new quantity
					connection.query("UPDATE Products SET StockQuantity = " + newQuantity +" WHERE ItemID = " + productPurchased[0].itemID, function(err, res){
						
						console.log('');
						console.log(colors.yellow('Your order has been processed.  Thank you for shopping with us!'));
						console.log('');

						connection.end();
					})

				};

		})
	})

};