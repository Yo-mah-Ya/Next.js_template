import Document, { Html, Head, Main, NextScript } from "next/document";

class MainDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <script> </script>
                </body>
            </Html>
        );
    }
}

export default MainDocument;
