//HasOddNUmber

let numArr = [1,2,3,4,5,6,7,8,9,10];

function hasOddNumber(arr){
    return arr.some((num)=>{
        return num % 2 !== 0
    })
}
//console.log(hasOddNumber(numArr))


//hasAZero
let num = 120412
function hasAZero(number){
    let numstr = String(number)
    let numarr = numstr.split('')
    console.log(numarr)
    return numarr.some((num)=>{
        return num == 0;
    })
}
//console.log(hasAZero(num))


//hasOnlyOddNumbers
let oddArr = [1,3,5,7,9]
function hasOnlyOddNumbers(arr){
    return arr.every((num)=>{
       return num % 2 !== 0;
    })
}

//console.log(hasOnlyOddNumbers(oddArr))

//hasNoDuplicates

function hasNoDuplicates(arr){
   return arr.every((num)=>{
        return arr.indexOf(num) === arr.lastIndexOf(num);
    })
}
//console.log(hasNoDuplicates(numArr));

//hasCertainKey
let objArr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

  function hasCertainKey(obj, key){
      return obj.every((person)=>{
            return person[key]
      })

  }

  //console.log(hasCertainKey(objArr, 'isCatOwner'))

  //hasCertainValue

  function hasCertainValue(obj, key, value){
     return obj.every((person)=>{
         return person[key] === value;
      })

  }

  //console.log(hasCertainValue(objArr, 'title', 'Instructor'))
