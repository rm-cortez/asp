#pragma checksum "/Users/ronaldcortez/projects/asp_project/asp_project/Pages/About.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "494158fb56d68a00c6ff0425198eefc334fd02a8"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(asp_project.Pages.Pages_About), @"mvc.1.0.razor-page", @"/Pages/About.cshtml")]
namespace asp_project.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "/Users/ronaldcortez/projects/asp_project/asp_project/Pages/_ViewImports.cshtml"
using asp_project;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"494158fb56d68a00c6ff0425198eefc334fd02a8", @"/Pages/About.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4fa12e8b213498771259391a635508062e193c8c", @"/Pages/_ViewImports.cshtml")]
    public class Pages_About : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 3 "/Users/ronaldcortez/projects/asp_project/asp_project/Pages/About.cshtml"
  
    ViewData["Title"] = "About";
    

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n    <p>");
#nullable restore
#line 8 "/Users/ronaldcortez/projects/asp_project/asp_project/Pages/About.cshtml"
  Write(Model.status);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n    <button type=\"button\" class=\"btn btn-primary\" onClick=\"Btn_click()\">Primary</button>\r\n\r\n");
            WriteLiteral("<script>\r\n    function Btn_click() {\r\n        var name = \'");
#nullable restore
#line 34 "/Users/ronaldcortez/projects/asp_project/asp_project/Pages/About.cshtml"
               Write(Model.status);

#line default
#line hidden
#nullable disable
            WriteLiteral("\'\r\n            console.log(\'click\')\n            console.log(name)\n    }\r\n</script>\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<AboutModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<AboutModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<AboutModel>)PageContext?.ViewData;
        public AboutModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591
