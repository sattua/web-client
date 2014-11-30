var local = {
    pages: {
        mydefault: {
            name: "mydefault",
            render: function(data) {
                
                global.action.appendTo("<div>project loaded</div>", "head");
                global.action.addJsFile(global.root.page.current.appBase + "/js/docs.min.js");
                global.action.addJsFile(global.root.page.current.appBase + "/js/workaround.js");
                $("#static-container-render-main").empty();
                $("#static-container-render-main").html(data);

            },
            logRequire : false
        },home:{
            name : "hello-app",
            render : function(data) {            
                global.action.appendTo("<div>main loaded</div>", "head");
                global.action.addCssFile(global.root.page.current.appBase + "/css/justified-nav.css");
                $("#static-container-render-main").empty();
                $("#static-container-render-main").html(data);
            },
            logRequire : false
        },test:{
            name : "test",
            render : function(data) {            
                global.action.appendTo("<div>test loaded</div>", "head");                
                $("#static-container-render-main").empty();
                $("#static-container-render-main").html(data);
            },
            logRequire : false
        }
             
    }
};



//Init of app
webapp.loadPage(local.pages.home)