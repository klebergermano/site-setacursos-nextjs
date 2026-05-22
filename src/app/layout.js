

import Script from "next/script";

export default function RootLayout({ children }) {



    return (
        <html lang="pt-br">
            <body>
                <head>


                    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-8W8TS13G5X"></Script>

                    <Script id="google-analytics" strategy="afterInteractive">
                        {`              
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-8W8TS13G5X');
                        `
                        }

                    </Script>
                </head>

                <div>


                    {children}

                </div>
            </body>
        </html>
    );
}
