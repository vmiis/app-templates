(function(){
    //-------------------------------------------------------------------------------------
    var url_replace=function(modules,prefix,$H,$R,$L){
        for(m in modules){
            var $S=$R; if($vm.localhost==true) $S=$L;
            modules[m].url=modules[m].url.replace($H,$S); 
            $vm.module_list[prefix+m]=modules[m]; 
            $vm.module_list[prefix+m].prefix=prefix; 
        } ``
    }
    //-------------------------------------------------------------------------------------
    var modules={
        "a-simple-application":  		{url:"$H/a/a-simple-application/index.html"},
        "aaxsys":  		                {url:"$H/a/aaxsys/index.html"},
        "bookkeeping":  		        {url:"$H/b/bookkeeping/index.html"},
        "bookkeeping-for-wappsystem":   {url:"$H/b/bookkeeping-wappsystem/index.html"},
        "bookkeeping-for-vmautomation": {url:"$H/b/bookkeeping-vmautomation/index.html"},
        "particle-background":          {url:"$H/p/particle-background/index.html"},
    }
    url_replace(modules,"","$H","https://app-templates.vmiis.com/","http://127.0.0.1:8000/vmiis/app-templates");
    //-------------------------------------------------------------------------------------
})();
