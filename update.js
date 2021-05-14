function setTipp(amount,tip){
    return (amount /tip)
}
function setTotall(amount,tip){
    return amount+(amount /tip)
}

function update(input1,input2,model){
    const setTip = setTipp(input1,input2)
    const setTotal = setTotall(input1,input2)
    return {
        ...model,
        input1: input1,
        input2: input2,
        mount: '$'+input1,
        tip_in_percent: input2+'%',
        tip: '$'+setTip,
        total: '$'+setTotal,
    }
}

module.exports = {
    update
}