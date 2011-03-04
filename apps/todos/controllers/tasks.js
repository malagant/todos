// ==========================================================================
// Project:   Todos.tasksController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */
Todos.taskController = SC.ObjectController.create({
   contentBinding: SC.Binding.single('Todos.taskArrayController.selection')
});
/** @class

        (Document Your Controller Here)

 @extends SC.ArrayController
 */
Todos.taskArrayController = SC.ArrayController.create(
        SC.CollectionViewDelegate, {
    collectionViewDeleteContent: function(view, content, indexes) {
        var records = indexes.map(function(idx) {
            return this.objectAt(idx);
        }, this);
        records.invoke('destroy');

        var selIndex = indexes.get('min') -1;
        if(selIndex < 0) selIndex = 0;
        this.selectObject(this.objectAt(selIndex));
    }
    ,
    summary: function() {
        var len = this.get('length'), ret;

        if (len && len > 0) {
            ret = len == 1 ? "1 task" : "%@ tasks".fmt(len);
        } else {
            ret = "No tasks";
        }

        return ret;
    }.property('length').cacheable(),

    addTask: function() {
        var task;

        task = Todos.store.createRecord(Todos.Task, {
            'description' : 'New Task',
            'isDone' : false
        });

        this.selectObject(task);

        this.invokeLast(function() {
            var contentIndex = this.indexOf(task);
            var list = Todos.mainPage.getPath('mainPane.middleView.topLeftView.contentView');
            var listItem = list.itemViewForContentIndex(contentIndex);
            listItem.beginEditing();
        });

        return YES;
    },
    toggleDone: function() {
        var sel = this.get('selection');
        sel.setEach('isDone', !sel.everyProperty('isDone'));
        return YES;
    }
});
