using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
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
        public string connString;

        public IndexModel(ILogger<IndexModel> logger, IConfiguration configuration)
        {
            _logger = logger;
            Configuration = configuration;
        }

        public void OnGet()
        {
            //Console.WriteLine(Configuration["ConnectionStrings:myDb1"]);

            name = "ronald";

            connString = Configuration["ConnectionStrings:myDb1"];

            Console.WriteLine(connString);




            SqlConnection connection = new SqlConnection(connString);

            SqlCommand command = new SqlCommand("select * from table_1", connection);

            connection.Open();

            SqlDataReader reader = command.ExecuteReader();

            while (reader.Read())
            {
                Console.WriteLine($" " +
                    $"{reader.GetName(0)} :{reader.GetValue(0)} " +
                    $"-- " +
                    $"{reader.GetName(1)}:{reader.GetValue(1)} ");

            }
            connection.Close();
            connection.Dispose();
            //    Console.WriteLine("sql: ", connection);







        }





    }
}
