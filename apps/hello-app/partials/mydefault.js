local.pages.mydefault.object = {
    sayHello: function(){
        
        var temp = {inputs:{
                name : "This is my name"
            }};
        
        rivets.bind($('#page-content'), { dataBind : temp } );
        
        
        console.log("Hello");
    },
    name : "This is my name"
};

(function(){
    local.pages.mydefault.object.sayHello(); 
    
})(local)
