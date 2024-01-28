// RPG battle
// You (HERO) will keep attacking a boss until either one of you perishes.
// Hero moves first. Both do random damage (between 0 and 10)

Random random = new Random();
int heroHealthPoints = 10;
int bossHealthPoints = 10;

int damagePoints = 0;

do {
    Console.WriteLine($"HERO HP - {heroHealthPoints}");
    Console.WriteLine($"BOSS HP - {bossHealthPoints}\n");


    Console.WriteLine("HERO attacks BOSS!");
    damagePoints = random.Next(11);
    if (damagePoints == 0) Console.WriteLine("You missed...");
    else
    {
        bossHealthPoints -= damagePoints;
        Console.WriteLine($"You've dealt {damagePoints} damage!\n");
    }
    if (bossHealthPoints <= 0) break;


    Console.WriteLine("BOSS attacks!");
    damagePoints = random.Next(11);
    if (damagePoints == 0) Console.WriteLine("It missed!");
    else
    {
        heroHealthPoints -= damagePoints;
        Console.WriteLine($"BOSS dealt {damagePoints} damage!\n");
    }
} while (heroHealthPoints > 0);

if (heroHealthPoints > 0) Console.WriteLine($"\nYou won!\nCurrent HP: {heroHealthPoints}");
else Console.WriteLine("\nYou lose...");