/*
    Expected output:
        I like pizza
        I like roast chicken
        I like salad
        I like all three of the menu choices

    Expected output didn't happen (should also find a better way to trim the first space)
*/

string[] myStrings = new string[2] { "I like pizza. I like roast chicken. I like salad", "I like all three of the menu choices" };

foreach(string sentence in myStrings) {
    foreach(char word in sentence) {
        if (word == '.') {
            Console.Write('\n'); 
            continue;
        }
        Console.Write(word);
    }
    Console.WriteLine();
}