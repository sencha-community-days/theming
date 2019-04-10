Ext.define('ThemingDemoApp.store.Groups', {
    extend: 'Ext.data.Store',

    alias: 'store.groups',

    model: 'ThemingDemoApp.model.Group',

    data: { items: [
        { name: 'User', membercount: 22 },
        { name: 'Viewer', membercount: 28 },
        { name: 'Admin',   membercount: 3 }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
