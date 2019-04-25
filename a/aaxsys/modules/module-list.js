(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "search": {url:"$A/modules/s/search.html",router:1},
    }
    for(m in modules){ modules[m].url=$vm.replace_url(modules[m].url); $vm.module_list[m]=modules[m]; }
    //-------------------------------------------------------------------------------------
})();
