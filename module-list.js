(function(){
    //-------------------------------------------------------------------------------------
    var url_replace=function(modules,prefix,$H,$R,$L){
        for(m in modules){
            var $S=$R; if($vm.localhost==true) $S=$L;
            modules[m].url=modules[m].url.replace($H,$S); 
            $vm.module_list[prefix+m]=modules[m]; 
            $vm.module_list[prefix+m].prefix=prefix; 
        } 
    }
    //-------------------------------------------------------------------------------------
    var modules={
        "a-simple-application":  		{url:"$H/a/a-simple-application/index.html",app:1},
        "aaxsys":  		                {url:"$H/a/aaxsys/index.html",app:1},
        "bookkeeping":  		        {url:"$H/b/bookkeeping/index.html",app:1},
        "bookkeeping-for-wappsystem":   {url:"$H/b/bookkeeping-wappsystem/index.html",app:1},
        "bookkeeping-for-vmautomation": {url:"$H/b/bookkeeping-vmautomation/index.html",app:1},
        "particle-background":          {url:"$H/p/particle-background/index.html",app:1},
        "sleep-fix":                    {url:"$H/s/sleep-fix/index.html",app:1},
        "restaurant":                   {url:"$H/r/restaurant/index.html",app:1},
        "room-booking":                 {url:"$H/r/room-booking/index.html",app:1},
        "car-booking":                  {url:"$H/c/car-booking/index.html",app:1},
        "equipment-booking":            {url:"$H/e/equipment-booking/index.html",app:1},
        "clever-lights":                {url:"$H/c/clever-lights/index.html",app:1},
        "nasa-background":              {url:"$H/n/nasa-background/index.html",app:1},
        "bubble-background":            {url:"$H/b/bubble-background/index.html",app:1},
        "snow-background":              {url:"$H/s/snow-background/index.html",app:1},
        "nyan-background":              {url:"$H/n/nyan-background/index.html",app:1},
        "flat-trial":                   {url:"$H/f/flat-trial/index.html",app:1},
        "survey":                       {url:"$H/s/survey/index.html",app:1},
        "success":                      {url:"$H/s/success/index.html",app:1},
    }
    url_replace(modules,"","$H","https://app-templates.vmiis.com/","http://127.0.0.1:8000/vmiis/app-templates");
    //-------------------------------------------------------------------------------------
})();
