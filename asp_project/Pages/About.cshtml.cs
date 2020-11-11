using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Configuration;


namespace asp_project.Pages
{
    public class AboutModel : PageModel
    {
        private readonly IConfiguration Configuration;
        public string status;
        public string[] results;
      

        public AboutModel(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public void OnGet()
        {
            if(Request.Query["q"] == "procedure")
            {
                //Db_connect dbconnect = new Db_connect(Configuration);
                //status = dbconnect.exec_query("exec procedurename", "nonquery");
                


                //results = (dbconnect.exec_query("select * from table_1").Split("\\"));


                //dbconnect.close_conn();
            }
            
        }
        public void Btn_click()
        {
            // Console.WriteLine("click");
            Debug.WriteLine("click");

        }

    }
  


}
