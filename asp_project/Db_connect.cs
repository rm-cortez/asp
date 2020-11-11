using System;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;

namespace asp_project
{
    public class Db_connect
    {

        private readonly IConfiguration Configuration;
        public string connString;
        public SqlConnection connection;

        public Db_connect(IConfiguration configuration)
        {
            Configuration = configuration;
           

        }

        public string exec_query(string query,string type = "select")
        {
            connString = Configuration["ConnectionStrings:myDb1"];
            connection = new SqlConnection(connString);
            SqlCommand command = new SqlCommand(query, connection);

            connection.Open();

            if(type.Equals("select"))
            {
                string retSelect = "";

                SqlDataReader reader = command.ExecuteReader();
                
                while (reader.Read())
                {
                    retSelect += $" " +
                        $"{reader.GetName(0)} :{reader.GetValue(0)} " +
                        $"-- " +
                        $"{reader.GetName(1)}:{reader.GetValue(1)} \n";

                }

                close_conn();
                return retSelect;

            }
            else
            {
                //command.CommandType = CommandType.StoredProcedure;
                command.ExecuteNonQuery();
                close_conn();
                return "";
            }


            
        }

        

        public void close_conn()
        {
            connection.Close();
            connection.Dispose();
        }
    }
}
