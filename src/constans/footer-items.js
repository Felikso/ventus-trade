import React from "react"

import { ReactComponent as Facebook } from "assets/svgs/facebook-square.svg";
import { ReactComponent as Messenger } from "assets/svgs/messenger-square.svg";
import { ReactComponent as Whatsapp } from "assets/svgs/whatsapp-square.svg";
import { ReactComponent as GoogleMyBusiness } from "assets/svgs/google-my-business-square.svg";


export const footerIcons = [
    {icon: (<Whatsapp />), title: "whatsapp", link: "whatsapp://send?phone=48571901144"},
    {icon: (<Messenger />), title: "messenger", link: "https://www.facebook.com/Kopalnia-Gnejsu-Pomian%C3%B3w-Doboszowice-sp-z-oo-300349376653944/"},
    {icon: (<GoogleMyBusiness />), title: "wizytówka google", link: "https://www.google.com/maps/place/Kopalnia+gnejsu/@50.4992395,16.9664319,15z/data=!4m5!3m4!1s0x0:0x19ce455603782150!8m2!3d50.4992395!4d16.9664319"},
    {icon: (<Facebook />), title: "facebook", link: "https://www.google.com/maps/place/Kopalnia+gnejsu/@50.4992395,16.9664319,15z/data=!4m5!3m4!1s0x0:0x19ce455603782150!8m2!3d50.4992395!4d16.9664319"}
]

export const footerData = [
    {title: "oferta", link: "/oferta"},
    {title: "aranżacje", link: "/galeria"},
    {title: "transport", link: "/transport"},
    {title: "lokalizacja", link: "/lokalizacja"},
]

export const footerInfo = [
    {title: "Mapa strony", link: "/sitemap/sitemap-index.xml"},
    {title: "Polityka prywatności", link: "/polityka-prywatnosci"},
    {title: "Coppyright © 2021", link: "/#"},
  ]
  


