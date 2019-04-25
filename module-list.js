(function(){
    //-------------------------------------------------------------------------------------
    var url_replace=function(modules,prefix,$A,$R,$L){
        for(m in modules){
            var $S=$R; if($vm.localhost==true) $S=$L;
            modules[m].url=modules[m].url.replace($A,$S); 
            $vm.module_list[prefix+m]=modules[m]; 
            $vm.module_list[prefix+m].prefix=prefix; 
        } 
    }
    //-------------------------------------------------------------------------------------
    var modules={
        "a-simple-application":  		{url:"$A/a/a-simple-application/index.html"},
        "aaxsys":  		                {url:"$A/a/aaxsys/index.html"},
        "bookkeeping":  		        {url:"$A/b/bookkeeping/index.html"},
        "bookkeeping-wappsystem":       {url:"$A/b/bookkeeping-wappsystem/index.html"},
        "bookkeeping-automation":       {url:"$A/b/bookkeeping-vmautomation/index.html"},
    }
    url_replace(modules,"","$A","https://app-templates.vmiis.com/","http://127.0.0.1:8000/vmiis/app-templates");
    //-------------------------------------------------------------------------------------
})();
