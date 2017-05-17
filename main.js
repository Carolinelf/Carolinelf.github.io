/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 $(document).ready(function(){
            $('.handle').on('click', function(e){
                e.preventDefault();
                $('nav ul').slideToggle();
            });
        });