(function(){
    var local = {
        
    }
    
        var main = function(data) {
            global.action.appendTo("<div>main loaded</div>","head");
            global.action.addCssFile(global.root.page.current.appBase+"/css/justified-nav.css");
            $("#static-container-render-main").html(data);
        };
        
        global.root.page.current.loadPage = function(pageName){
            global.root.page.current.name = pageName;
            global.action.renderPage(function(data) {
                
                global.action.appendTo("<div>project loaded</div>","head");
                global.action.addJsFile(global.root.page.current.appBase+"/js/docs.min.js");
                global.action.addJsFile(global.root.page.current.appBase+"/js/workaround.js");
                $("#static-container-render-main").empty();
                $("#static-container-render-main").html(data);
                
            });
        };
        
        global.action.renderPage(main);
        
    }
)(global,jQuery);
