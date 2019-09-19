//require and install mysql and inquirer packages
const mysql = require("mysql");
const inquirer = require("inquirer");

//connect to mysql database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

//selecting the table in the database
connection.connect(error => {
    if (error) throw error;
    connection.query("SELECT * FROM products", function (error, result) {
        if (error) throw error;

        //shows the items in stock in our command line
        console.table(result);

        //app starts
        app(result);
    })
});

//asks initial questions
const app = (data) => {

    //array of inquirer questions
    const idQuestion = [
        {
            type: 'input',
            name: 'id',
            message: "What's the products id?"
        },
        {
            type: 'input',
            name: 'amount',
            message: "How many would you like to buy?"
        }
    ];
    //displays users answer in command line
    inquirer
        .prompt(idQuestion)
        .then(answer => {
            console.log(answer.id);
            checkProduct(data, parseInt(answer.id), parseInt(answer.amount));
        });
};


function checkProduct(data, id, amount) {
    console.log("Checking our database now...");
    for (let i = 0; i < data.length; i++) {
        if (id === data[i].item_id) {
            if (data[i].stock_quantity >= amount) {
                const newQuantity = data[i].stock_quantity - amount;
                connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [newQuantity, id], (err, res) => {
                    if (err) throw err
                    console.log("Auto bots roll out");
                    connection.query("SELECT * FROM products", function (error, result) {
                        if (error) throw error;

                        //shows the items in stock in our command line
                        console.table(result);

                        inquirer
                            .prompt(
                                {
                                    type: 'confirm',
                                    name: 'continue',
                                    message: "Do you want to continue shopping?"
                                }
                            )
                            .then(answer => {
                                console.log(answer.continue)
                                answer.continue ? app(result) : connection.end();
                            });
                    });

                });
            }
            else {
                console.log("Insufficient amount");
                app(data);
            }
        }
    }
}
