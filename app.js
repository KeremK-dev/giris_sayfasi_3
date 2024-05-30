let ust = document.getElementById("üst")
let alt = document.getElementById("alt")

ust.style.height="90%"
alt.style.height="10%"

let kayit = document.getElementById("kayit")
let giris = document.getElementById("giris")

kayit.style.display="none"
giris.style.display="flex"

let kayit_alan=document.getElementById("kayit_alan")
let giris_alan=document.getElementById("giris_alan")

kayit_alan.style.display="flex"
giris_alan.style.display="none"

giris.onclick=()=>{
    kayit.style.display="flex"

    ust.style.height="10%"
    alt.style.height="90%"

    kayit_alan.style.display="none"
    giris_alan.style.display="flex"
    giris.style.display="none"
}
kayit.onclick=()=>{
    kayit.style.display="none"

    ust.style.height="90%"
    alt.style.height="10%"
    
    kayit_alan.style.display="flex"
    giris_alan.style.display="none"
    giris.style.display="flex"
}