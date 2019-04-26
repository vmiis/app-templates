(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "search": {url:"$H/s/search.html",router:1},
    }
    for(m in modules){   modules[m].url=modules[m].url.replace('$H',$vm.hosting_path); $vm.module_list[m]=modules[m];}   
    //$vm.m_path='https://modules.vmiis.com'; if($vm.localhost==true) $vm.m_path='http://127.0.0.1:8000/vmiis/modules'; 
    //for(m in modules){   modules[m].url=modules[m].url.replace('$M',$vm.hosting_path); $vm.module_list[m]=modules[m];}
    //-------------------------------------------------------------------------------------
})();
