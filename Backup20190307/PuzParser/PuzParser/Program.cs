using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace PuzParser
{
    class Program
    {
        static int s = 1;
        static int l = 1;
        static int p = 1;
        static int smax = 11;
        static int lmax = 11;
        static int pmax = 13;
        static void Main(string[] args)
        {
            //ParseTextFiles();
            //ParseTbtFiles();
            ParseIO();
            Console.ReadLine();
        }//end main

        static void ParseIO()
        {

            string filepath = Environment.GetFolderPath(Environment.SpecialFolder.Desktop);
            DirectoryInfo d = new DirectoryInfo("IO\\");

            foreach (var file in d.GetFiles("*.txt"))
            {
                //Directory.Move(file.FullName, filepath + "\\TextFiles\\" + file.Name);
                string fulltext = ReadText("IO\\" + file.Name );
                fulltext = fulltext.Replace("\"", "\\\"");
                fulltext = fulltext.Replace("\'", "\\\'");
                Console.Write("\"" +file.Name + "\":\"" + fulltext + "\",\n");
                Console.Write("------\n");
                //Console.Write(file.Name+"\n");
            }

        }
        static void ParseTextFiles() {

            //Console.Write(Directory.GetCurrentDirectory() + "\n");
            for (s = 1; s < smax; s++)
            {
                for (l = 1; l < lmax; l++)
                {
                    for (p = 1; p < pmax; p++)
                    {
                        string code = makecode(s, l, p);
                        if (File.Exists("Text\\" + code + ".txt"))
                        {
                            //Console.Write(code +"\n");
                            string fulltext = ReadText("Text\\" + code + ".txt");
                            fulltext = fulltext.Replace("\"", "\\\"");
                            fulltext = fulltext.Replace("\'", "\\\'");
                            Console.Write("\"" + code + "\":\"" + fulltext + "\",\n");
                        }
                        else
                        {
                            //Console.Write("_______________________"+ code + "\n");
                        }
                    }
                }
            }
        }
        static void ParseTbtFiles()
        {
          

            //Console.Write(Directory.GetCurrentDirectory() + "\n");
            for (s = 1; s < smax; s++)
            {
                for (l = 1; l < lmax; l++)
                {
                    for (p = 1; p < pmax; p++)
                    {
                        string code = makecode(s, l, p);
                        if (File.Exists("Tbt\\" + code + ".tbt"))
                        {
                            //Console.Write(code +"\n");
                            string fulltext = ReadTbt("Tbt\\" + code + ".tbt");
                            fulltext = fulltext.Replace("\"", "");
                            Console.Write("\"" + code + "\":\"" + fulltext + "\",\n" );
                        }
                        else
                        {
                            //Console.Write("_______________________"+ code + "\n");
                        }
                    }
                }
            }
        }
        static string ReadText(string code) {
            string res = "";
            string line;
            System.IO.StreamReader file =  new System.IO.StreamReader(code );
            while ((line = file.ReadLine()) != null)
            {
                res += line + "newline,";
                 
            }
            res += "newlineremoveme";
            res = res.Replace("newline,newlineremoveme", "");
            file.Close();
            return res;

        }
        static string ReadTbt(string code)
        {
            string res = "";
            string line;
            System.IO.StreamReader file = new System.IO.StreamReader(code);
            bool firstline = true;
            while ((line = file.ReadLine()) != null)
            {
                if (firstline)
                {
                    //skip first line
                    firstline = false;
                }
                else
                {
                    res += line + ",";
                }

            }
            res += "newlineremoveme";
            res = res.Replace(",newlineremoveme", "");
            file.Close();
            return res;

        }
        static void Write(string filename, string line) {
            using (System.IO.StreamWriter file =new System.IO.StreamWriter(filename))
            { 
                        file.WriteLine(line);
            }
        }

        static string makecode(int s, int l, int p) {
            return pad(s)+"-"+pad(l)+"-"+pad(p);
        }
         

        static string pad(int i)
        {
            string res = "";
            if (i < 10)
            {
                res = "0" + i.ToString() + "";
            }
            else { res = i.ToString(); }
            return res;
        }



    }// end class
}//end namesspace

/*
namespace Calculator
    {
        class Calculator
        {
            public static double DoOperation(double num1, double num2, string op)
            {
                double result = double.NaN; // Default value is "not-a-number" which we use if an operation, such as division, could result in an error

                // Use a switch statement to do the math
                switch (op)
                {
                    case "a":
                        result = num1 + num2;
                        break;
                    case "s":
                        result = num1 - num2;
                        break;
                    case "m":
                        result = num1 * num2;
                        break;
                    case "d":
                        // Ask the user to enter a non-zero divisor
                        if (num2 != 0)
                        {
                            result = num1 / num2;
                        }
                        break;
                    // Return text for an incorrect option entry
                    default:
                        break;
                }
                return result;
            }
        }

        class Program
        {
            static void Main(string[] args)
            {
                bool endApp = false;
                // Display title as the C# console calculator app
                Console.WriteLine("Console Calculator in C#\r");
                Console.WriteLine("------------------------\n");

                while (!endApp)
                {
                    // Declare variables and set to empty
                    string numInput1 = "";
                    string numInput2 = "";
                    double result = 0;

                    // Ask the user to type the first number
                    Console.Write("Type a number, and then press Enter: ");
                    numInput1 = Console.ReadLine();

                    double cleanNum1 = 0;
                    while (!double.TryParse(numInput1, out cleanNum1))
                    {
                        Console.Write("This is not valid input. Please enter an integer value: ");
                        numInput1 = Console.ReadLine();
                    }

                    // Ask the user to type the second number
                    Console.Write("Type another number, and then press Enter: ");
                    numInput2 = Console.ReadLine();

                    double cleanNum2 = 0;
                    while (!double.TryParse(numInput2, out cleanNum2))
                    {
                        Console.Write("This is not valid input. Please enter an integer value: ");
                        numInput2 = Console.ReadLine();
                    }

                    // Ask the user to choose an operator
                    Console.WriteLine("Choose an operator from the following list:");
                    Console.WriteLine("\ta - Add");
                    Console.WriteLine("\ts - Subtract");
                    Console.WriteLine("\tm - Multiply");
                    Console.WriteLine("\td - Divide");
                    Console.Write("Your option? ");

                    string op = Console.ReadLine();

                    try
                    {
                        result = Calculator.DoOperation(cleanNum1, cleanNum2, op);
                        if (double.IsNaN(result))
                        {
                            Console.WriteLine("This operation will result in a mathematical error.\n");
                        }
                        else Console.WriteLine("Your result: {0:0.##}\n", result);
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine("Oh no! An exception occurred trying to do the math.\n - Details: " + e.Message);
                    }

                    Console.WriteLine("------------------------\n");

                    // Wait for the user to respond before closing
                    Console.Write("Press 'n' and Enter to close the app, or press any other key and Enter to continue: ");
                    if (Console.ReadLine() == "n") endApp = true;

                    Console.WriteLine("\n"); // Friendly linespacing
                }
                return;
            }
        }
    }
    */
