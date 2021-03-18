//java scrip sheet for the first file of the POO  
  //ex1 
        alert('hello javascript');

        //2a  
        let adimn , name
        name  = 'john'
        admin = name
        alert(admin)

        //ex2b
        let planet_name = 'terra'
        let current_vister 
        
        //ex3a and 3b
        const birthday = '18 .04.1982 ';// capetalized the name variables 
        /*const age = someCode(birthday)  //no*/

        //ex4a
        name = "Ilya";
        console.log(`hello ${1}`); // ? hello 1 
        console.log(`hello ${"name"}`); // ? hello name 
        console.log(`hello ${name}`); // ? hello Ilya

        //ex5a
        "" + 1 + 0 // 10  "" ~» will tranfor the numbrs in strings 
        "" - 1 + 0 // -10   """"""""""""""""""
        true + false // true false ?( 10 »that are the value in logic)
        6 / "3" // 2 (the string is transform in number )
        "2" * "3" // 6 
        4 + 5 + "px" // 9px
        "$" + 4 + 5  // $45
        "4" - 2 //
        "4px" - 2 // NaN
        7 / 0//
        " -9 " + 5//
        " -9 " - 5// 
        null + 1// 1
        undefined + 1//NaN

        //6a
        let a= 1 , b=1;
        let c = ++a; // 2
        let d = b++; // 1
        
        //6b
         a = 2;
        let x = 1 +(a*=2)// a and x are numbers  and x is equal to 5 

        //7a
        let name_user = prompt("name that ou wont to use")
        alert(`*${name_user}*`)

        //8a 
        5 > 4 
        "apple" > "pineapple"
        "2" > "12"
        undefined == null
        undefined === null
        null == "\n0\n"
        null === +"\n0\n"