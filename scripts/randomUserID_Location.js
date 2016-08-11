function randomUser(a) {
    //get ID and location from randomuser.me
    robID = a.results[0].login.salt;
    robLocation = a.results[0].location.state;

}
