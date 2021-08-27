import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  links=[
    {
      "href" : "https://www.pokemon.com/es/noticias-pokemon/",
      "text" : "Novedades"
    },
    {
      "href" : "https://www.pokemon.com/es/guia-para-padres-tutores/",
      "text" : "Guía para padres y tutores"
    },
    {
      "href" : "https://support.pokemon.com/hc/es",
      "text" : "Servicios de atención al cliente"
    },
    {
      "href" : "https://www.pokemon.com/es/sobre-pokemon/",
      "text" : "Sobre nuestra compañía"
    },
    {
      "href" : "https://www.pokemon.com/es/pais-region/",
      "text" : "Seleccionar país o región"
    },
    {
      "href" : "https://pokemon.gamespress.com/es",
      "text" : "Sitio de prensa Pokémon"
    },
  ];

  links2=[
    {
      "href" : "https://www.facebook.com/mabsgn/",
      "icon" : "./../../../assets/images/footer/fb.png"
    },
    {
      "href" : "youtube.com",
      "icon" : "./../../../assets/images/footer/yt.png"
    },
    {
      "href" : "https://twitter.com/?lang=es",
      "icon" : "./../../../assets/images/footer/tw.png"
    }
  ];

  links3=[
    {
      "href" : "https://www.pokemon.com/es/noticias-pokemon/",
      "text" : "Condiciones de uso"
    },
    {
      "href" : "https://www.pokemon.com/es/guia-para-padres-tutores/",
      "text" : "Aviso de privacidad"
    },
    {
      "href" : "https://support.pokemon.com/hc/es",
      "text" : "Pagina de cookies"
    },
    {
      "href" : "https://www.pokemon.com/es/sobre-pokemon/",
      "text" : "Información legal"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
