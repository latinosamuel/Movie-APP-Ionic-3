import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from './../providers/database/database'
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //I can only open the TAB when the tables were created
  rootPage:any = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dbprovider : DatabaseProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

      dbprovider.createDatabase().then(() =>{
        this.openTabsPage(splashScreen);
        //alert("Database created successfully");
      }).catch(e => {
        //alert("Database not created successfully")
        console.error(e)
        this.openTabsPage(splashScreen);
    });
    });
  }

  //TABS openings when tables are created successfully
  public openTabsPage(splashScreen : SplashScreen){
    splashScreen.hide();
    this.rootPage = TabsPage;
  }
}
