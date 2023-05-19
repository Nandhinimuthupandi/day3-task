1. compare two JSON objects that has same property without order:

let obj1 = {name: "person1", age:5};
let obj2 = {age: 5,name:"person1"};

function comparingObjects(obj1, obj2){
    const keys1= Object.keys(obj1).sort(); 
    const keys2 = Object.keys(obj2).sort();
 
    const output1 = JSON.stringify(keys1); 
    const output2 = JSON.stringify(keys2);

    if(output1 == output2){
        for(var key in obj1){
            if(obj1[key] != obj2[key]){ 
                return 'Not Equal'
            }
        }
        return 'Equal'
    }else{
        return 'Not Equal'
    }
}
 
const result = comparingObjects(obj1, obj2);
 
console.log(result);



2.API request for printing flags

function myFunc(){
            var xmlHTTP = new XMLHttpRequest();
            xmlHTTP.open('GET', 'https://restcountries.com/v3.1/all', true); 
            xmlHTTP.send(); 

            
            xmlHTTP.onreadystatechange = function(){
                var output = xmlHTTP.responseText; 
                var result = JSON.parse( xmlHTTP.responseText);
                result.forEach((user)=>{
                    console.log(user.flags);
                })
                

            }
        }

         myFunc();


3.API request for printing all country names,region,subregion and population

function myFunc(){
            var xmlHTTP = new XMLHttpRequest();
            xmlHTTP.open('GET', 'https://restcountries.com/v3.1/all', true); 
            xmlHTTP.send(); 

            
            xmlHTTP.onreadystatechange = function(){
                var output = xmlHTTP.responseText; 
                var result = JSON.parse( xmlHTTP.responseText);
                result.forEach((arr)=>{
                    console.log(arr.name.common);
                    console.log(arr.region);
                    console.log(arr.subregion)
                    console.log(arr.population)
                })
                

            }
        }

         myFunc();
