import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="<https://app.snipcart.com>" />
        <link rel="preconnect" href="<https://cdn.snipcart.com>" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          async
          src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"
        ></script>
        <link
          id="snipcart-theme"
          type="text/css"
          href="https://app.snipcart.com/themes/base/snipcart.css"
          rel="stylesheet"
        />

        <link
          type="text/css"
          href="./_document.module.css"
          rel="stylesheet /"
        ></link>
        <div
          hidden
          data-config-modal-style="side"
          id="snipcart"
          data-api-key="MzU0MTdhNTYtMGE2Mi00ZmE1LTg3YmQtNTllYTc1OTQ2ZjljNjM4MjI5MzgwMjk5NTEzNTA4"
        ></div>
      </body>
    </Html>
  );
}
