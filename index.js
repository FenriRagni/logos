const inquirer = require("inquirer");
const fs = require("fs");
const Triangle = require("./lib/triangle");
const Circle = require("./lib/circle");
const Square = require("./lib/square");

function getTitle(){
    return inquirer
    .prompt([
        {
            message: "Please enter 3 characters: ",
            name: "text"
        },
    ])
    .then(({text}) => {
        if(text.length > 3){
            console.log("Please only enter 3 characters");
            getTitle();
        }
        else{
            const words = `${text}`;
            inquirer
                .prompt([
                    {
                        message: "Choose a text color:",
                        name: "textColor"
                    },
                    {
                        type: "list",
                        message: "Choose a shape:",
                        name: "shapeChoice",
                        choices: ["Circle", "Triangle", "Square"]
                    }
                    ,
                    {
                        message: "Choose a shape color:",
                        name: "shapeColor"
                    }
                ])
                .then((answers) => {
                    let shape;
                    switch(answers.shapeChoice) {
                        case "Circle": shape = new Circle(answers.shapeColor, words, answers.textColor);
                            break;
                        case "Triangle": shape = new Triangle(answers.shapeColor, words, answers.textColor);
                            break;
                        case "Square": shape = new Square(answers.shapeColor, words, answers.textColor);
                            break;
                        default: shape = new Square();
                            break;
                    }
                    fs.writeFile("./example/logo.svg",
                     `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\t${shape.render()}\n\t${shape.renderInnerHtml()}\n</svg>`, (err) => {
                        if(err){
                            return "an error has occured";
                        }
                        else{
                            console.log("logo has been created");
                        }
                     });
                })
        }
    })
}

getTitle();