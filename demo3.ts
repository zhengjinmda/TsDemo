/**
 * 1. 函数定义
 */
function add(count: number): number {
    return count
}
console.log(add(4))

/**
 * 可选参数
 */
function add1(count1: number, count2?: number): number{
    return count2 !== undefined ? count1 + count2 : count1
}
console.log(add1(4))
console.log(add1(4, 6))

/**
 * 默认参数
 */
function add2(count1: number, count2: number = 6): number {
    return count1 + count2
}
console.log(add2(4))
console.log(add2(4, 7))

/**
 * 剩余参数
 */
function add3(...counts: number[]): number {
    let sum: number = 0
    counts.forEach(item => {
        sum += item
    })
    return sum
}
console.log(add3(1, 2, 3, 4, 5, 6, 7, 8, 9 ,10))

/**
 * 三种声明方法
 */
// 1.基础
function add4(count:number):number {
    return count
}
// 2.函数表达式
const add5 = function(count:number):number {
    return count
}
// 3.箭头函数
const add6 = (count:number):number => {
    return count
}