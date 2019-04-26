(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "a-simple-application":  		{url:"$H/a/a-simple-application/index.html"},
        "aaxsys":  		                {url:"$H/a/aaxsys/index.html"},
        "bookkeeping":  		        {url:"$H/b/bookkeeping/index.html"},
        "bookkeeping-for-wappsystem":   {url:"$H/b/bookkeeping-wappsystem/index.html"},
        "bookkeeping-for-vmautomation": {url:"$H/b/bookkeeping-vmautomation/index.html"},
        "particle-background":          {url:"$H/p/particle-background/index.html"},
    }
    for(m in modules){ modules[m].url=modules[m].url.replace('$H',$vm.hosting_path); $vm.module_list[m]=modules[m];}   
    //-------------------------------------------------------------------------------------
})();
