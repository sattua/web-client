local.pages.home.object = {
    sayHello: function(){
        console.log("Hello");
    }
};

(function(){
    local.pages.home.object.sayHello(); 
    
})(local)

