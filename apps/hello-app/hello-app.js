//Page's dictionary
var local = {
    pages: {
        mydefault: {
            name: "mydefault",
            render: function(data) {
//                global.action.addJsFile(global.root.page.current.appBase + "/js/docs.min.js");
//                global.action.addJsFile(global.root.page.current.appBase + "/js/workaround.js");
                $("#static-container-render-main").empty();
                $("#static-container-render-main").html(data);
            },            
            logRequire : false,
            object:{}            
            
        },home:{
            name : "myhome",
            render : function(data) {                            
                global.action.addCssFile(global.root.page.current.appBase + "/css/justified-nav.css");
                $("#static-container-render-main").empty();
                $("#static-container-render-main").html(data);
            },
            logRequire : false,
            object:{}            
        }             
    }
};

//Init of app, sets up the initial page(home page)
webapp.loadPage(local.pages.mydefault);