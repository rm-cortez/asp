using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Net.Http;






namespace asp_project.Pages
{
    public class IndexModel : PageModel
    {

        private readonly ILogger<IndexModel> _logger;
        
        
        private readonly IConfiguration Configuration;
        public string name;
        public List<Dictionary<string, string>> values;
        public string output;
        public string content;


        public IndexModel(ILogger<IndexModel> logger, IConfiguration configuration)
        {
            _logger = logger;
            Configuration = configuration;
            
        }

        public void OnGet()
        {


            //Db_connect dbconnect = new Db_connect(Configuration);
            //values = new List<Dictionary<string, string>>();
            //values = dbconnect.exec_query("select * from technologies order by name");


            //output = System.Net.WebUtility.HtmlDecode(JsonConvert.SerializeObject( values) );


            //http get request
            //var ts =  getJson();
            Task<string> ts = getJson();

            try
            {
                // wait for the task to complete to continue
                output = ts.Result;

                dynamic obj = JsonConvert.DeserializeObject(output);

                content = obj.First.content;
            }


            #pragma warning disable 0168
            catch (Exception e)
            {
                content = "<h1>ASP Project</h1>";
            }
        }

        public async Task<string> getJson()
        {
            //get request
            HttpClient hp = new HttpClient();
            hp.BaseAddress = new Uri("http://rcsproductions.us/");
            var response = (await hp.GetAsync("content-builder.php?type=asp") ).Content.ReadAsStringAsync().Result;

            
            return response;

        }



    }
}
