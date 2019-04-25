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
    //bookkeeping
    var modules={
        "predefined-transaction-item-data": {url:"$A/b/bookkeeping/predefined-transaction-item-data.html",Table:"predefined-transaction-item-vmautomation",form_module:"predefined-transaction-item-form"},
        "predefined-transaction-item-form": {url:"$A/b/bookkeeping/predefined-transaction-item-form.html",Table:"predefined-transaction-item-vmautomation"},
        
        "transaction-y-q-tax-return-data":  {url:"$A/b/bookkeeping/transaction-year-quarter-tax-return-data.html",Table:"transaction-vmautomation",form_module:"transaction-form",router:1},
        "transaction-y-q-bas-data":    		{url:"$A/b/bookkeeping/transaction-year-quarter-bas-data.html",Table:"transaction-vmautomation",form_module:"transaction-form",router:1},
        "transaction-y-q-data":    		    {url:"$A/b/bookkeeping/transaction-year-quarter-data.html",Table:"transaction-vmautomation",form_module:"transaction-form",router:1},
        
        "transaction-bas-data":   		    {url:"$A/b/bookkeeping/transaction-bas-data.html",Table:"transaction-vmautomation",form_module:"transaction-form",router:1},
        "transaction-tax-return-data":      {url:"$A/b/bookkeeping/transaction-tax-return-data.html",Table:"transaction-vmautomation",form_module:"transaction-form",router:1},
        "transaction-data":    			    {url:"$A/b/bookkeeping/transaction-data.html",Table:"transaction-vmautomation",form_module:"transaction-form",router:1},
        "transaction-form":    			    {url:"$A/b/bookkeeping/transaction-form.html",Table:"transaction-vmautomation",
                                                item_table:'predefined-transaction-item-wapp'
                                            },
        "ato-bas-quarter-aggregation-data":     {url:"$A/b/bookkeeping/ato-bas-quarter-aggregation-data.html",Table:"ato-bas-quarter-aggregation-vmautomation",transaction_table:'transaction-wapp',form_module:"ato-bas-quarter-aggregation-form",router:1},
        "ato-bas-quarter-aggregation-form":     {url:"$A/b/bookkeeping/ato-bas-quarter-aggregation-form.html",Table:"ato-bas-quarter-aggregation-vmautomation",transaction_table:'transaction-wapp'},
        "income-expense-month-aggregation-data":{url:"$A/b/bookkeeping/income-expense-month-aggregation-data.html",Table:"income-expense-month-aggregation-vmautomation", transaction_table:'transaction-wapp',form_module:"income-expense-month-aggregation-form",router:1},
        "income-expense-month-aggregation-form":{url:"$A/b/bookkeeping/income-expense-month-aggregation-form.html",Table:"income-expense-month-aggregation-vmautomation", transaction_table:'transaction-wapp'},
        "item-month-aggregation-data":          {url:"$A/b/bookkeeping/item-month-aggregation-data.html",Table:"item-month-aggregation-vmautomation", transaction_table:'transaction-wapp',form_module:"item-month-aggregation-form",router:1},
        "item-month-aggregation-form":          {url:"$A/b/bookkeeping/item-month-aggregation-form.html",Table:"item-month-aggregation-vmautomation", transaction_table:'transaction-wapp'},
        "income-expense-chart":                 {url:"$A/b/bookkeeping/income-expense-chart.html",Table:"income-expense-month-aggregation-vmautomation",router:1},
        "item-chart":                           {url:"$A/b/bookkeeping/item-chart.html",Table:"item-month-aggregation-vmautomation",router:1},
    }
    url_replace(modules,"","$A","https://modules.vmiis.com/","http://127.0.0.1:8000/vmiis/modules");
    //-------------------------------------------------------------------------------------
})();
