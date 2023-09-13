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
    }
}