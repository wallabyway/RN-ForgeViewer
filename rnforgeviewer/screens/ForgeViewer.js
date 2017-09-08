import React, { Component } from 'react';
import { ScrollView, View, WebView } from 'react-native';
import { Tile, List, ListItem, Button, FormLabel, FormInput } from 'react-native-elements';

class ForgeViewer extends Component {

  render() {
    let HTML = `
        <head>
            <link rel="stylesheet" href="https://developer.api.autodesk.com/viewingservice/v1/viewers/style.min.css?v=v2.16" type="text/css">
            <link rel="stylesheet" href="https://developer.api.autodesk.com/derivativeservice/v2/viewers/style.min.css?v=v2.17" type="text/css">
            <script src="https://developer.api.autodesk.com/derivativeservice/v2/viewers/three.min.js?v=v2.17"></script>
            <script src="https://developer.api.autodesk.com/derivativeservice/v2/viewers/viewer3D.js?v=v2.17"></script>
            <script src="https://viewer-nodejs-tutorial.herokuapp.com/extensions/Viewing.Extension.Markup3D.min.js"></script>
        </head>
        <div id="myContent">
            <button onclick="saveState()">Save State</button>
            <button onclick="restoreState()">Restore State</button>
        </div>
        <div id="forgeViewer" ></div>
        <script>
            document.querySelector('#myContent').style.backgroundColor = 'red';
            alert(Autodesk);
            var svfURL = "https://lmv-models.s3.amazonaws.com/lmv_rocks/gears/output/1/0/1/Storyboard1.svf";
            var viewer;
            var states = [];
            function onSuccess() {
                alert('Success');
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
                alert('Start');
                Autodesk.Viewing.Initializer( options, function() {
                    viewer.start(svfURL, options, onSuccess);            
                });
            };
            initializeViewer();
            function saveState(){
                states.push(viewer.getState());
                alert(states);
            };
            var count=0;
            function restoreState(){
                viewer.restoreState(states[count]);
                count++;
            }
        </script>
    `;

    return (
      <WebView
        source={{ html: HTML }}
        style={{marginTop: 0, width:350}}
        javaScriptEnabled={true}
      />
    );
  }
}

export default ForgeViewer;