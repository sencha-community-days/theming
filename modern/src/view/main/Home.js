Ext.define('ThemingDemoApp.view.main.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    scrollable: true,

    items: [{
        xtype: 'container',
        html: '<center><h2>Sencha Community Days Demo Application</h2></center>'
    }, {
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            xtype: 'container',
            flex: 1,
            padding: 10,
            height: '100%',
            bind: {
                html: '{loremIpsum}'
            }
        },
        items: [{}]
    }, {
        xtype: 'panel',
        title: 'Sencha Community Days',
        height: 200,
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
