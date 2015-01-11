$(window).on('hashchange', function() {
    webapp.loadPage(local.pages[window.location.hash.substr(1)]);
});