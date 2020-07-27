import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD1i4IAZ5zHQ0K8KBaYQ4cbCg_jXrdO77Q",
  authDomain: "mlab-e47b1.firebaseapp.com",
  databaseURL: "https://mlab-e47b1.firebaseio.com",
  projectId: "mlab-e47b1",
  storageBucket: "mlab-e47b1.appspot.com",
  messagingSenderId: "237273132243",
  appId: "1:237273132243:web:bcdc2ff5ec481f0a633826"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }
}
 
export default Firebase;