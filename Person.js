module.exports = function(fn, ln){
    this.firstName = fn;
    this.lastName = ln;
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName;
    }
};