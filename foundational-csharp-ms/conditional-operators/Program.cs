// Heads or tails
using System;

Random random = new Random();
string heads = "Heads", tails = "Tails";

Console.WriteLine($"{(random.Next(2) == 1 ? heads : tails)}");


// Initialize permission and level values

string permission = "Admin|Manager";
int level = 55;

if (permission.Contains("Admin")) {
    if (level > 55) {
        Console.WriteLine("Welcome, Super Admin user.");
    } else {
        Console.WriteLine("Welcome, Admin user");
    }
} else if (permission.Contains("Manager") && level >= 20) {
    Console.WriteLine("Contact an Admin for access.");
} else {
    Console.WriteLine("You do not have sufficient privileges");
}