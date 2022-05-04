using System.Web;
using System.Web.Optimization;

namespace Web_Handson_MVC
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new Bundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/bootstrap.bundle.js"));

            bundles.Add(new Bundle("~/bundles/app").Include(
                "~/Scripts/swiper-bundle.min.js",
                "~/Scripts/app.js",
                "~/Scripts/SideBar.js"));

            bundles.Add(new Bundle("~/bundles/learner").Include(
                "~/Scripts/Charts.min.js",
                "~/Scripts/Sortable.js",
                "~/Scripts/LearningPlan.js",
                "~/Scripts/SideBar.js"
                ));

            bundles.Add(new Bundle("~/bundles/courseadmin").Include(
                "~/Scripts/SideBar.js"
                ));

            bundles.Add(new Bundle("~/bundles/domainexpert").Include(
                "~/Scripts/SideBar.js",
                "~/Scripts/DomainExpertData.js"
                ));

            bundles.Add(new Bundle("~/bundles/evaluator").Include(
                "~/Scripts/SideBar.js",
                "~/Scripts/Sortable.js",
                "~/Scripts/EvaluatorData.js"
                ));

            bundles.Add(new Bundle("~/bundles/itadmin").Include(
                "~/Scripts/SideBar.js",
                "~/Scripts/ITAdminData.js"
                ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/ColorsTypography.css",
                      "~/Content/app.css",
                      "~/Content/Header.css",
                      "~/Content/Footer.css",
                      "~/Content/SideBar.css",
                      "~/Content/HomeSideBar.css",
                      "~/Content/Banner.css"));

            bundles.Add(new StyleBundle("~/Content/learner").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/ColorsTypography.css",
                      "~/Content/LearningPlan.css",
                      "~/Content/CustomTable.css",
                      "~/Content/SideBar.css",
                      "~/Content/Header.css",
                      "~/Content/Footer.css"));

            bundles.Add(new StyleBundle("~/Content/courseadmin").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/ColorsTypography.css",
                      "~/Content/CourseAdmin.css",
                      "~/Content/SideBar.css",
                      "~/Content/Header.css",
                      "~/Content/Footer.css"));

            bundles.Add(new StyleBundle("~/Content/domainexpert").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/ColorsTypography.css",
                      "~/Content/CustomTable.css",
                      "~/Content/Layout.css",
                      "~/Content/SideBar.css",
                      "~/Content/Header.css",
                      "~/Content/Footer.css"));

            bundles.Add(new StyleBundle("~/Content/evaluator").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/ColorsTypography.css",
                      "~/Content/SideBar.css",
                      "~/Content/CustomTable.css",
                      "~/Content/Layout.css",
                      "~/Content/Header.css",
                      "~/Content/Footer.css"));

            bundles.Add(new StyleBundle("~/Content/itadmin").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/ColorsTypography.css",
                      "~/Content/DomainExpert.css",
                      "~/Content/SideBar.css",
                      "~/Content/Header.css",
                      "~/Content/Footer.css"));
        }
    }
}
