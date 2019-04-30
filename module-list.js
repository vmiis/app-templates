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
        "fountains-illumination":       {url:"$H/f/fountains-illumination/index.html",app:1},
        "enquiry":                      {url:"$H/e/enquiry/index.html",app:1},
        "event-calendar":               {url:"$H/e/event-calendar/index.html",app:1},
        "medical-practitioner":         {url:"$H/m/medical-practitioner/index.html",app:1},
        "fitness":                      {url:"$H/f/fitness/index.html",app:1},
        "woolcock-template":            {url:"$H/w/woolcock-template/index.html",app:1},
        "purchase-order-request":       {url:"$H/p/purchase-order-request/index.html",app:1},
        "layout-with-fixed-header-and-footer":              {url:"$H/l/layout-with-fixed-header-and-footer/index.html",app:1},
        "layout-with-fixed-header-and-scrollable-footer":   {url:"$H/l/layout-with-fixed-header-and-scrollable-footer/index.html",app:1},
        "layout-with-scrollable-header-and-footer-1":       {url:"$H/l/layout-with-scrollable-header-and-footer-1/index.html",app:1},
        "layout-with-scrollable-header-and-footer-2":       {url:"$H/l/layout-with-scrollable-header-and-footer-2/index.html",app:1},
        "layout-with-side-nav-and-fixed-footer":            {url:"$H/l/layout-with-side-nav-and-fixed-footer/index.html",app:1},
        "first-aid-officer":                                {url:"$H/f/first-aid-officer/index.html",app:1},
        "policies-and-forms":                               {url:"$H/p/policies-and-forms/index.html",app:1},
                
        
        
        //"incoice-management":           {url:"$H/i/invoice-management/index.html",app:1},
    }
    url_replace(modules,"app-","$H","https://app-templates.vmiis.com/","http://127.0.0.1:8000/vmiis/app-templates");
    //-------------------------------------------------------------------------------------
})();
