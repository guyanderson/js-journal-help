function Entry(title, body) {
    this.title = title;
    this.body = body;
    alert(this.body);
}

Entry.prototype.journalCount = function(){
    alert(this.body);
    var bodyCount = this.body.split(' ').length;
    body
    return bodyCount;
};

exports.entryModule = Entry;
