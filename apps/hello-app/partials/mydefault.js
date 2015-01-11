local.pages.mydefault.obj = {
    //attributes
    name : "This is my name",
    
    //methods
    render: function(data) {                            
                global.action.addCssFile(global.root.page.current.appBase + "/css/justified-nav.css");
                $("#static-container-render-main").empty();
                $("#static-container-render-main").html(data);
            },
    start : function(){
        var form = {name : "my name"};
        rivets.bind($('#page-content'), {dataBind: form});
    }    
};

(function(){
    
})(local)
