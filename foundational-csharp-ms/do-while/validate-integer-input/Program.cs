/*
    Example:
        Enter an integer value between 5 and 10
        two
        Sorry, you entered an invalid number, please try again
        2
        You entered 2. Please enter a number between 5 and 10.
        7
        Your input value (7) has been accepted.
*/

string? readInputNumber;
int inputNumericValue = 0;
bool validNumber = false;
Console.WriteLine("Enter an integer value between 5 and 10");

do {
    readInputNumber = Console.ReadLine();
    if (int.TryParse(readInputNumber, out inputNumericValue)) {
        if (inputNumericValue >= 5 && inputNumericValue <= 10)
            validNumber = true;
        else
            Console.WriteLine($"Sorry, you entered {inputNumericValue}. Please enter a number between 5 and 10.");
    }
    else
        Console.WriteLine("Sorry, you entered an invalid number, please try again.");

} while(!validNumber);

Console.WriteLine($"Your input value ({inputNumericValue}) has been accepted");