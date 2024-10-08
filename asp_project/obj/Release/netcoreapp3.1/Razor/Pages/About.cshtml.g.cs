#pragma checksum "/Users/ronaldcortez/projects/asp_project/asp_project/Pages/About.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b2335c1023299ed66ec48bd698cd6337f3b9a83b"
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b2335c1023299ed66ec48bd698cd6337f3b9a83b", @"/Pages/About.cshtml")]
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
            WriteLiteral(@"
    <div class=""col-md-12"">
        
        <div class=""container bg-light rounded shadow p-4 my-4"">
            <div class=""row"">
                <div class=""col-md-12"">
                    <button type=""button"" class=""btn btn-sm btn-primary float-right"" onclick=""takePhoto()"">Scan</button>
                    <input type=""file""
                           id=""imageUpload""
                           class=""form-control form-control-sm""
                           onchange=""loadImage()""
                           accept=""image/*"" />
                </div>

                <div class=""col-md-12 text-center bg-dark my-4 rounded py-4 img-div"">
                    <img id=""img"" src=""scripts/cropped-logo.png""");
            BeginWriteAttribute("alt", " alt=\"", 795, "\"", 801, 0);
            EndWriteAttribute();
            WriteLiteral(@" width=""250"">
                </div>

                <div class=""col-md-12 text-white bg-dark  rounded py-4 result-div"">
                    <h2>Result:</h2>
                    <p id=""result""></p>
                </div>

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

function loadImage() {
    var file = document.querySelector('#imageUpload')
    //console.log(file.files[0])

    document.querySelector('#img').src = window.URL.createObjectURL(file.files[0])

    readImage()
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
