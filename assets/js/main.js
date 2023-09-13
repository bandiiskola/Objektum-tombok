var lista=[];

function TagokFelvitele()
{
    if (document.getElementById("osztalynev").value==""||document.getElementById("osztalyfonoknev").value=="")
    {
        alert("Töltsd ki az adatokat!")
    }

    else
    {
        var obj={
            osztalynev: document.getElementById("osztalynev").value,
            osztalyfonoknev: document.getElementById("osztalyfonoknev").value,
            tagok: []
        }
        lista.push(obj)
        document.getElementById("diaknev").value=""
        document.getElementById("diaklakohely").value=""
        document.getElementById("osztalyfelvitel").style.display="none"
        document.getElementById("tagfelvitel").style.display="block"
        document.getElementById("diaknev").focus()
    }
}

function Mentes()
{
    if (document.getElementById("diaknev").value==""||document.getElementById("diaklakohely").value=="")
    {
        alert("Töltsd ki az adatokat!")
    }

    else
    {
        var obj={
            diaknev: document.getElementById("diaknev").value,
            diaklakohely: document.getElementById("diaklakohely").value,
        }
        lista[lista.length-1].tagok.push(obj)
        document.getElementById("diaknev").value=""
        document.getElementById("diaklakohely").value=""
        document.getElementById("diaknev").focus()
    }
}

function Kilep()
{
    document.getElementById("osztalynev").value=""
    document.getElementById("osztalyfonoknev").value=""
    document.getElementById("osztalyfelvitel").style.display="block"
    document.getElementById("tagfelvitel").style.display="none"
    document.getElementById("osztalynev").focus()
}