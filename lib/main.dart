import 'package:flutter/material.dart';
import 'package:kraken/kraken.dart';
import 'dart:ui';

void main() {
  runApp(GalleryApp());
}

class GalleryApp extends StatelessWidget {

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MainScreen(),
    );
  }
}

class MainScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    
    KrakenNavigationDelegate navigationDelegate = KrakenNavigationDelegate();
    navigationDelegate.setDecisionHandler((KrakenNavigationAction action) async {
      Navigator.push(context, MaterialPageRoute(builder: (_) {
        return DetailScreen(action);
      }));

      return KrakenNavigationActionPolicy.allow;
    });

    return Kraken(
      viewportWidth: window.physicalSize.width / window.devicePixelRatio,
      viewportHeight: window.physicalSize.height / window.devicePixelRatio,
      bundlePath: 'demos/gallery/build/kraken/index.js',
      // bundlePath: 'demos/hello-react/build/static/js/bundle.js',
      navigationDelegate: navigationDelegate,
    );
  }
}

class DetailScreen extends StatelessWidget {
  KrakenNavigationAction action;
  DetailScreen(KrakenNavigationAction this.action);
  @override
  Widget build(BuildContext context) {

    return Scaffold(
      body: Kraken(
        viewportWidth: window.physicalSize.width / window.devicePixelRatio,
        viewportHeight: window.physicalSize.height / window.devicePixelRatio,
        bundlePath: action.target,
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () {
          Navigator.pop(context);
        },
        label: Text('Back'),
        icon: Icon(Icons.arrow_back_rounded),
        backgroundColor: Colors.grey,
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.startFloat,
    );

  }
}
