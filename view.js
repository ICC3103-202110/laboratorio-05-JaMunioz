const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.yellow( //color
        figlet.textSync(
            'Hello there', //mesage
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {mount} = model
    const {tip_in_percent} = model
    const {tip} = model
    const {total} = model
    return [
        {"Bill Amount": mount,"Tip (%)": tip_in_percent,"Tip": tip,
        "Total": total}, //table
    ]
}

function inputForm(model){
    const {input} = model
    const {input2} = model
    return inquirer.prompt([
        {
            name: 'input',
            type: 'number',
            message: 'Bill Amount?',
            default: input2,
            validate: function(value){
                if(value >= 0){
                    return true
                } else {
                    return 'Enter a integer greater or equal than 0 '
                }
            }
        },
        {
            name: 'input2',
            type: 'number',
            message: 'Tip %?',
            default: input,
            validate: function(value){
                if(value >= 0){
                    return true
                } else {
                    return 'Enter a integer greater or equal than 0 '
                }
            }
        },
    ])
}

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm
}