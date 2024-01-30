string orderStream = "B123,C234,A345,C15,B177,G3003,C235,B179";

string[] orderArray = orderStream.Split(',');
Array.Sort(orderArray);

foreach(string order in orderArray){
    Console.Write(order);

    // This is honestly pretty lazy. Better implementation would be to make counters and make sure the order has 1 letter followed by 3 digits
    // Update: I just saw the answer, apparently this is acceptable (lmao)
    if (order.Length != 4 )
        Console.Write("\t- Error");

    Console.Write('\n');
}