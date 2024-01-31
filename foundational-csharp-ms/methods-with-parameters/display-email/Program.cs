string[,] corporate = 
{
    {"Robert", "Bavin"}, {"Simon", "Bright"},
    {"Kim", "Sinclair"}, {"Aashrita", "Kamath"},
    {"Sarah", "Delucchi"}, {"Sinan", "Ali"}
};

string[,] external = 
{
    {"Vinnie", "Ashton"}, {"Cody", "Dysart"},
    {"Shay", "Lawrence"}, {"Daren", "Valdes"}
};

string externalDomain = "hayworth.com";

for (int i = 0; i < corporate.GetLength(0); i++) 
{
    // display internal email addresses
    adjustEmail(corporate[i,0], corporate[i,1], domainName: "contoso.com");
}

for (int i = 0; i < external.GetLength(0); i++) 
{
    // display external email addresses
    adjustEmail(external[i,0], external[i,1], externalDomain);
}

void adjustEmail (string firstName, string lastName, string domainName)
{
    string firstNameLower = firstName.ToLower(); // didn't really know how to make it a one-liner
    Console.WriteLine($"{firstNameLower.Substring(0,2)}{lastName.ToLower()}@{domainName}");
}