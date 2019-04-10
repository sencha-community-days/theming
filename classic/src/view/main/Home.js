Ext.define('ThemingDemoApp.view.main.Home', {
    extend: 'Ext.panel.Panel',
    xtype: 'home',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [{
        xtype: 'container',
        html: '<center><h1>Sencha Community Days Demo Application</h1></center>'
    }, {
        xtype: 'container',
        layout: 'hbox',
        flex: 1,
        defaults: {
            xtype: 'container',
            flex: 1,
            padding: 10,
            height: '100%',
            bind: {
                html: '{loremIpsum}'
            }
        },
        items: [{}, {}]
    }, {
        xtype: 'panel',
        title: 'Sencha Community Days',
        flex: 1,
        bodyStyle: {
            background: 'linear-gradient(to bottom, rgba(56, 190, 169, .9), rgba(28, 167, 128, .9), rgba(3, 138, 180, .9))'
        },
        items: [{
            xtype: 'image',
            src: 'resources/logo.svg',
            padding: 10,
            height: '100%'
        }]
    }]
});
