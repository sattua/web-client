//Page's dictionary
var local = {
    pages: {
        mydefault: {
            name: "mydefault",         
            logRequire : false,
            obj:{}          
            
        },home:{
            name : "home",
            logRequire : false,
            obj:{}            
        }             
    }
};

//Init of app, sets up the initial page(home page)
console.log("page is loading");
if(window.location.hash === ''){
    webapp.loadPage(local.pages.mydefault);
}else{               
    webapp.loadPage(local.pages[window.location.hash.substr(1)]);                 
}
