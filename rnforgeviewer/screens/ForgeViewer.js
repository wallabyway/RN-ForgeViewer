import React from 'react';
import { Dimensions, WebView, View, StyleSheet } from 'react-native';

let width = Dimensions.get('window').width;

class ForgeViewer extends React.Component {
  render() {
    let HTML = `
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <link rel="stylesheet" href="https://developer.api.autodesk.com/derivativeservice/v2/viewers/style.min.css?v=v2.17" type="text/css">
            <script src="https://developer.api.autodesk.com/derivativeservice/v2/viewers/three.min.js?v=v2.17"></script>
            <script src="https://developer.api.autodesk.com/derivativeservice/v2/viewers/viewer3D.js?v=v2.17"></script>
            <script src="https://viewer-nodejs-tutorial.herokuapp.com/extensions/Viewing.Extension.Markup3D.min.js"></script>
        </head>
        <body style="margin:0"><div id="forgeViewer"></div> </body>
        <script>
            var svfURL = "https://lmv-models.s3.amazonaws.com/lmv_rocks/gears/output/1/0/1/Storyboard1.svf";
            var viewer;
            var states = [];
            function onSuccess() {
                viewer.setBackgroundColor(100,100,100,255,255,255);
                viewer.loadExtension("Viewing.Extension.Markup3D");
            };
            function initializeViewer() {
                var viewerDiv = document.querySelector('#forgeViewer');
                viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerDiv, {});
                var options = {
                    env: "Local",
                    useConsolidation: true,
                    useADP: false,
                };
                Autodesk.Viewing.Initializer( options, function() {
                    viewer.start(svfURL, options, onSuccess);            
                });
            };
            initializeViewer();
            function saveState(){
                states.push(viewer.getState());
            };
            var count=0;
            function restoreState(){
                viewer.restoreState(states[count]);
                count++;
            }
        </script>
    `;

    return (
        <View style={styles.container}>
        <WebView
            source={{ html: HTML }}
            style={{ width:width}}
            javaScriptEnabled={true}
            scrollEnabled={false}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});



export default ForgeViewer;