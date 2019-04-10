/**
 * This view is an example list of people.
 */
Ext.define('ThemingDemoApp.view.main.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'mainform',

    title: 'Settings',

    bodyPadding: 5,

    // Fields will be arranged vertically, stretched to full width
    defaults: {
        anchor: '100%'
    },

    // The fields
    defaultType: 'textfield',
    items: [{
        label: 'App title',
        name: 'title',
        required: true
    },{
        label: 'Logo path',
        name: 'logo',
        required: true

    }, {
        label: 'API Key',
        name: 'key',
        required: true
    }, {
        xtype: 'combobox',
        label: 'Theme',
        name: 'last',
        required: true,
        displayField: 'name',
        valueField: 'name',
        forceSelection: true,
        store: [{
            name: 'Dark'
        }, {
            name: 'Light'
        }],
        value: 'Light'
    }, {
        xtype: 'fieldcontainer',
        label: 'Visible areas',
        defaultType: 'checkboxfield',
        items: [
            {
                boxLabel  : 'Home',
                name      : 'areas',
                inputValue: '1',
                checked   : true,
                id        : 'checkbox1'
            }, {
                boxLabel  : 'Users',
                name      : 'areas',
                inputValue: '2',
                checked   : true,
                id        : 'checkbox2'
            }, {
                boxLabel  : 'Settings',
                name      : 'areas',
                inputValue: '3',
                checked   : true,
                id        : 'checkbox3'
            }
        ]
    }],

    // Reset and Submit buttons
    buttons: [{
        text: 'Reset',
        iconCls: 'x-fa fa-repeat',
        handler: function () {
            this.up('form').getForm().reset();
        }
    }, {
        text: 'Submit',
        disabled: true,
        iconCls: 'x-fa fa-paper-plane',
        handler: function () {
            var form = this.up('form').getForm();
            if (form.isValid()) {
                form.submit({
                    success: function (form, action) {
                        Ext.Msg.alert('Success', action.result.msg);
                    },
                    failure: function (form, action) {
                        Ext.Msg.alert('Failed', action.result.msg);
                    }
                });
            }
        }
    }]
});
