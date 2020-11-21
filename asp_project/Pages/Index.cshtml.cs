﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;


namespace asp_project.Pages
{
    public class IndexModel : PageModel
    {

        private readonly ILogger<IndexModel> _logger;
        
        
        private readonly IConfiguration Configuration;
        public string name;
        public List<Dictionary<string, string>> values;


        public IndexModel(ILogger<IndexModel> logger, IConfiguration configuration)
        {
            _logger = logger;
            Configuration = configuration;
            
        }

        public void OnGet()
        {
          

            Db_connect dbconnect = new Db_connect(Configuration);
            values = new List<Dictionary<string, string>>();
            values = dbconnect.exec_query("select * from table_1 order by name");

            
            
           


        }





    }
}
