/*
    Prints a reversed string and counts how many times a hard-coded character repeats
*/

string initialMessage = "The quick brown fox jumps over the lazy dog.";

char[] message = initialMessage.ToCharArray();
Array.Reverse(message);

int letterCount = 0;

foreach (char letter in message) if (letter == 'o') letterCount++;

string finalMessage = new String(message);

Console.WriteLine(finalMessage);
Console.WriteLine($"'o' appears {letterCount} times.");