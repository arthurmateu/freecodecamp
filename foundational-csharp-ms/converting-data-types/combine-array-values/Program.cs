string[] values = { "12.3", "45", "ABC", "11", "DEF" };
string sentence = "";
double elementIsNumber = 0; // Has to initialize first, for it to be able to be fed into TryParse
double result = 0;

foreach(string element in values){
    if (double.TryParse(element, out elementIsNumber))
        result += elementIsNumber;
    else sentence += element;
};

Console.WriteLine($"Sentence: {sentence}");
Console.WriteLine($"Result: {result}");