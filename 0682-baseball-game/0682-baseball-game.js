/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = [];

    for (let op of operations) {
        if (op === "+") {
            let last = stack[stack.length - 1];
            let secondLast = stack[stack.length - 2];
            stack.push(last + secondLast);
        } 
        else if (op === "D") {
            stack.push(stack[stack.length - 1] * 2);
        } 
        else if (op === "C") {
            stack.pop();
        } 
        else {
            stack.push(parseInt(op));
        }
    }

    return stack.reduce((sum, num) => sum + num, 0);
};