let profileUsers = {
    username: "",
    usersOnline: [],
    usersOffline: [],
    location: "",
    locationsOnline: [],
    locationsOffline: [],


    login: function() {
        if (this.usersOnline.includes(this.username)) {
            console.log(`----WARNING! THIS USER ${this.username} ALREADY LOGGED IN----`);
        } else {
        this.usersOnline.push(this.username);
        this.locationsOnline.push(this.location)
        console.log(`USERS LOGGED IN:`);
        console.log(`${this.usersOnline}`);
        console.log(`From: ${this.locationsOnline}`);
    } 
},
    logout: function() {
        if (this.usersOffline.includes(this.username)) {
            console.log(`----WARNING! THIS USER ${this.username} ALREADY LOGGED OFF----`)
        } else {
        this.usersOffline.push(this.username)
        this.locationsOffline.push(this.location); 
        console.log(`USERS LOGGED OUT:`);
        console.log(`${this.usersOffline}`);
        console.log(`From ${this.locationsOffline}`);
        console.log(this.usersOnline.splice(this.usersOnline.indexOf(this.username), 1))
        console.log(this.locationsOnline.splice(this.locationsOnline.indexOf(this.location), 1))
    } }
}

function users(username, location, loginout) {
    profileUsers.username = username; //usernames are distinct; no double registered usernames.
    profileUsers.location = location;
    if (loginout == "in") {
        profileUsers.login();
    } else if (loginout == "out") {
        profileUsers.logout( );
    }
}
users("Chelsea", "Providence", "in");
users("Margie", "Boston", "in");
users("Margie", "Boston", "in");
users("Margie", "Boston", "out");
users("Jamie", "Colorado", "in");
users("Chelsea", "Providence", "out");
users("Arnell", "NYC", "in");
