//Interface
var global = {
    action: {
        appendTo: function(newElement,target){}, 
        renderPage: function(main) {},
        addCssFile : function(url){},
        loadApp : function(module){},
        loadPage: function(page){},
        buildTemplate: function(page){}
    },
    root: {
        page: {
            current: { 
                name : "index",                
                pages : {},
            }
        }
    },
    dom:{},
    external:{},
    info:{}
};

/*
 *Constants 
 */
global.info = {
    path:{
        PARTIALS_PATH : "/partials/",
        JQUERY_PATH : "lib/external/jquery-2.1.1.min.js",
        ROOT : "hello-app"
    }
};

/***shortcuts***/
var webapp = global.action;
webapp.HOMEPATH = global.info.path.ROOT;
webapp.PARTIALS_PATH
/***shortcuts***/