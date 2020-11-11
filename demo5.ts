/**
 * 类型注释 类型推断
 */
// 类型注释
let count2:number;
count2 = 3;

//类型推断
let count3 = 123;
let count4 = 213;
let count5 = count3 + count4;

/**
 * 函数参数和返回类型定义
 */
// 函数无返回值
let func1 = function():void {
    console.log('hello world');
}
func1()
// never 返回值
// let func2 = function(): never {
//     throw new Error();
//     console.log('hello world');
// }
// func2()
// 函数对象为解构时
let func3 = function({one, tow}: {one: number, tow: number}):number {
    return one + tow
}
console.log(func3({one: 12, tow: 18}))
let func4 = function({one}: {one: string}):void {
    console.log(one)
}
func4({one: 'one'})