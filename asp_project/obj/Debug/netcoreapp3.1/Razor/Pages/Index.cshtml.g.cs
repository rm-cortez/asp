#pragma checksum "/Users/ronaldcortez/projects/asp_project/asp_project/Pages/Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "a0edbed0563a7d89a8dda80b21814e7364d533c8"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(asp_project.Pages.Pages_Index), @"mvc.1.0.razor-page", @"/Pages/Index.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a0edbed0563a7d89a8dda80b21814e7364d533c8", @"/Pages/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4fa12e8b213498771259391a635508062e193c8c", @"/Pages/_ViewImports.cshtml")]
    public class Pages_Index : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 3 "/Users/ronaldcortez/projects/asp_project/asp_project/Pages/Index.cshtml"
  
    ViewData["Title"] = "Home";
    //var _conn = Model.connString

#line default
#line hidden
#nullable disable
            WriteLiteral("\n<div class=\"col-md-12\">\n    <div class=\"row\">\n        <div class=\"col-md-12 vh-100\">\n            ");
#nullable restore
#line 11 "/Users/ronaldcortez/projects/asp_project/asp_project/Pages/Index.cshtml"
       Write(Html.Raw(Model.content));

#line default
#line hidden
#nullable disable
            WriteLiteral("\n        </div>\n        environment\n        <p>");
#nullable restore
#line 14 "/Users/ronaldcortez/projects/asp_project/asp_project/Pages/Index.cshtml"
      Write(Model.apiUrl);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\n    </div>\n</div>\n<div>\n    <input id=\"outputStr\"");
            BeginWriteAttribute("value", " value=\"", 332, "\"", 354, 1);
#nullable restore
#line 18 "/Users/ronaldcortez/projects/asp_project/asp_project/Pages/Index.cshtml"
WriteAttributeValue(" ", 340, Model.output, 341, 13, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(@" type=""hidden"" />
   
</div>


<script>
 
   

    var obj = JSON.parse(document.querySelector('#outputStr').value)
    console.log(obj)


    

    document.addEventListener(""DOMContentLoaded"", function () {
        console.log('jquery:', $('#outputStr').val())

    });
</script>

");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IndexModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<IndexModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<IndexModel>)PageContext?.ViewData;
        public IndexModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591
