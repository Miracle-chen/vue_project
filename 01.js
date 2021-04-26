// let arr = [
//     {
//         id: 1, 
//         children: [
//             {
//                 id: 2, 
//                 children: null
//             },
//             {
//                 id: 3,
//                 children: [
//                     {
//                         id: 4,
//                         children: [
//                             {
//                                 id: 5
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         id: 6, 
//         children: [
//             {
//                 id: 8, 
//                 children: null
//             },
//             {
//                 id: 7,
//                 children: [
//                     {
//                         id: 9,
//                         children: null
//                     }
//                 ]
//             }
//         ]
//     }
// ];

// let ids = [];

// function idCounter(list){
//     list.map( item => {
//         if( item.id ){
//             ids.push( item.id );
//         };
//         if( item.children ){
//             idCounter(item.children);
//         }
//     })
// };

// idCounter(arr);

// console.log( ids );

// //深度克隆
// function deepClone(obj){
//     if( typeof(obj) !== 'object' || obj === null){
//         return obj;
//     };
//     // let target = 
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             const element = obj[key];
            
//         }
//     }
// }


// 设置浏览器缓存与不缓存
<meta http-equiv="Cache" content="no-cache" ></meta>
<meta http-equiv="Expires" content="0" ></meta>
<meta http-equiv="Cache-Control" content="no-cache" ></meta>



// lazyman



// 数字化为千分位

let num = '1234567890';

function numFormat () {
    let a = (num + '').split('').reverse().map( (item, index) => (index + 1) % 3 === 0 ? (',' + item) : item  ).reverse().join('');
    return a ;
}

// let reg = `/\d{1-3}(?=(\d{3}+$))/g`;
let str = num.replace( /\d{1,3}(?=(\d{3})+$)/g, item => item + ',');

console.log( str );

console.log( numFormat() );





