Mot_cacher=["MALIK","ITEEM",'GARWI','SALIF','TERRE','RAFIK','ISLAM','FRERE',
    "AIMER", "UTILE", "CHANT", "DONNE", "ENTRE", "FLORE", "GRAND", "HEROS", "IMAGE", "JOUER",
    "KOALA", "LIVRE", "MONDE", "NUAGE", "OEILS", "PARIS", "QUAND", "RIVES", "SABLE", "TABLE",
    "UNION", "VIVRE", "WAGON", "XENON", "YACHT", "ZEBRE", "ABIME", "BAINE", "CALME", "DELTA",
    "ECLAT", "FICHE", "GENRE", "HOTEL", "ILETS", "JUIFS", "KARMA", "LIGNE", "MAGIE", "NAIFS",
    "OCEAN", "PRISE", "QUETE", "RAINE", "SOMME", "TIGRE", "VOILE", "WHISK", "XYLOL", "YEUSE",
    "ZONES", "ACTIF", "BANAL", "CACHE", "DURCI", "ELANS", "FORCE", "GOUET", "HUMUS", "INUIT",
    "JANTE", "KAYAK", "LEGER", "METAL", "NEIGE", "OPALE", "PAIRE", "QUIET", "ROMAN", "SAUTE",
    "TIENS", "UNITE", "VASTE", "WEEDS", "YVRES", "ZORRO", "AVION", "BOITE", "COEUR", "DENSE",
    "EPOUX", "FABLE", "GALET", "HABIT", "ILEON", "JOLIE", "KIOSK", "LOUPE", "MOTIF", "NIDAS",
    "ONGLE", "PETIT", "QUOTA", "RANGE", "SOURD", "TOILE", "VITAL", "VITES", "WITHE", "ZINCS",
    "AILES", "BOUTE", "CRANE", "DOUCE", "ESPOI", "FUIES", "GEMME", "HURLE", "INDEX", "JURER"
            ]
    context=document.getElementById("context")
    var Aidez=0
    var deja=[]
    
    var Aide=document.getElementById("aide")
    Aide.innerText=`Aidez(Score-${Aidez+1})`
    var score_display=document.getElementById("score")
    var score=10
    score_display.innerText=`Score ${score}`
    var colors=['red','green','yellow']
    var essaies=0
    document.getElementById("ver").onclick=app
    var cache=[]
    var Mot=false
    function Le_Mot(){
        context.innerText="Deviner le mot cache"
        for(var i=1;i<6;i++){
            document.getElementById("n"+i).type="text"
        }
        Mot=true
        reprend()
        doc=document.getElementById("cache_mot")
        doc.innerText="Jouer au vecteur cache"
        doc.onclick=Le_Vecteur
    }
    function Le_Vecteur(){
        context.innerText="Devinez le vecteur cache"
        for(var i=1;i<6;i++){
            document.getElementById("n"+i).type="number"
        }
        Mot=false
        reprend()
        doc=document.getElementById("cache_mot")
        doc.innerText="Jouer au mot cache"
        doc.onclick=Le_Mot
    }
    function genere(){
        if(Mot==true){
            var x=Math.abs(Math.round((Math.random()*200)%119))
            cache=Mot_cacher[x]
        }
        else{
            for(var i=0;i<5;i++){
            var x=Math.abs(Math.round((Math.random()*10)%10-1))
            cache.push(x)
        }
        }
        
    }

   function verify(x,z){
    var y=document.getElementById(x)
    y.style.backgroundColor='white'
    if(Mot==true){
        var alpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
        "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        y.value=y.value.toUpperCase()
        if(alpha.indexOf(y.value)==-1)y.value=''
    }else{
        numer=["0","1","2","3","4","5","6","7","8","9"]
        
        if(numer.indexOf(String(y.value))==-1)y.value=''
    }
    if(y.value.length>1){
        y.value=y.value[1]
    }
    if(z>=1 && z<=5){
        document.getElementById("n"+z).focus()
    }
    
   }
   function reprend(){
    cache=[]
    deja=[]
    Aidez=0
    Aide.innerText=`Aidez(Score-${Aidez+1})`
    
    document.getElementById("ver").style.display='block'
    score=10
    essaies=0
    li=document.createElement("li")
    document.getElementById("resultat").innerHTML=""
    genere()
    score_display.innerText=`Score ${score}`
    for(var i=1;i<6;i++){
       var z= document.getElementById("n"+i)
       z.value=''
       z.style.backgroundColor='white'
    }
    document.getElementById("nb_aide").innerText=`Nombre d'aide:${Aidez}`
    Aide.style.display='block'
   }
   function app(){
   for(var i=1;i<6;i++){
    if(document.getElementById("n"+i).value.length<1){
        alert("Veuillez remplir toutes les cases")
        return
    }
   }
    var propoz=[]

    var resultat=[0,0,0,0,0]
    
    for(var i=1;i<6;i++){
        var y=document.getElementById("n"+i).value
        if(Mot==true){
            propoz.push(y.toUpperCase())
        }
        else{
            propoz.push(Number(y))

        }
    }
    for(var i=0;i<5;i++){
        for(var j=0;j<5;j++){
            if(cache[j]==propoz[i] && i!=j){
                resultat[i]=2
            }
        }
    }
    for(var i=0;i<5;i++){
        for(var j=0;j<5;j++){
            if(cache[j]==propoz[i] && i==j){
                resultat[i]=1
            }
        }
    }
    
    var li=document.createElement("h3")
    for(var i=0;i<5;i++){
        var element=document.createElement("strong")
        var dash=document.createElement("strong")
        dash.textContent='-'
        element.textContent=resultat[i]
        element.style.backgroundColor=colors[resultat[i]]
        li.appendChild(element)
        if(i<4){
            li.appendChild(dash)
        }

    }
    document.getElementById("resultat").appendChild(li)
    egal=true
    Mal=[]
    for(var i=0;i<5;i++){
        if(resultat[i]==2 || resultat[i]==0) {
            Mal.push(i+1)
            egal=false
        document.getElementById("n"+(i+1)).value=''}
        
    }
    if(Mal.length>0){
        document.getElementById("n"+Mal[0]).focus()

    }
    if(egal==true){
        alert(`Felicitations vous avez gagnez votre score est ${score} Vous avez bien deviner ${cache}`)
        Aide.style.display='none'
        document.getElementById("ver").style.display='none'
        return
    }
    if(essaies==4){
    //     if(egal==true){
    //     alert(`Felicitations vous avez gagnez votre score est ${score}`)
    //     Aide.style.display='none'
    //     document.getElementById("ver").style.display='none'
    //     return
    // }
        alert(`Veuillez rejouez vous avez perdu vous avez mal devinez ${cache}`)
        Aide.style.display='none'
        Aide.style.display='none'
        document.getElementById("ver").style.display='none'
        return
    }
    score-=2

    if(score<0)score=0
    score_display.innerText=`Score ${score}`
    essaies+=1
    
       
}
function aide(){
    if(Aidez>2){
        alert("Ah faites un peu d'effort")
        Aide.style.display='none'
        return
    }
    else if(score<3){
        alert("Vous n'avez pas assez de score pour obtenir de l'aide")
        Aide.style.display='none'
        return
    }
    var x=Math.abs(Math.round((Math.random()*10)%5)-1)
    if(deja.indexOf(x)!=-1){
        return aide()
    }
    var z=document.getElementById("n"+(x+1))
    z.value=cache[x]
    z.style.backgroundColor='green'
    Aidez+=1
    score-=Aidez
    deja.push(x)
    if(score<0)score=0

    Aide.innerText=`Aidez(Score-${Aidez+1})`
    score_display.innerText=`Score ${score}`
    document.getElementById("nb_aide").innerText=`Nombre d'aide:${Aidez}`
}
   genere()
