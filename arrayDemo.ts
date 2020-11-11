/**
 * 数组类型
 */
// 一般数组类型定义
let numberArr = [1, 2 , 3] //类型推断
let numberArr2: number[] = [1, 2, 3]
let numberArr3: Array<number> = [1, 2, 3]
let Arr: (number | string)[] = [1, '1']
let Arr2: undefined[] = [undefined, undefined]

//数组中对象类型定义
let arr3: {name: string, somatosensory: string}[] = [
    {name: 'winter', somatosensory: 'cool'},
    {name: 'summer', somatosensory: 'hot'}
]
// 类型别名 type
type season1 = {
    name: string,
    somatosensory: string,
}
let arr4: season1[] = [
    {name: 'spring', somatosensory: 'comfort'},
    {name: 'autumn', somatosensory: 'dry'}
]
// class 类
class season2 {
    'name': string;
    'somatosensory': string;
}
let arr5: season2[] = [
    {name: 'spring', somatosensory: 'comfort'},
    {name: 'autumn', somatosensory: 'dry'}
]
