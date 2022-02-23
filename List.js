import { WebView } from 'react-native-webview';

export default function List({navigation, route}) {
    return (
        <WebView source={{uri : route.params.url}} />
    )
}

