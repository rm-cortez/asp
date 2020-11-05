using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;


namespace MyApp.Namespace
{
    public class AboutModel : PageModel
    {
        public void OnGet()
        {
        }
        public void Btn_click()
        {
            // Console.WriteLine("click");
            Debug.WriteLine("click");

        }
    }
  


}
