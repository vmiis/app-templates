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
        "linkedin":                                         {url:"$H/l/linkedin/index.html",app:1},
        "facebook":                                         {url:"$H/f/facebook/index.html",app:1},
        //"incoice-management":           {url:"$H/i/invoice-management/index.html",app:1},
    }
    url_replace(modules,"app-","$H","https://app-templates.vmiis.com/","http://"+window.location.hostname+":8000/vmiis/app-templates");
    //-------------------------------------------------------------------------------------
    var url_replace_2=function(modules,prefix){
        for(m in modules){
            var $R=modules[m].web; if($vm.localhost==true) $R=modules[m].local;
            modules[m].url=modules[m].url.replace("$H",$R); 
            $vm.module_list[prefix+m]=modules[m]; 
            $vm.module_list[prefix+m].prefix=prefix; 
        } 
    }
    //-------------------------------------------------------------------------------------
    var modules={
        "astn":                             {url:"$H/index.html",app:1, web:"https://astn.wappsystem.com.au",                           local:"http://127.0.0.1:8000/wappsystem/astn"},
        "spardac":  		                {url:"$H/index.html",app:1, web:"https://spardac.wappsystem.com.au",                        local:"http://127.0.0.1:8000/wappsystem/spardacmdb"},
        "cleverlights":  		            {url:"$H/index.html",app:1, web:"https://wappsystem.github.io/cleverlights",                local:"http://127.0.0.1:8000/wappsystem/cleverlights"},
        "cleverlights-recruitment":         {url:"$H/index.html",app:1, web:"https://wappsystem.github.io/cleverlights-recruitment",    local:"http://127.0.0.1:8000/wappsystem/cleverlights-recruitment"},
        "cleverlights-management":          {url:"$H/index.html",app:1, web:"https://wappsystem.github.io/cleverlights-management",     local:"http://127.0.0.1:8000/wappsystem/cleverlights-management"},       
        "neurovosa":  		                {url:"$H/index.html",app:1, web:"https://wappsystem.github.io/neurovosa",                   local:"http://127.0.0.1:8000/wappsystem/neurovosa"},       
        "local-sleep":  		            {url:"$H/index.html",app:1, web:"https://wappsystem.github.io/local-sleep",                 local:"http://127.0.0.1:8000/wappsystem/local-sleep"},
        "sdm-ii":  		                    {url:"$H/index.html",app:1, web:"https://wappsystem.github.io/sdm-ii",                      local:"http://127.0.0.1:8000/wappsystem/sdm-ii"},
        "incosact-online-questionnaire":    {url:"$H/index.html",app:1, web:"https://incosact-online-questionnaire.wappsystem.com.au",  local:"http://127.0.0.1:8000/wappsystem/incosact-online-questionnaire"},      
        "incosact-management":              {url:"$H/index.html",app:1, web:"https://incosact.wappsystem.com.au",                       local:"http://127.0.0.1:8000/wappsystem/incosact"},       
        "sleepfix":                         {url:"$H/index.html",app:1, web:"http://www.sfix.com.au",                                   local:"http://127.0.0.1:8000/wappsystem/sleepfix"},
        "sleepfix-management":              {url:"$H/index.html",app:1, web:"http://management.sfix.com.au",                            local:"http://127.0.0.1:8000/wappsystem/sleepfix-management"},
        "sleepfix-online-questionnaire":    {url:"$H/index.html",app:1, web:"https://online-questionnaire.sfix.com.au",                 local:"http://127.0.0.1:8000/wappsystem/sleepfix-online-questionnaire"},
        
        "backoffice":                       {url:"$H/index.html",app:1, web:"https://backoffice.wappsystem.com.au",                     local:"http://127.0.0.1:8000/wappsystem/backoffice"},
    }
    url_replace_2(modules,"wapp-");   
    //-------------------------------------------------------------------------------------
    var modules={
        "biomarkers-ii":                        {url:"$H/index.html",app:1, web:"https://biomarkers-ii.rt.org.au",                          local:"http://127.0.0.1:8000/woolcock-imr/biomarkers-ii"},
        "biomarkers-ii-online-questionnaire":   {url:"$H/index.html",app:1, web:"https://biomarkers-ii-online-questionnaire.rt.org.au",     local:"http://127.0.0.1:8000/woolcock-imr/biomarkers-ii-online-questionnaire"},
        "flat":                             {url:"$H/index.html",app:1, web:"https://flat.rt.org.au",                                   local:"http://127.0.0.1:8000/woolcock-imr/flat-3"},
        "flat-online-questionnaire":        {url:"$H/index.html",app:1, web:"https://flat-online-questionnaire.rt.org.au",              local:"http://127.0.0.1:8000/woolcock-imr/flat-3-online-questionnaire"},
        "flat-trial-registration":          {url:"$H/index.html",app:1, web:"https://woolcock-imr.github.io/flat-trial-registration",  local:"http://127.0.0.1:8000/woolcock-imr/flat-trial-registration"},
        "windfarm-website":                 {url:"$H/index.html",app:1, web:"https://www.windfarmstudy.com",                            local:"http://127.0.0.1:8000/woolcock-imr/windfarm-website"},
        "windfarm-lab-management":          {url:"$H/index.html",app:1, web:"https://windfarm-lab-management.rt.org.au",                local:"http://127.0.0.1:8000/woolcock-imr/windfarm-lab-management"},
        "cansleep":                         {url:"$H/index.html",app:1, web:"https://cansleep.rt.org.au",                               local:"http://127.0.0.1:8000/woolcock-imr/cansleep"},
        "cansleep-online-questionnaire":    {url:"$H/index.html",app:1, web:"https://cansleep-online-questionnaire.rt.org.au",          local:"http://127.0.0.1:8000/woolcock-imr/cansleep-online-questionnaire"},
        "nightstudy":                       {url:"$H/index.html",app:1, web:"https://woolcock-imr.github.io/nightstudy",                local:"http://127.0.0.1:8000/woolcock-imr/nightstudy"},
        "volunteer-database":               {url:"$H/index.html",app:1, web:"https://volunteer-database.rt.org.au",                     local:"http://127.0.0.1:8000/woolcock-imr/volunteer-database-2"},
    }
    url_replace_2(modules,"wkapp-");   
    //-------------------------------------------------------------------------------------
})();
