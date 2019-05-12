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
        "tom":                                              {url:"$H/t/tom/index.html",app:1},
        "giving":                                           {url:"$H/g/giving/index.html",app:1},
        "white":                                            {url:"$H/w/white/index.html",app:1},
        "hotel":                                            {url:"$H/h/hotel/index.html",app:1},
        "word-pair-association":                            {url:"$H/w/word-pair-association/index.html",app:1},
        "vmiis-365":                                        {url:"$H/v/vmiis-365/index.html",app:1},
        "epworth-sleepiness-scale":                         {url:"$H/e/epworth-sleepiness-scale/index.html",app:1},
        "body-mass-index":                                  {url:"$H/b/body-mass-index/index.html",app:1},
        "unemployment":                                     {url:"$H/u/unemployment/index.html",app:1},
        //"incoice-management":           {url:"$H/i/invoice-management/index.html",app:1},
    }
    url_replace(modules,"app-","$H","https://app-templates.vmiis.com/","http://"+window.location.hostname+":8000/vmiis/app-templates");
    //-------------------------------------------------------------------------------------
    var modules={
        "astn":  		                                    {url:"$astn/index.html",app:1},
        "spardac":  		                                {url:"$spardac/index.html",app:1},
        "cleverlights":  		                            {url:"$cleverlights/index.html",app:1},
        "cleverlights-recruitment":                         {url:"$cleverlights-recruitment/index.html",app:1},
        "cleverlights-management":                          {url:"$cleverlights-management/index.html",app:1},
        "neurovosa":  		                                {url:"$neurovosa/index.html",app:1},
        "local-sleep":  		                            {url:"$local-sleep/index.html",app:1},     
        "sdm-ii":  		                                    {url:"$sdm-ii/index.html",app:1},    
        
        
        "incosact-online-questionnaire":                    {url:"$incosact-o/index.html",app:1},
        "incosact-management":                              {url:"$incosact-m/index.html",app:1},
        "sleepfix":                                         {url:"$sleepfix/index.html",app:1},
        "sleepfix-management":                              {url:"$sleepfix-m/index.html",app:1},
        "sleepfix-online-questionnaire":                    {url:"$sleepfix-o/index.html",app:1},      
        
        "backoffice":                                       {url:"$backoffice/index.html",app:1},
    }
    url_replace(modules,"wapp-","$astn","https://astn.wappsystem.com.au","http://127.0.0.1:8000/wappsystem/astn");
    url_replace(modules,"wapp-","$spardac","https://spardac.wappsystem.com.au","http://127.0.0.1:8000/wappsystem/spardacmdb");
    url_replace(modules,"wapp-","$cleverlights","https://wappsystem.github.io/cleverlights","http://127.0.0.1:8000/wappsystem/cleverlights");
    url_replace(modules,"wapp-","$cleverlights-recruitment","https://wappsystem.github.io/cleverlights-recruitment","http://127.0.0.1:8000/wappsystem/cleverlights-recruitment");
    url_replace(modules,"wapp-","$cleverlights-management","https://wappsystem.github.io/cleverlights-management","http://127.0.0.1:8000/wappsystem/cleverlights-management");
    url_replace(modules,"wapp-","$neurovosa","https://wappsystem.github.io/neurovosa","http://127.0.0.1:8000/wappsystem/neurovosa");
    url_replace(modules,"wapp-","$local-sleep","https://wappsystem.github.io/local-sleep","http://127.0.0.1:8000/wappsystem/local-sleep");
    url_replace(modules,"wapp-","$sdm-ii","https://wappsystem.github.io/sdm-ii","http://127.0.0.1:8000/wappsystem/sdm-ii");
    url_replace(modules,"wapp-","$incosact-o","https://incosact-online-questionnaire.wappsystem.com.au","http://127.0.0.1:8000/wappsystem/incosact-online-questionnaire");
    url_replace(modules,"wapp-","$incosact-m","https://incosact.wappsystem.com.au","http://127.0.0.1:8000/wappsystem/incosact");
    url_replace(modules,"wapp-","$sleepfix/","http://www.sfix.com.au/","http://127.0.0.1:8000/wappsystem/sleepfix/");
    url_replace(modules,"wapp-","$sleepfix-m/","http://management.sfix.com.au/","http://127.0.0.1:8000/wappsystem/sleepfix-management/");
    url_replace(modules,"wapp-","$sleepfix-o/","https://online-questionnaire.sfix.com.au/","http://127.0.0.1:8000/wappsystem/sleepfix-online-questionnaire/");
    
    url_replace(modules,"wapp-","$backoffice","https://backoffice.wappsystem.com.au","http://127.0.0.1:8000/wappsystem/backoffice");   
    //-------------------------------------------------------------------------------------
})();
