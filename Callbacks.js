function loadScript(src,callback){
    var script=document.createElement("script");
    script.src=src;
    script.onload=function()
    {
        console.log("loaded script with SRC:"+src);
        callback(null,src);
    }
    script.onerror=function(){
        console.log("Error loading script with src" + src);
        callback(new Error("Src got some Error"));
    }
    document.body.appendChild(script);
}
function hello(error,src)
{    
    if(error){
       console.log(error);
       return
    }
    alert("Hello World!" +src);
}
function Gm(src)
{
    alert("Good Morning" + src);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.ms",hello )
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",Gm)