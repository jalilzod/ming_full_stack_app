let User =  function(data){
    this.data = data;
}



User.prototype.userDetails = function(){
    console.log(this.data);
}