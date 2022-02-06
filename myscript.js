// változók
// AlapKiadások: kE1-6

// További kiadésok : NÉV: CkN1    ÉRTÉK: CkE1 


// funkció v


function kuldes(form) {
            
    let alapOsszeg = Number(form.hKereset.value);
    let kE1 = Number(form.kE1.value);
    let kE2 = Number(form.kE2.value);
    let kE3 = Number(form.kE3.value);
    let kE4 = Number(form.kE4.value);
    let kE5 = Number(form.kE5.value);
    
    
    let CkN1 = form.CkN1.value;
    let CkN2 = form.CkN2.value;
    let CkN3 = form.CkN3.value;
    let CkN4 = form.CkN4.value;
    let CkN5 = form.CkN5.value;
    let CkN6 = form.CkN6.value;

    let CkE1 = Number(form.CkE1.value);
    let CkE2 = Number(form.CkE2.value);
    let CkE3 = Number(form.CkE3.value);
    let CkE4 = Number(form.CkE4.value);
    let CkE5 = Number(form.CkE5.value);
    let CkE6 = Number(form.CkE6.value);
    
    let Trezsi = kE1+kE2+kE3+kE4+kE5;
    let Hkiadas = CkE1+CkE2+CkE3+CkE4+CkE5+CkE6;
    let Tkiadas = Trezsi+Hkiadas;
    let sporolt = alapOsszeg-Tkiadas;
    


    // LISTA KIIRATÁSA
    document.getElementById("list1").innerHTML = '<li>'+ CkN1 +'</li>';
    document.getElementById("list2").innerHTML = '<li>'+ CkN2 +'</li>';
    document.getElementById("list3").innerHTML = '<li>'+ CkN3 +'</li>';
    document.getElementById("list4").innerHTML = '<li>'+ CkN4 +'</li>';
    document.getElementById("list5").innerHTML = '<li>'+ CkN5 +'</li>';
    document.getElementById("list6").innerHTML = '<li>'+ CkN6 +'</li>';
    document.getElementById("list11").innerHTML = '<li>'+'-'+ CkE1 +' Ft'+'</li>';
    document.getElementById("list22").innerHTML = '<li>'+'-'+ CkE2 +' Ft'+'</li>';
    document.getElementById("list33").innerHTML = '<li>'+'-'+ CkE3 +' Ft'+'</li>';
    document.getElementById("list44").innerHTML = '<li>'+'-'+ CkE4 +' Ft'+'</li>';
    document.getElementById("list55").innerHTML = '<li>'+'-'+ CkE5 +' Ft'+'</li>';
    document.getElementById("list66").innerHTML = '<li>'+'-'+ CkE6 +' Ft'+'</li>';
    
    //REZSIOSSZEGE:
    document.getElementById("Trezsi").innerHTML = Trezsi + 'Ft';
    // OSSZKIADAS:
    document.getElementById("Tkiadas").innerHTML = '- '+Tkiadas + 'Ft';
    // MARADEK ÖSSZEG:
    document.getElementById("sporolt").innerHTML = '+ '+sporolt + 'Ft';

    
}