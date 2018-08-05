import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  netImage: any = "/src/assets/img/icon/facebook.png";
  
  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      var estado = false;
    
      $('#btn-toggle').on('click',function(){
        $('.seccionToggle').slideToggle();
    
        if (estado == true) {
          $(this).text("Cerrar");
          $('body').css({
            /*"overflow": "auto"*/
            "overflow": "hidden"
          });
          estado = false;
        } else {
          $(this).text("Abrir");
          $('body').css({
           /* "overflow": "hidden"*/
            "overflow": "auto"
          });
          estado = true;
        }
      });
    });

  }

}
