const inquirer = require("inquirer");
const fs = require("fs");
const Triangle = require("./lib/triangle");
const Circle = require("./lib/circle");
const Square = require("./lib/square");
const { get } = require("http");

function getTitle(){
    return inquirer
    .prompt([
        {
            message: "Please enter 3 characters: ",
            name: "text"
        },
    ])
    .then(({text}) => {
        console.log(text);
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
                        case "Circle": shape = new Circle(answers.shapeColor, words, answers.shapeColor);
                            break;
                        case "Triangle": shape = new Triangle();
                            break;
                        case "Square": shape = new Square();
                            break;
                        default: shape = new Square();
                            break;
                    }

                })
        }
    })
}

getTitle();