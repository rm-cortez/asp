using System;
using System.Collections.Generic;

namespace asp_project
{
    public class DefaultData
    {
        public List<Dictionary<string, string>> lst;

        public DefaultData()
        {
            lst = generateData();
        }

        public List<Dictionary<string, string>> generateData()
        {
            List<Dictionary<string, string>> lst = new List<Dictionary<string, string>>();


            lst.Add(new Dictionary<string, string>() {
                        {"name","php" },
                        { "level","1"}

                    });
            lst.Add(new Dictionary<string, string>() {
                        {"name","Asp" },
                        { "level","2"}

                    });

            return lst;
        }
    }
}
