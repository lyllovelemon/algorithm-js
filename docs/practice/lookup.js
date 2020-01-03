function lookUp(firstName, prop){
    for(var i=0;i<contacts.length;i++)
    {
        if(firstName===contacts[i].firstName)
        {
            if(contacts[i].hasOwnProperty(prop))
            {
                return contacts[i][prop];
            }
            else
            {
                return "No such property";
            }
        }
    }
    return "No such contact";

}