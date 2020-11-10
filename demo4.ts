/**
 * 静态类型和对象类型
 */
// 自定义静态类型
interface season {
    name: string,
    somatosensory: string
}

const summer: season = {
    name: '夏天',
    somatosensory: 'hot'
}
console.log(summer.name)
console.log('===================================')
// 对象类型
const spring : {
    name: string,
    somatosensory: string
} = {
    name: '春天',
    somatosensory: 'comfortable'
}
console.log(spring.somatosensory)
console.log('===================================')
const strArr: string[] = ['1', '2', '3']
const strArr1: Array<string> = ['1', '2', '3']
console.log(strArr)
console.log(strArr1)
