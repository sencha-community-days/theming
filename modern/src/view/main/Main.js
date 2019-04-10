/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('ThemingDemoApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit',
        'ThemingDemoApp.view.main.Home',
        'ThemingDemoApp.view.main.List',
        'ThemingDemoApp.view.main.SecondList',
        'ThemingDemoApp.view.main.Form'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',

    items: [
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            items: [{
                xtype: 'home'
            }]
        },{
            title: 'Users',
            iconCls: 'x-fa fa-user',
            layout: 'vbox',
            items: [{
                xtype: 'mainlist',
                flex: 1
            }, {
                xtype: 'secondlist',
                flex: 1
            }]
        },{
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            layout: 'fit',
            items: [{
                xtype: 'mainform'
            }]
        }
    ]
});
