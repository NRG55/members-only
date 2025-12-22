# Members Only

[Live Version](https://nrg55-members-only.koyeb.app/) 

A full-stack members only application. An exclusive clubhouse where members can write anonymous posts. There are 4 types of users: no account, with account, member and admin. Users with and without account can see messages while only users with account, members and admin can create new ones. Only members and admin can see when and by whom a message was created and only admins can delete messages.

### Tech Stack

**Frontend:**  
- EJS templates
- Styling: CSS   

**Backend:**  
- Node.js,
- Express (session, validator)
- Connect-pg-simple (session store)
- Passport.js (bcrypt)   
- Database: PostgreSQL (node-postgres)
- DB Hosting: neon.tech
- Server Hosting: koyeb.com

 ### Features
- Local strategy Passport.js authentication
- PostgreSQL session store
- Forms fields sanitization and validation
- Securing passwords with bcrypt
 
**Account Permissions**

|              |  View Messages  |  Create Messages  |  See message date & author   |  Delete messages  |
|  ----------  |  :-----------:  |  :-------------:  |  :-----------------------:  |  :-------------:  |
|  No account  |       yes       |        no         |              no             |         no        |
|  Account     |       yes       |        yes        |              no             |         no        |
|  Member      |       yes       |        yes        |              yes            |         no        |
|  Admin       |       yes       |        yes        |              yes            |         yes       |