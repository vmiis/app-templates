(function(){
    //-------------------------------------------------------------------------------------
    //generic
    var modules={
        "short-page":  		{url:"https://modules.vmiis.com/s/short-page.html",router:1},
        "long-page":  		{url:"https://modules.vmiis.com/l/long-page.html",router:1},
        "about-vmiis":  	{url:"https://modules.vmiis.com/a/about-vmiis.html",router:1},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
    //-------------------------------------------------------------------------------------
})();
