function calculate() {
    var gpa1 = document.getElementById("gpa1").value;
    var gpa2 = document.getElementById("gpa2").value;
    var gpa3 = document.getElementById("gpa3").value;
    var gpa4 = document.getElementById("gpa4").value;
    var gpa5 = document.getElementById("gpa5").value;
    var gpa6 = document.getElementById("gpa6").value;
    var gpa7 = document.getElementById("gpa7").value;
    var gpa8 = document.getElementById("gpa8").value;
    var cred1 = document.getElementById("cred1").value;
    cred1 = Number(cred1);
    var cred2 = document.getElementById("cred2").value;
    cred2 = Number(cred2);
    var cred3 = document.getElementById("cred3").value;
    cred3 = Number(cred3);
    var cred4 = document.getElementById("cred4").value;
    cred4 = Number(cred4);
    var cred5 = document.getElementById("cred5").value;
    cred5 = Number(cred5);
    var cred6 = document.getElementById("cred6").value;
    cred6 = Number(cred6);
    var cred7 = document.getElementById("cred7").value;
    cred7 = Number(cred7);
    var cred8 = document.getElementById("cred8").value;
    cred8 = Number(cred8);

    var result = (gpa1*cred1 + gpa2*cred2 + gpa3*cred3 + gpa4*cred4 + gpa5*cred5 + gpa6*cred6 + gpa7*cred7 + gpa8*cred8)/(cred1+cred2+cred3+cred4+cred5+cred6+cred7+cred8);
    result = result.toFixed(3);
    if(gpa1>10 || gpa2>10 || gpa3>10 || gpa4>10 || gpa5>10 || gpa6>10 || gpa7>10 || gpa8>10
        || gpa1<0 || gpa2<0 || gpa3<0 || gpa4<0 || gpa5<0 || gpa6<0 || gpa7<0 || gpa8<0
        || cred1<0 || cred2<0 || cred3<0 || cred4<0 || cred5<0 || cred6<0 || cred7<0 || cred8<0
        || (cred1<=0 && cred2<=0 && cred3<=0 && cred4<=0 && cred5<=0 && cred6<=0 && cred7<=0 && cred8<=0))
        document.getElementById("result").innerHTML= "Enter proper values and calculate";
    else
        document.getElementById("result").innerHTML= "Your CGPA is "+result;

}

var count = 0;
element = document.body;

function swapmode() {
    count++;
    if(count%9==1)
        element.classList.toggle("black");
    else if(count%9==2) {
        element.classList.toggle("black");
        element.classList.toggle("yellow");
    }
    else if(count%9==3) {
        element.classList.toggle("yellow");
        element.classList.toggle("green");
    }
    else if(count%9==4) {
        element.classList.toggle("green");
        element.classList.toggle("blue");
    }
    else if(count%9==5) {
        element.classList.toggle("blue");
        element.classList.toggle("white");
    }
    else if(count%9==6) {
        element.classList.toggle("white");
        element.classList.toggle("purple");
    }
    else if(count%9==7) {
        element.classList.toggle("purple");
        element.classList.toggle("brown");
    }
    else if(count%9==8) {
        element.classList.toggle("brown");
        element.classList.toggle("lightblue");
    }
    else
        element.classList.toggle("lightblue");
    }