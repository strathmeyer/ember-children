var App = Em.Application.create();

App.Person = Em.Object.extend({
    name: 'John Doe',
    canHaveChildren: function () {
        return (this.get('children').length < 3);
    }.property('children.length')
});

App.newPerson = function(name) {
    return App.Person.create({
        name: name,
        children: []
    });
};

App.rootPerson = App.Person.create({
    name: 'A',
    children: []
});

App.PersonView = Em.View.extend({
    templateName: 'person',
    addChild: function() {
        var children = this.getPath('content.children'),
            name = prompt('Name:');

        children.unshiftObject(App.newPerson(name));

        console.log(this, children);
    }
});