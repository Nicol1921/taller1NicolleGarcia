let btncal=document.getElementById("btncal")
btncal.addEventListener("click",function Calcular(e){
    e.preventDefault()
    let gra=parseFloat(document.getElementById("gra").value)
    let op1=parseInt(document.getElementById("op1").value)
    let op2=parseInt(document.getElementById("op2").value)

    if(op1==1 && op2==2){
        let res=parseFloat(((gra -32)* 5)/9) 
        alert(`La conversion de Fahrenheit a Celsius es ${res}`)
    }
    else if(op1==1 && op2==3){
        let res=parseFloat(((gra - 32)*0.55)+273.15)
        alert(`La conversion de Fahrenheit a Kelvin es ${res}`)
    }
    else if(op1==2 && op2==1){
        let res=parseFloat((gra*1.8)+32)
        alert(`La conversion de Celsius a Fahrenheit es ${res}`)
    }
    else if(op1==2 && op2==3){
        let res=parseFloat(gra+273.15)
        alert(`La conversion de Celsius a Kelvin es ${res}`)
    }
    else if(op1==3 && op2==1){
        let res=parseFloat(((gra-273.15)* 1.8) + 32)
        alert(`La conversion de Kelvin a Fahrenheint es ${res}`)
    }
    else if(op1==3 && op2==2){
        let res=parseFloat(gra-273.15)
        alert(`La conversion de Kelvin a Celsius es ${res}`)
    }
    else{
        alert(`Estas convirtiendo a los mismos grados`)
    }
})
