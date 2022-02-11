import React, { useState } from 'react';
import { WebView } from "react-native-webview";

export default function NewView({ route }) {
    const url = route.params.url;
    return (
        <WebView source={{ uri: url }} />
    );
}