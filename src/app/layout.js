

import Script from "next/script";
export const metadata = {
    title: "Seta Cursos",
    description: "Cursos de T.I, Programação, Informática, Excel, Inglês e Tecnologia com foco prático para o mercado de trabalho.",

    keywords: [
        "curso de T.I",
        "curso de Tecnologia da Informação",
        "curso de programação",
        "curso de informática",
        "curso de excel",
        "curso de inglês",
        "seta cursos"
    ],
    authors: [{ name: "Seta Cursos" }],

    verification: {
        google: "ztY3CureYTqEE4UxlOqDUYKKNzAlFRthvBV2Q78OX7k",
    },
};
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
