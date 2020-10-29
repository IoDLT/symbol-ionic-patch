 # Symbol Ionic Patch & Template
 
 This repo contains a patch file (`patch.js`) to enable a developer to develop Catapult mobile apps via Ionic and Capacitor.   Using this, you can interact via REST gateway of Catapult using websockest and RxJs API calls. 

 # Running
 
 To start, clone this repo: 

 ``` 
 $ git clone https://github.com/CrackTheCode016/symbol-ionic-patch.git
 ```

 Next, install dependencies:
 
  ```
  $ cd symbol-ionic-patch
  $ npm install
  ```

  Once dependencies are installed, run `patch.js`, and you should be all done:
  ```
  $ node patch.js
  ```

  To serve, make sure you have the `ionic` CLI installed: 

  ```
  $ npm install -g ionic
  ```

  Then server: 

  ```
  $ ionic serve
  ```

  If successful, we should see the template load and a private key being generated on the screen!

  ![nem2 ionic image](https://i.ibb.co/RpFX8kJ/Screen-Shot-2019-07-12-at-3-45-45-PM.png)
  