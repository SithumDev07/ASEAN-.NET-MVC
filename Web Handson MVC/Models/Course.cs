using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web_Handson_MVC.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string ImgSrc { get; set; }
        public float Rating { get; set; }
    }
}