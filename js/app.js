var App = Em.Application.create();

App.Person = Em.Object.extend({
    name: 'John Doe'
});

App.newPerson = function(name) {
    return App.Person.create({
        name: name,
        children: []
    });
};

App.rootPerson = App.newPerson('Eve')

App.PersonView = Em.View.extend({
    templateName: 'person',
    person: null,
    addChild: function() {
        var children = this.getPath('person.children'),
            name = prompt('Name:');

        children.unshiftObject(App.newPerson(name));
    }
});