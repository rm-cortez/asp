#pragma checksum "/Users/ronaldcortez/projects/asp_project/asp_project/Pages/About.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "8d49f270183e3828b3fced34d063b5957d78e16c"
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"8d49f270183e3828b3fced34d063b5957d78e16c", @"/Pages/About.cshtml")]
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
            WriteLiteral("\r\n    <div class=\"col-md-12\">\r\n        <p>");
#nullable restore
#line 9 "/Users/ronaldcortez/projects/asp_project/asp_project/Pages/About.cshtml"
      Write(Model.status);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n        <button type=\"button\" class=\"btn btn-primary\" onClick=\"Btn_click()\">Primary</button>\r\n        <div class=\"container bg-white rounded shadow p-4 my-4\">\r\n          <div class=\"row\">\r\n            <img id=\"img\" src=\"scripts/bc39.png\"");
            BeginWriteAttribute("alt", " alt=\"", 366, "\"", 372, 0);
            EndWriteAttribute();
            WriteLiteral(@" width=""250"">
            <button type=""button"" name=""button"" onclick=""takePhoto()"">Scan</button>

          </div>
        </div>
    </div>


<script type=""text/javascript"">

function takePhoto(){

  //console.log(""capacitor"", Capacitor.Plugins)

  Capacitor.Plugins.Camera.getPhoto({
    resultType: 'base64',
    source: 'CAMERA',
    quality: 100

  })
  .then(img => {
    //console.log(""img"", img)

    let base64Img = `data:image/${img.format};base64,${img.base64String}`
    document.querySelector('#img').src = base64Img

    readImage()

  })

}
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<AboutModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<AboutModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<AboutModel>)PageContext?.ViewData;
        public AboutModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591
