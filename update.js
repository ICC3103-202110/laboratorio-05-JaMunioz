function increase(number,mount){
    return number + mount
}

function update(input,input2, model){
    const {mount} = model
    const newMount = increase(mount,input)
    const setTip = increase(mount,input)
    return {
        ...model,
        input2: input2,
        input: input,
        mount: newMount,
        tip_in_percent: input2,
        tip: setTip,
        total: 1234,
    }
}

module.exports = {
    update
}