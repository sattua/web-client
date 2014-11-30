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
    dom:{} 
};
  
global.action.renderPage = function(page) {      
    $.ajax({
        url: global.root.page.current.appBase + "/partials/"+global.root.page.current.name+".html",
        context: document.body
    }).done(function(data) {                
        page(data);
    }).fail(function( jqXHR, textStatus ) {
        //console.log( jqXHR);
        console.log( textStatus+"!!! : "+jqXHR.statusText + " ("+jqXHR.status + ") [ "+jqXHR.responseText+ "]" );
    });
};

global.action.appendTo = function(newElement,target){
    var temp = $(newElement);
    temp.appendTo(target);
};
global.action.addCssFile = function(url){
    var temp = $("<link href='"+url+"' rel='stylesheet' />");
    temp.appendTo("head");
};

global.action.addJsFile = function(url){
    var temp = $("<script src='"+url+"'></script>'");
    temp.appendTo("#static-container-scripts");
};

global.action.loadApp = function(module) {
    global.root.page.current.appBase = "apps/" + module;
    global.root.page.current.name = module;
    $.getScript( global.root.page.current.appBase+"/"+module+".js", function( data, textStatus, jqxhr ,global) {
    //console.log( jqxhr ); // Data returned
    console.log( "Page  has been loaded. Data: {logReporter: { last:{status:"+textStatus+",code:"+jqxhr.status+" }}} " );
    }).fail(function( jqxhr, settings, exception ) {
        //console.log( jqxhr);
        console.log(settings+"!!! : " +exception+"; "+jqxhr.status + " [ "+jqxhr.responseText+ "]");
    });
};

/*
 * 
 * @param {page} page
 * @returns {0}
 */
global.action.loadPage = function(page) {
    global.root.page.current.name = page.name;
    global.action.renderPage(page.render);
};

global.action.buildTemplate = function(page) {
    
};
