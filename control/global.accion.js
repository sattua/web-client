
 /*
  * Makes ajax call to html file and load it into target page
  * @param {function} target - targets html element
  * @returns {Boolean}
  */
global.action.renderPage = function(page) {
    $.ajax({
        url: global.root.page.current.appBase + "/partials/" + global.root.page.current.name+".html",
        context: document.body
    }).done(function(data) {                
        page.obj.render(data);
        //TODO: is it useful?
        page.obj.start();
        return true;
    }).fail(function( jqXHR, textStatus ) {
        //console.log( jqXHR);
        console.log( textStatus+"!!! : "+jqXHR.statusText + " ("+jqXHR.status + ") [ "+jqXHR.responseText+ "]" );
        return false;
    });    
};

/*
 * common append, dont know why
 * @param {string} newElement
 * @param {string} target
 * 
 */
global.action.appendTo = function(newElement,target){
    var temp = $(newElement);
    temp.appendTo(target);
};

/*
 * Adds a css file to the document
 * @param {string} url
 */
global.action.addCssFile = function(url){
    var temp = $("<link href='"+url+"' rel='stylesheet' />");
    temp.appendTo("head");
};

/*
 *It loads a view and its presenter js file, Adds a js file to the document
 * @param {object <page>} page
 * @returns {Boolean}
 */
global.action.loadPresenter = function(page){
    $.getScript( global.root.page.current.appBase + "/partials/" + page.name + ".js", function( data, textStatus, jqxhr ) {
    global.action.renderPage(page);
    console.log( "JS has been loaded. Data: {logReporter: { last:{status:"+textStatus+",code:"+jqxhr.status+" }}} " );
    return true;
    }).fail(function( jqxhr, settings, exception ) {
        console.log(settings+"!!! : " +exception+"; "+jqxhr.status + " [ "+jqxhr.responseText+ "]");
        return false;
    });
};

/*
 * Loads js file into the document, this js it's the js base in all apps
 * @param {string} module
 */
global.action.loadApp = function(module) {
    global.root.page.current.appBase = "apps/" + module;
    global.root.page.current.name = module;
    $.getScript( global.root.page.current.appBase+"/"+module+".js", function( data, textStatus, jqxhr ,global) {
    //console.log( jqxhr ); // Data returned
    console.log( "App has been loaded. Data: {logReporter: { last:{status:"+textStatus+",code:"+jqxhr.status+" }}} " );
    }).fail(function( jqxhr, settings, exception ) {
        //console.log( jqxhr);
        console.log(settings+"!!! : " +exception+"; "+jqxhr.status + " [ "+jqxhr.responseText+ "]");
    });
};

/*
 * not sure
 */
global.action.loadPage = function(page) {
    global.root.page.current.name = page.name;
    global.action.loadPresenter(page); 
};