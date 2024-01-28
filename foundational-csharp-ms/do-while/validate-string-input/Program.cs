/*
    Example:
        Enter your role name (Administrator, Manager, or User)
        Admin
        The role name that you entered, "Admin" is not valid. Enter your role name (Administrator, Manager, or User)
        Administrator
        Your input value (Administrator) has been accepted.

    Possible fixes: evaluate using toLower (or title case)
*/

string? userRole;
bool validRole = false;

do {
    Console.WriteLine("Enter your role name (Administrator, Manager, or User)");
    userRole = Console.ReadLine();

    switch (userRole) {
        case "Administrator": 
            Console.WriteLine($"Your input value ({userRole}) has been accepted.");
            validRole = true;
            break;
        case "Manager": 
            Console.WriteLine($"Your input value ({userRole}) has been accepted.");
            validRole = true;
            break;
        case "User": 
            Console.WriteLine($"Your input value ({userRole}) has been accepted.");
            validRole = true;
            break;
        default: 
            Console.WriteLine($"The role you entered, \"{userRole}\" is not valid.\n");
            break;
    }

} while (!validRole);