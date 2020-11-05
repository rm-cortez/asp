using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.OleDb;
using System.Data.Odbc;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace asp_project.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }

        public void Btn_click()
        {

        }
       
        public string name = "ronald";

        public string conn = "Provider=MySqlProvider;Data Source=18.221.52.182;" +
                    "User id=root;Password=RCSH3llo123;";
        //OleDbConnection connection = new OleDbConnection(ConnectionString);

        //connection.Open();

    }
}
