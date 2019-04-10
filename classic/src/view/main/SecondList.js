Ext.define('ThemingDemoApp.view.main.SecondList', {
    extend: 'Ext.grid.Panel',
    xtype: 'secondlist',

    requires: [
        'ThemingDemoApp.store.Groups'
    ],

    title: 'Groups',

    store: {
        type: 'groups'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name', flex: 1 },
        { text: 'Members', dataIndex: 'membercount' }
    ]
});
