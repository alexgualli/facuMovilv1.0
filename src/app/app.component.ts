import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { NativeStorage} from '@ionic-native/native-storage/ngx';






@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,

    private nativeStorage: NativeStorage,
    private router: Router
  ) {

      /*this.platform.ready().then(() => {
        this.nativeStorage.getItem('facebook_user').then(data => {
          this.router.navigate(["/menu/home"]);
          this.splashScreen.hide();
          
        }, err => {
          this.router.navigate(["/login"]);
          this.splashScreen.hide();
        });

        this.statusBar.styleDefault();
      });
*/

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  
}
