console.log("let's start with javascript");

let batch=[1,41,2,3,4,3,4,32,2];

let uniqueBatch=[...new Set(batch)];

// uniqueBatch.add(1);
// uniqueBatch.add(2);
// uniqueBatch.add(4);
// uniqueBatch.add(3);


// console.log(uniqueBatch.size)
console.log(uniqueBatch)

let num=2.34333323;

console.log(num.toFixed(2))

let arr=[
    {
        id:1,
        name:"milk",

    },
    {
        id:2,
        name:"bred",
    },
    {
        id:3,
        name:"sugar"
    }
];


console.log("kalam",arr);

let btn=document.querySelector("#btn");
let id=2;
btn.addEventListener("click", function(id){


  let index=  arr.findIndex((value)=>value.id==2);
  console.log(arr)

  arr.splice((index,2))
  console.log(arr)
})
