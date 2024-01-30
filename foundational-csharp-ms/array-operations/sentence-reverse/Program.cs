string pangram = "The quick brown fox jumps over the lazy dog";

string[] pangramArray = pangram.Split(' ');
string[] newPangram = new string[pangramArray.Length];
for (int i = 0; i < pangramArray.Length; i++){
    char[] letters = pangramArray[i].ToCharArray();
    Array.Reverse(letters);
    newPangram[i] = new string(letters);
}
string result = String.Join(" ", newPangram);

Console.WriteLine($"Original string: {pangram}");
Console.WriteLine($"Reversed string: {result}");