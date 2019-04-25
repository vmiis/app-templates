(function(){
    //-------------------------------------------------------------------------------------
    //generic
    var modules={
        "a-simple-application":  		{url:"$A/a/a-simple-application/index.html"},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
    //-------------------------------------------------------------------------------------
    //replace $A...
    for(m in $vm.module_list) $vm.module_list[m].url=$vm.replace_url($vm.module_list[m].url);
    //-------------------------------------------------------------------------------------
})();
