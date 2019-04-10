/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ThemingDemoApp.Application',

    name: 'ThemingDemoApp',

    requires: [
        // This will automatically load all classes in the ThemingDemoApp namespace
        // so that application classes do not need to require each other.
        'ThemingDemoApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'ThemingDemoApp.view.main.Main'
});
