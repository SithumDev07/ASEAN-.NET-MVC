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
                "~/Scripts/mainMenu.js"));

            bundles.Add(new Bundle("~/bundles/learner").Include(
                "~/Scripts/Charts.min.js",
                "~/Scripts/LearningPlan.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/app.css",
                      "~/Content/boxicons.min.css",
                      "~/Content/HomeSideBar.css"));

            bundles.Add(new StyleBundle("~/Content/learner").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/boxicons.min.css",
                      "~/Content/LearningPlan.css",
                      "~/Content/Header.css",
                      "~/Content/Footer.css"));

            bundles.Add(new StyleBundle("~/Content/courseadmin").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/boxicons.min.css",
                      "~/Content/CourseAdmin.css",
                      "~/Content/CourseAdminSideBar.css",
                      "~/Content/Header.css",
                      "~/Content/Footer.css"));
        }
    }
}
