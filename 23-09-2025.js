const arr=['apple','babana','mango','kiwi']
arr.sort()
console.log(arr)
arr.reverse()
console.log(arr)

console.log(arr.toSorted())

const point=[10,20,11,23,12,100]
console.log(point.sort(function(a,b){return a-b}))

console.log(Math.min.apply(null,point))
console.log(Math.max.apply(null,point))
function min (point) {
  let len = point.length;
  let min = Infinity;
  while (len--) {
    if (point[len] < min) {
      min = point[len];
    }
  }
  return min;
}
console.log(min(point))

point.forEach(function(item,index){
    console.log('value:',item,"index:",index)
})

const point2=point.map((x)=>[x*2])
console.log(point2) // it as nested array

const filter=point.filter((x)=>x>50)
console.log(filter)

const reduce=point.reduce((acc,x)=>acc+x)
console.log(reduce)
const point3=point.flatMap((x)=>[x*2])
console.log(point3) // it is not nested array

const every=point.every((x)=>x>9)
console.log(every)

  const some=point.some((x)=>x>40)
console.log(some)

let text='kishor'
console.log(Array.from(text))

let key=point.keys()
for (let x of key){
    console.log(x)
}
let entry=point.entries()
for (let x of entry){
    console.log(x)
}

const checkelement=point.with(1,50)
console.log(checkelement)

console.log(...point)
console.log(Math.max(...point))

let a,rest;
[a,...rest]=point
console.log(a)
console.log(rest)


var myarr = new Int8Array(5)
myarr[0] = 50
myarr[1] = 50
myarr[2] = 50
myarr[3] = 50

console.log(myarr)

const arr8 = new Int8Array(3)  
const arr16 = new Int16Array(3) 
const arr32 = new Int32Array(3) 

console.log(arr8.byteLength)  
console.log(arr16.byteLength)
console.log(arr32.byteLength) 
