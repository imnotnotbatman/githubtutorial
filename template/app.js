
//comentario para conflictos branching
function MyApp() {
    "use strict";
    var version = "v1.0";
    
    function setStatus(message) {
        $("#app>footer").text(message);
    }
    
    this.start = function(){
        $("#app>header").append(version);
        setStatus("ready");
    };
    
}
