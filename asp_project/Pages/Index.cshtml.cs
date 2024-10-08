﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;
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
        public string apiUrl;


        public IndexModel(ILogger<IndexModel> logger, IConfiguration configuration, IWebHostEnvironment env)
        {
            _logger = logger;
            Configuration = configuration;

            if (env.EnvironmentName == "Development")
            {
                apiUrl = Configuration["ApiUrl:dev"];
            }
            else
            {
                apiUrl = Configuration["ApiUrl:prod"];
            }


        }

        public void OnGet()
        {





            //Db_connect dbconnect = new Db_connect(Configuration);
            //values = new List<Dictionary<string, string>>();
            //values = dbconnect.exec_query("select * from technologies order by name");


            //output = System.Net.WebUtility.HtmlDecode(JsonConvert.SerializeObject( values) );

            //            < div >
            //    < input id = "outputStr" value = " @Model.output" type = "hidden" />

            //     </ div >

            //     < script >
            //         var obj = JSON.parse(document.querySelector('#outputStr').value)
            //    console.log(obj)

            //    document.addEventListener("DOMContentLoaded", function() {
            //                console.log('jquery:', $('#outputStr').val())

            //    });
            //</ script >


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
                content = "<h1>ASP Project</h1><p>The main idea behind this project was to get acquainted with ASP and gain more experience on hybrid / PWA applications.</p>";
            }
        }

        public async Task<string> getJson()
        {
            //get request
            HttpClient hp = new HttpClient();
            hp.BaseAddress = new Uri(apiUrl);
            var response = (await hp.GetAsync("content-builder.php?type=asp") ).Content.ReadAsStringAsync().Result;

            
            return response;

        }



    }
}
