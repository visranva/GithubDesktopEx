function add(par1, par2){
    return par1+par2
}

function sub(par1,par2){
    return par1-par2
}

function multiply(){
    return par1*par2
}

function divide(){
    return par1/par2
}

modules.export.add = add
modules.export.sub = sub
modules.export.multiply = multiply
modules.export.divide = divide