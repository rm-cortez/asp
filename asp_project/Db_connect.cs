using System;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace asp_project
{
    public class Db_connect
    {

        private readonly IConfiguration Configuration;
        public string connString;
        public SqlConnection connection;
        public SqlDataReader reader;
        public List<Dictionary<string, string>> lst;

        public Db_connect(IConfiguration configuration)
        {
            Configuration = configuration;
            connString = Configuration["ConnectionStrings:myDb1"];

        }

        public List<Dictionary<string,string>> exec_query(string query)
        {

            lst = new List<Dictionary<string, string>>();
            connection = new SqlConnection(connString);
            SqlCommand command = new SqlCommand(query, connection);
            

            try
            {
                connection.Open();



                reader = command.ExecuteReader();


                while (reader.Read())
                {


                    var obj = new Dictionary<string, string>();

                    for (int i = 0; i < reader.FieldCount; i++)
                    {
                        obj[reader.GetName(i)] = (reader.GetValue(i)).ToString();
                    }

                    lst.Add(obj);

                }
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }
            finally
            {
                close_conn();
            }

               

             return lst;
           
        }

        public string exec_non_query(string query)
        {
            string retString;
            connection = new SqlConnection(connString);
            SqlCommand command = new SqlCommand(query, connection);

            

            try
            {
                connection.Open();
                command.ExecuteNonQuery();
                 retString = (string)command.ExecuteScalar();
            }

            catch(Exception e)
            {
                retString = e.Message;

            }

            finally{
                close_conn();
            }


            return retString;
        }



        public void close_conn()
        {
            connection.Close();
            connection.Dispose();
        }
    }
}
